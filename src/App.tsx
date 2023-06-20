import { Route, Routes, Outlet, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Header from "./components/Header";
import "./App.css";

function App() {
  const Layout = () => {
    const location = useLocation();
    console.log(location.pathname)
    return (
      <>
        <Header current={location.pathname} />
        <Outlet />
      </>
    );
  };

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}

export default App;
