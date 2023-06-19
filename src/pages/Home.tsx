import video_bg from "../assets/Kenta-food.mp4";
import AutoPlaySilentVideo from "../components/AutoPlay";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="main">
      <Header />
      <div className="overlay"></div>
      <AutoPlaySilentVideo video={video_bg}/>
      <div className="content">
        <h1>Welcome</h1>
      </div>
    </div>
  );
};

export default Home;
