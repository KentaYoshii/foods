import { Container, Box, Grid, Pagination } from "@mui/material";
import GalleryContent from "../components/GalleryContent";
import IconLabelTabs from "../components/Tabs";
import React, { useState } from "react";
import { photos, numImages } from "../assets/photos";

const Gallery = () => {
  const perPage = 5;
  const [images, setImages] = useState(photos.slice(0, perPage));
  const tkyPgCnt = Math.ceil(numImages / perPage);
  const onPageChange = (e: React.ChangeEvent<unknown>, page: number) => {
    const startIdx = page * perPage - perPage;
    const endIdx = startIdx + perPage;
    setImages(photos.slice(startIdx, endIdx));
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
  };
  return (
    <Box sx={{}}>
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
              <GalleryContent images={images} />
            </Box>
          </Grid>
          <Grid item xs={12} mt={5} mb={5}>
            <Box alignItems="center" display="center" justifyContent="center">
              <Pagination
                variant="outlined"
                count={tkyPgCnt}
                color="standard"
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
