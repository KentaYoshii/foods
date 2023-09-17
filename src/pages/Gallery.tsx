import {
  Container,
  Box,
  Grid,
  Pagination,
  Grow,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Divider,
  SelectChangeEvent,
  Button,
} from "@mui/material";
import GalleryContent from "../components/GalleryContent";
import IconLabelTabs from "../components/Tabs";
import React, { useState, useEffect } from "react";
import {
  numRs,
  numGRs,
  perPage,
  Restaurant,
  restaurants,
  globalRestaurants,
  genre,
} from "../assets/photos";
import { getRs, getFavorites } from "../utils/helper";
import { getThumbnailPresignURLs } from "../utils/s3_helper";

const Gallery = () => {
  // State
  const [images, setImages] = useState<Restaurant[]>([]);
  const [originalImages, setOriginalImages] = useState<Restaurant[]>([]);
  const [currPage, setCurrPage] = useState(1);
  const [ready, setReady] = useState(false);
  const [region, setRegion] = useState(0);
  // if load is true, show the loading image gif
  const [load, setLoad] = useState(new Array(perPage).fill(false));
  // showPagination == false if search bar is in use
  const [showPagination, setShowPagination] = useState(true);
  const [showFilters, setShowFilters] = useState(true);
  // reset the gallery
  const [reset, setReset] = useState(false);
  // search bar state tracker
  const [curQuery, setCurQuery] = useState("");
  // genre
  const [curGenre, setCurGenre] = useState("All");

  const tkyPgCnt = Math.ceil(numRs / perPage);
  const gPgCnt = Math.ceil(numGRs / perPage);

  useEffect(() => {
    setReady(false);
    setImages([]);
    setCurQuery("");
    setCurGenre("All");
    if (region !== 2) {
      setShowFilters(true);
      getRs(0, perPage, region).then((res) => {
        setImages(res);
        if (region === 0) {
          setOriginalImages(restaurants);
        } else if (region === 1) {
          setOriginalImages(globalRestaurants);
        }
        setLoad(new Array(perPage).fill(false));
        setCurrPage(1);
        setShowPagination(true);
        setReady(true);
      });
    } else {
      // fav tab
      setShowFilters(false);
      setShowPagination(false);
      getFavorites().then((res) => {
        setImages(res);
        setLoad(new Array(res.length).fill(false));
        setReady(true);
        return;
      });
    }
  }, [region, reset]);

  // Helper
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const onPageChange = async (e: React.ChangeEvent<unknown>, page: number) => {
    if (page === currPage) {
      toTop();
      return;
    }
    setCurrPage(page);
    setReady(false);
    setImages([]);
    const startIdx = page * perPage - perPage;
    const endIdx = startIdx + perPage;
    const res = await getRs(startIdx, endIdx, region);
    toTop();
    setImages(res);
    setLoad(new Array(perPage).fill(false));
    setReady(true);
  };

  const onNameInputChange = async (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.target.value === "") {
      // reset
      setShowPagination(true);
      setCurQuery("");
      setReset(!reset);
      return;
    }
    setCurQuery(e.target.value);
    setShowPagination(false);
    let query = e.target.value.toLowerCase().replace(/[^0-9a-z]/gi, "");
    const imagesToQueryFrom = originalImages;
    const newImages = imagesToQueryFrom.filter((image: Restaurant) => {
      const name = image.name.toLowerCase().replace(/[^0-9a-z]/gi, "");
      return name.includes(query) ? true : false;
    });
    setReady(false);
    setImages([]);
    const res = await getThumbnailPresignURLs(newImages);
    setImages(res);
    setLoad(new Array(res.length).fill(false));
    setReady(true);
  };

  const onGenreChange = async (e: SelectChangeEvent) => {
    if (e.target.value === "All") {
      // reset
      setShowPagination(true);
      setCurGenre("All");
      setCurQuery("");
      setReset(!reset);
      return;
    }
    setCurGenre(e.target.value);
    setShowPagination(false);
    const imagesToQueryFrom = originalImages;
    const newImages = imagesToQueryFrom.filter((image) => {
      const g = image.genre;
      return g === e.target.value ? true : false;
    });
    setReady(false);
    setImages([]);
    const res = await getThumbnailPresignURLs(newImages);
    setImages(res);
    setLoad(new Array(res.length).fill(false));
    setReady(true);
  };

  return (
    <Box>
      <Container
        sx={{
          width: "100%",
          marginTop: "15vh",
        }}
      >
        <Grid container>
          <Grid item xs={12} mb={2}>
            <Box alignItems="center" display="flex" justifyContent="center">
              <IconLabelTabs setRegion={setRegion} region={region} />
            </Box>
          </Grid>
          {showFilters && (
            <Grid
              container
              mb={2}
              mt={1}
              item
              xs={12}
              justifyContent="center"
              spacing={3}
            >
              <Grid item>
                <Box alignItems="center" display="flex" justifyContent="center">
                  <FormControl
                    variant="standard"
                    sx={{ maxWidth: 120 }}
                    size="small"
                  >
                    <InputLabel htmlFor="component-simple" size="small">
                      Name
                    </InputLabel>
                    <Input
                      id="component-simple"
                      onChange={onNameInputChange}
                      value={curQuery}
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item>
                <Divider orientation="vertical">or</Divider>
              </Grid>
              <Grid item>
                <Box alignItems="center" display="flex" justifyContent="center">
                  <FormControl
                    sx={{ minWidth: 120 }}
                    variant="standard"
                    size="small"
                  >
                    <InputLabel id="demo-simple-select-label">Genre</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={curGenre}
                      label="genre"
                      onChange={onGenreChange}
                    >
                      {genre.map((g, idx) => (
                        <MenuItem value={g} key={idx} id={g}>
                          {g}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            </Grid>
          )}
          {(curQuery !== "" || curGenre !== "All" ) && <Grid item xs={12}>
            <Box justifyContent="center" alignItems="center" display="flex">
              <Button variant="text"
              onClick={() => {
                setReset(!reset);
              }}
              >Clear</Button>
            </Box>
          </Grid>}
          <Grow in={ready} {...(ready ? { timeout: 2500 } : {})}>
            <Grid container mb={showPagination ? 0 : 2}>
              <Grid item xs={12} mt={3}>
                <Box alignItems="center" display="flex" justifyContent="center">
                  <GalleryContent
                    images={images}
                    load={load}
                    setLoad={setLoad}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grow>
          {showPagination && (
            <Grid item xs={12} mt={5} mb={5}>
              <Box alignItems="center" display="center" justifyContent="center">
                <Pagination
                  count={region === 0 ? tkyPgCnt : gPgCnt}
                  onChange={onPageChange}
                  showFirstButton
                  showLastButton
                  siblingCount={0}
                />
              </Box>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;
