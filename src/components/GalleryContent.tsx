import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  CardContent,
  Chip,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Restaurant } from "../assets/photos";
import { Card, CardHeader, CardMedia } from "@mui/material";

const GalleryContent = (props: { images: Restaurant[] }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <ImageList
      cols={sm ? (md ? 3 : 2) : 1}
      sx={{ width: "100%", height: "auto" }}
      variant="standard"
      gap={8}
    >
      {props.images.map((item, idx) => (
        <ImageListItem key={idx}>
          <Card sx={{ maxWidth: "100%" }} variant={"outlined"}>
            <CardHeader title={item.name} subheader={item.location} />
            <CardMedia
              component="img"
              image={item.thumbnail}
              sx={{
                maxHeight: "250px",
              }}
            />
            <CardContent>
              <Grid container justifyContent="space-evenly">
                {item.tags.map((tag) => (
                  <Grid item>
                    <Chip label={tag} />
                  </Grid>
                ))}
                <Grid item xs={12} mt={2}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <Typography variant="caption">
                      {`Date ${item.date.substring(0,4)}/${item.date.substring(4, 6)}/${item.date.substring(6)}`}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default GalleryContent;
