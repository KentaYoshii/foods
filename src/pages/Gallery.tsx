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
import { photos, numRs, perPage, Restaurant } from "../assets/photos";
import { listObjects } from "../utils/s3_helper";
import { getRs } from "../utils/helper";

const Gallery = () => {
  // State
  const [images, setImages] = useState<Restaurant[]>([]);
  const [currPage, setCurrPage] = useState(1);
  const [ready, setReady] = useState(false);
  const tkyPgCnt = Math.ceil(numRs / perPage);

  useEffect(() => {
    getRs(0, perPage, "JPN").then((res) => {
      setImages(res);
      setReady(true);
    });
  }, []);

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
    const startIdx = page * perPage - perPage;
    const endIdx = startIdx + perPage;
    const res = await getRs(startIdx, endIdx, "JPN");
    setImages(res);
    setReady(true);
    toTop();
  };

  // Loading State
  if (ready === false) {
    return (
      <>
        <div className="overlay"></div>
        <Box
          sx={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        >
          <LinearProgress />
        </Box>
      </>
    );
  }
  return (
    <Box>
      <Grow
        in={ready}
        style={{ transformOrigin: "0 0 0" }}
        {...(ready ? { timeout: 2500 } : {})}
      >
        <Container
          sx={{
            width: "100%",
            marginTop: "15vh",
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
                  shape="circular"
                  sx={{}}
                  onChange={onPageChange}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Box>
  );
};

export default Gallery;
