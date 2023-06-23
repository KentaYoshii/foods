import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const GalleryContent = (props) => {
  return (
    <ImageList variant="masonry" cols={2}>
      {props.images.map((item, idx) => (
        <ImageListItem key={item.img} idx={idx}>
          <img
            src={`${item.src}`}
            srcSet={`${item.src}`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default GalleryContent;
