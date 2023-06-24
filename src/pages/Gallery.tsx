import { Container, Box, Grid, Pagination, Grow } from "@mui/material";
import GalleryContent from "../components/GalleryContent";
import IconLabelTabs from "../components/Tabs";
import React, { useState, useEffect } from "react";
import { photos, numImages, perPage } from "../assets/photos";

const Gallery = () => {
  const [images, setImages] = useState(photos.slice(0, perPage));
  const [currPage, setCurrPage] = useState(1);
  const [ready, setReady] = useState(false);
  const [loadCount, setLoadCount] = useState(0);
  useEffect(() => {
    if (loadCount === perPage) {
        setReady(true);
    }
  }, [loadCount])

  const tkyPgCnt = Math.ceil(numImages / perPage);
  const onPageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    if (page === currPage) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
        return;
    }
    setCurrPage(page);
    setReady(false);
    setLoadCount(0);
    const startIdx = page * perPage - perPage;
    const endIdx = startIdx + perPage;
    setImages(photos.slice(startIdx, endIdx));
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  };
  return (
    <Box>
      <Container
        sx={{
          width: "100%",
          marginTop: "13vh",
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Box alignItems="center" display="flex" justifyContent="center">
              <IconLabelTabs />
            </Box>
          </Grid>
          <Grid item xs={12} mt={3}>
            <Box alignItems="center" display="flex" justifyContent="center">
              <GalleryContent images={images} setLoadCount={setLoadCount}/>
            </Box>
          </Grid>
          <Grid item xs={12} mt={5} mb={5}>
            <Box alignItems="center" display="center" justifyContent="center">
              <Pagination
                variant="outlined"
                count={tkyPgCnt}
                color="standard"
                shape="circular"
                sx={{
                }}
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
