import video_bg from "../assets/Kenta-food.mp4";
import AutoPlaySilentVideo from "../components/AutoPlay";
import HomeContent from "../components/HomeContent";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <AutoPlaySilentVideo video={video_bg}/>
      <div className="content">
        <HomeContent />
      </div>
    </div>
  );
};

export default Home;
