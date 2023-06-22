import { Container, Box, Grid } from "@mui/material";
import GalleryContent from "../components/GalleryContent";
import IconLabelTabs from "../components/Tabs";

const Gallery = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        width: "100%",
        marginTop: "15vh"
      }}
    >
      <Grid container>
        <Grid item xs={12}>
            <Box alignItems="center" display="flex"
            justifyContent="center"
            >
                <IconLabelTabs />
            </Box>
        </Grid>
        <Grid item xs={12} mt={3}>
          <Box alignItems="center" display="flex" justifyContent="center">
          <GalleryContent />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Gallery;
