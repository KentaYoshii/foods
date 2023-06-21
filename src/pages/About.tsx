import AboutContent from "../components/AboutContent";
import { Grid, Box, Container, Typography } from "@mui/material";
import bgImg from "../assets/sushi.jpeg";

const About = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <Box
        sx={{
          backgroundImage: `url(${bgImg})`,
          width: "100%",
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      ></Box>
      <div className="aboutContent">
        <Container
          maxWidth="lg"
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backgroundAttachment: "fixed",
            borderRadius: "2.5%"
          }}
        >
          <Grid container padding={"5% 10%"} textAlign="center">
            <Grid item xs={12}>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h2"> Itadakimasu</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} mt={4}>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="body1">
                  "Itadakimasu" is a Japanese phrase that delicately dances on
                  the palate of tradition. Beyond gratitude before a meal, it
                  transforms into a tantalizing journey.
                </Typography>
                <Typography variant="body1" mt={2}>
                  Welcome to our pixelated haven, where each dish holds the
                  essence of culinary exploration. Indulge in edible wonders and
                  capture flavorful memories with a single click.
                </Typography>
                <Typography variant="body1" mt={2}>
                  Bon appétit meets pixels, and "Itadakimasu" becomes your
                  gateway to a mouthwatering adventure.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default About;
