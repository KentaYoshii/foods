import {
  Grid,
  Box,
  Typography,
  ImageList,
  ImageListItem,
  useMediaQuery,
  Grow,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import img_1 from "../assets/slideshow/hye_1.jpeg";
import img_2 from "../assets/slideshow/hye_2.jpeg";
import img_3 from "../assets/slideshow/hye_3.jpeg";
import img_4 from "../assets/slideshow/hye_4.jpeg";
import img_5 from "../assets/slideshow/hye_5.jpeg";
import img_6 from "../assets/slideshow/hye_6.jpeg";
import img_7 from "../assets/slideshow/hye_7.jpeg";
import img_8 from "../assets/slideshow/hye_8.jpeg";
import img_9 from "../assets/slideshow/hye_9.jpeg";
import img_10 from "../assets/slideshow/hye_10.jpeg";
import img_11 from "../assets/slideshow/hye_11.jpeg";
import img_12 from "../assets/slideshow/hye_12.jpeg";
import img_13 from "../assets/slideshow/hye_13.jpeg";
import img_14 from "../assets/slideshow/hye_14.jpeg";
import img_15 from "../assets/slideshow/hye_15.jpeg";
import img_16 from "../assets/slideshow/hye_16.jpeg";
import img_17 from "../assets/slideshow/hye_17.jpeg";
import img_18 from "../assets/slideshow/hye_18.jpeg";

type ImageT = {
  img: string;
};

const itemData: ImageT[] = [
  {
    img: img_1,
  },
  {
    img: img_2,
  },
  {
    img: img_3,
  },
  {
    img: img_4,
  },
  {
    img: img_5,
  },
  {
    img: img_6,
  },
  {
    img: img_7,
  },
  {
    img: img_8,
  },
  {
    img: img_9,
  },
  {
    img: img_10,
  },
  {
    img: img_11,
  },
  {
    img: img_12,
  },
  {
    img: img_13,
  },
  {
    img: img_14,
  },
  {
    img: img_15,
  },
  {
    img: img_16,
  },
  {
    img: img_17,
  },
  {
    img: img_18,
  },
];

const perSlide = 6;
const maxSlide = 3;

const HomeContent = (props: { reload: string }) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const [showTitle, setShowTitle] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [slide, setSlide] = useState(0);
  const [init, setInit] = useState(false);
  const [images, setImages] = useState<ImageT[]>(itemData.slice(0, perSlide));
  

  useEffect(() => {
    if (init) {
      const newItems = itemData.slice(
        slide * perSlide,
        slide * perSlide + perSlide
      );
      setImages([...newItems]);
      setShowImages(true);
    }
  }, [slide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowImages(false);
      
      setSlide((prev) => (prev + 1) % maxSlide);
      return () => {
        clearInterval(interval);
      };
    }, 10000);
  }, []);

  setTimeout(
    () => {
      setShowTitle(true);
    },
    1000
    // props.reload === "true" ? 4000 : 1000
  );

  setTimeout(
    () => {
      setShowImages(true);
      setInit(true);
    },
    1500
    // props.reload === "true" ? 4500 : 1500
  );

  setTimeout(() => {
    sessionStorage.setItem("timeout", "true");
  }, 5000);

  return (
    <Grid
      container
      spacing={sm ? 3 : 7}
      justifyContent="center"
      alignItems="center"
      height={"80vh"}
    >
      <Grid item xs={12} sm={12} md={5} ml={2} mr={2}>
        <Grow in={showTitle} {...(showImages ? { timeout: 1500 } : {})}>
          <Grid container item>
            <Grid item>
              <Box alignItems="center" justifyContent="center" display="flex">
                <Typography
                  variant="h2"
                  fontWeight={"bold"}
                  sx={{
                    textDecorationLine: "underline",
                    textUnderlineOffset: "15px",
                  }}
                >
                  HaruYoshiEats
                </Typography>
              </Box>
            </Grid>
            <Grid item mt={4}>
              <Box alignItems="center" justifyContent="center" display="flex">
                <Typography variant="h5">
                  Welcome to HaruYoshiEats, a gallery full of deliciousness and
                  amazing memories. Our journey began with a shared love for
                  good food and the desire to capture the essence of each dining
                  experience. I hope you, a fellow foodie, will find our food
                  gallery to be a mouthwatering source of inspiration and a
                  delightful culinary journey to share in.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grow>
      </Grid>
      <Grid item xs={12} sm={12} md={5} ml={2} mr={2} mb={5}>
        <Box alignItems="center" justifyContent="center" display="flex">
          <ImageList
            variant="quilted"
            cols={3}
            gap={8}
            sx={{ maxWidth: "inherit", maxHeight: "inherit" }}
          >
            {images.map((item, idx) => (
              <Grow
                key={idx}
                in={showImages}
                style={{
                  transformOrigin:
                    idx % 2 == 0 ? "center top" : "center bottom",
                }}
                {...(showImages
                  ? { timeout: 900 }
                  : { })}
              >
                <ImageListItem key={item.img}>
                  <img src={item.img} loading="lazy" />
                </ImageListItem>
              </Grow>
            ))}
          </ImageList>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeContent;
