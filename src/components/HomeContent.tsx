import { Grid, Box, Typography } from "@mui/material";

const HomeContent = () => {
  return (
    <Grid container>
      <Grid item xs={12} mt={4} ml={4} mr={4} mb={2}>
        <Box alignItems="center" justifyContent="left" display="flex">
          <Typography
            variant="h2"
            fontWeight={"bold"}
            sx={{
              textDecorationLine: "underline",
              textUnderlineOffset: "15px",
            }}
          >
            Itadakimasu
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeContent;
