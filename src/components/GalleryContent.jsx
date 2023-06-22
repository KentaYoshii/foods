import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { photos } from "../assets/photos";

const GalleryContent = () => {
  return (
    <ImageList>
      {photos.map((item, idx) => (
        <ImageListItem key={item.img} idx={idx}>
          <img
            src={`${item.src}`}
            srcSet={`${item.src}`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default GalleryContent;
