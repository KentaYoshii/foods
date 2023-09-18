import HomeContent from "../components/HomeContent";

const Home = () => {
  const reloadTO = sessionStorage.getItem("timeout");
  let propToPass;
  // First time visitng
  if (reloadTO === null) {
    propToPass = "true";
  } else {
    propToPass = "false";
  }
  return (
    <div className="main">
      <div className="content">
        <HomeContent reload={propToPass} />
      </div>
    </div>
  );
};

export default Home;
