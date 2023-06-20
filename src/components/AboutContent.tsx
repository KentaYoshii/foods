import React from "react";
import { Grid, Box, Typography } from "@mui/material";

const AboutContent = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Box alignItems="center" justifyContent="center" display="flex">
        <Grid item xs={12}>
          <Typography variant="body1">
            "Itadakimasu" is a phrase used to show appreciation for food. Here, at the delicious intersection of pixels and bites, "Itadakimasu" becomes a joyful jounery through flavors, a feast for your eyes and your cravings. 
          </Typography>
      </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutContent;
