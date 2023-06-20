import video_bg from "../assets/Kenta-food.mp4";
import AutoPlaySilentVideo from "../components/AutoPlay";
import Header from "../components/Header";
import HomeContent from "../components/HomeContent";

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
