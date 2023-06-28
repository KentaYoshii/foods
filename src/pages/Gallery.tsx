import {
  Container,
  Box,
  Grid,
  Pagination,
  Grow,
  LinearProgress,
} from "@mui/material";
import GalleryContent from "../components/GalleryContent";
import IconLabelTabs from "../components/Tabs";
import React, { useState, useEffect } from "react";
import { numRs, numGRs, perPage, Restaurant } from "../assets/photos";
import { getRs } from "../utils/helper";

const Gallery = () => {
  // State
  const [images, setImages] = useState<Restaurant[]>([]);
  const [currPage, setCurrPage] = useState(1);
  const [ready, setReady] = useState(false);
  const [region, setRegion] = useState(0);
  const [load, setLoad] = useState(new Array(perPage).fill(false));

  const tkyPgCnt = Math.ceil(numRs / perPage);
  const gPgCnt = Math.ceil(numGRs / perPage);

  useEffect(() => {
    setReady(false);
    setImages([])
    getRs(0, perPage, region).then((res) => {
      setImages(res);
      setLoad(new Array(perPage).fill(false))
      setCurrPage(1);
      setReady(true);
    });
  }, [region]);

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
    setLoad(new Array(perPage).fill(false))
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
          <Grid item xs={12}>
            <Box alignItems="center" display="flex" justifyContent="center">
              <IconLabelTabs setRegion={setRegion} region={region} />
            </Box>
          </Grid>
          <Grow in={ready} {...(ready ? { timeout: 2500 } : {})}>
            <Grid container>
              <Grid item xs={12} mt={3}>
                <Box alignItems="center" display="flex" justifyContent="center">
                  <GalleryContent images={images} load={load} setLoad={setLoad}/>
                </Box>
              </Grid>
            </Grid>
          </Grow>
          <Grid item xs={12} mt={5} mb={5}>
            <Box alignItems="center" display="center" justifyContent="center">
              <Pagination
                variant="outlined"
                count={region === 0 ? tkyPgCnt : gPgCnt}
                color="standard"
                shape="circular"
                sx={{}}
                onChange={onPageChange}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Gallery;
