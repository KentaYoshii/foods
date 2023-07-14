import { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Box, CardContent, Grid, IconButton, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { GrCircleInformation } from "react-icons/gr";
import { CgUnavailable } from "react-icons/cg";
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
              <CardHeader
                title={
                  <Grid container mb={1}>
                    <Grid item xs={8} paddingTop={0.5}>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                      >
                        <Typography variant="h6">{item.name}</Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={4}>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="right"
                      >
                        {item.website === "" ? (
                          <IconButton disabled>
                            <CgUnavailable />
                          </IconButton>
                        ) : (
                          <IconButton href={item.website} target="_blank">
                            <GrCircleInformation />
                          </IconButton>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                }
                subheader={
                  <Grid container>
                    <Grid item xs={6}>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="left"
                      >
                        <Typography variant="caption">
                          {item.location}
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="right"
                      >
                        <Typography variant="caption">{`${item.date.substring(
                          0,
                          4
                        )}/${item.date.substring(4, 6)}/${item.date.substring(
                          6
                        )}`}</Typography>
                      </Box>
                    </Grid>
                  </Grid>
                }
              />
              <CardActionArea
                onClick={() => {
                  handleOpen(item);
                }}
              >
                {props.load[idx] === false && (
                  <CardMedia
                    component="img"
                    image={loading}
                    sx={{
                      maxHeight: "200px",
                    }}
                  />
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
                  <Grid item mt={1}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Typography variant="body2">
                          {item.tags[0]}
                      </Typography>
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
