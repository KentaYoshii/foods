import {
  Container,
  Box,
  Grid,
  Pagination,
  Grow,
  FormControl,
  Input,
  InputLabel,
} from "@mui/material";
import GalleryContent from "../components/GalleryContent";
import IconLabelTabs from "../components/Tabs";
import React, { useState, useEffect } from "react";
import { numRs, numGRs, perPage, Restaurant, restaurants, globalRestaurants } from "../assets/photos";
import { getRs } from "../utils/helper";
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
  // reset the gallery
  const [reset, setReset] = useState(false);
  // search bar state tracker
  const [curQuery, setCurQuery] = useState("");

  const tkyPgCnt = Math.ceil(numRs / perPage);
  const gPgCnt = Math.ceil(numGRs / perPage);

  useEffect(() => {
    setReady(false);
    setShowPagination(true);
    setImages([]);
    setCurQuery("");
    getRs(0, perPage, region).then((res) => {
      setImages(res);
      if (region === 0) {
        setOriginalImages(restaurants);
      } else {
        setOriginalImages(globalRestaurants);
      }
      setLoad(new Array(perPage).fill(false));
      setCurrPage(1);
      setReady(true);
    });
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

  const onNameInputChange = async (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.target.value === "") {
      // reset
      setShowPagination(true);
      setCurQuery("");
      setReset(!reset);
      return
    } 
    setCurQuery(e.target.value);
    setShowPagination(false);
    let query = e.target.value.toLowerCase().replace(/[^0-9a-z]/gi, '');
    const imagesToQueryFrom = originalImages;
    const newImages = imagesToQueryFrom.filter((image: Restaurant) => {
      const name = image.name.toLowerCase().replace(/[^0-9a-z]/gi, '');
      return name.includes(query) ? true : false;
    });
    setReady(false);
    setImages([]);
    const res = await getThumbnailPresignURLs(newImages);
    setImages(res);
    setLoad(new Array(res.length).fill(false));
    setReady(true);    
  }

  return (
    <Box>
      <Container
        sx={{
          width: "100%",
          marginTop: "15vh",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Box alignItems="center" display="flex" justifyContent="center">
              <IconLabelTabs setRegion={setRegion} region={region} />
            </Box>
          </Grid>
          <Grid item xs={12} m={2}>
            <Box alignItems="center" display="flex" justifyContent="center">
              <FormControl variant="standard">
                <InputLabel htmlFor="component-simple">Restaurant Name</InputLabel>
                <Input
                  id="component-simple"
                  onChange={onNameInputChange}
                  value={curQuery}
                />
              </FormControl>
            </Box>
          </Grid>
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
          {showPagination && <Grid item xs={12} mt={5} mb={5}>
            <Box alignItems="center" display="center" justifyContent="center">
              <Pagination
                count={region === 0 ? tkyPgCnt : gPgCnt}
                onChange={onPageChange}
                showFirstButton
                showLastButton
                siblingCount={0}
              />
            </Box>
          </Grid>}
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;
