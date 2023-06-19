import React from "react";
import { Grid, Box, Typography, Divider } from "@mui/material";
import { TypeAnimation } from "react-type-animation";

const HomeContent = () => {
  return (
    <Grid container>
      <Grid item xs={12} mt={4} ml={4} mr={4} mb={2}>
        <Box alignItems="center" justifyContent="left" display="flex">
          <Typography variant="h2" fontWeight={"bold"}>
            Itadakimasu
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Divider variant="middle" sx={{borderBottomWidth: 5, borderColor: "white", marginLeft: 4, marginRight: 4}}/>
      </Grid>
      <Grid item xs={12} margin={2}>
        <Box alignItems="center" justifyContent="center" display="flex">
          <Typography variant="body1">"Itadakimasu" is a Japanese phrase that is commonly used before starting a meal. It is a polite and traditional way of expressing gratitude and respect for the food being served. Translated into English, it can be understood as "I humbly receive" or "Let's eat."

</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeContent;
