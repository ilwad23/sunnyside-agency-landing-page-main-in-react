import React, { useEffect, useState } from "react";
import "../css/App.css";
import Header from "./Header";
import Benefits from "./Benefits";
import Services from "./Services";
// import Testimonials from "./Testimonials";
// import Gallery from "./Gallery";
// import Footer from "./Footer";

const useScreenSize = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return size;
};

function App() {
  const width = useScreenSize();
  const desktopOrMobile = width > 575?'desktop':'mobile';
  return (
    <div className="app" >
      <Header desktopOrMobile={desktopOrMobile} />
      <Benefits
        img={desktopOrMobile+'/image-transform.jpg'}
        colorText="hsl(51, 100%, 49%)"
        title="Transform your brand"
        para="We are a full-service creative agency specializing in helping brands
        grow fast. Engage your clients through compelling visuals that do most
        of the marketing for you."
        />
      <Benefits
        img={desktopOrMobile+'/image-stand-out.jpg'}
        colorText="hsl(7, 99%, 70%)"
        title="Stand out to the right audience"
        para="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
      />
      <Services imgSize={desktopOrMobile} />
      {/*
      <Testimonials imgSize={desktopOrMobile} />
      <Gallery imgSize={[width, desktopOrMobile]} />
      <Footer imgSize={desktopOrMobile} /> */}
    </div>
  );
}

export default App;
