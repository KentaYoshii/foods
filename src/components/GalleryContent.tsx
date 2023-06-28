import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, CardContent, Chip, Grid, Link, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Restaurant } from "../assets/photos";
import {
  Card,
  CardHeader,
  CardMedia,
  CardActionArea,
  Modal,
} from "@mui/material";
import loading from "../assets/loading.gif";
import { getRImages } from "../utils/helper";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const GalleryContent = (props: {
  images: Restaurant[];
  load: Array<boolean>;
  setLoad: (n: Array<boolean>) => void;
}) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const [rModal, setRModal] = useState<Restaurant>();
  const [rModalImgs, setRModalImgs] = useState<string[]>();
  const [open, setOpen] = useState(false);
  // const [load, setLoad] = useState(new Array(perPage).fill(false));
  const handleOpen = (r: Restaurant) => {
    setRModal(r);
    getRImages(r).then((imgs) => {
      setRModalImgs(imgs);
      setOpen(true);
    });
  };
  const handleClose = () => {
    setRModalImgs(undefined);
    setRModal(undefined);
    setOpen(false);
  };

  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    minWidth: sm ? "50%" : "80%",
    // minHeight: "auto",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    boxShadow: 24,
  };

  return (
    <>
      <ImageList
        cols={sm ? (md ? 3 : 2) : 1}
        sx={{ width: "100%", height: "auto" }}
        variant="standard"
        gap={8}
      >
        {props.images.map((item, idx) => (
          <ImageListItem key={idx}>
            <Card sx={{ maxWidth: "100%" }} variant={"outlined"}>
              <CardActionArea
                onClick={() => {
                  handleOpen(item);
                }}
              >
                <CardHeader title={item.name} subheader={item.location} />
                {props.load[idx] === false && (
                  <CardMedia component="img" image={loading} sx={{
                    maxHeight: "200px",
                  }}/>
                )}
                <CardMedia
                  component="img"
                  image={item.thumbnail}
                  sx={{
                    maxHeight: props.load[idx] ? "200px" : "0px",
                  }}
                  onLoad={() => {
                    props.load[idx] = true;
                    props.setLoad([...props.load]);
                  }}
                />
              </CardActionArea>
              <CardContent>
                <Grid container justifyContent="space-evenly">
                  {item.tags.map((tag, idx) => (
                    <Grid item key={idx}>
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
                        {`Date - ${item.date.substring(
                          0,
                          4
                        )}/${item.date.substring(4, 6)}/${item.date.substring(
                          6
                        )}`}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item mt={2}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      {item.website !== "" ? (
                        <Link
                          underline="none"
                          target="_blank"
                          href={item.website}
                        >
                          Website
                        </Link>
                      ) : (
                        <Typography variant="caption">Hidden gem 😉</Typography>
                      )}
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </ImageListItem>
        ))}
      </ImageList>
      {rModal && rModalImgs && (
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <Carousel showThumbs={false} width="inherit">
              {rModalImgs.map((img, idx) => (
                <Box key={idx}>
                  <Box
                    component="img"
                    src={img}
                    maxWidth={"80vw"}
                    maxHeight={"80vh"}
                  />
                </Box>
              ))}
            </Carousel>
          </Box>
        </Modal>
      )}
    </>
  );
};

export default GalleryContent;
