import React, { useState, useRef, useEffect } from "react";
import "../css/header.css";
import HeaderPicD from "../images/desktop/image-header.jpg";
import HeaderPicM from "../images/mobile/image-header.jpg";
import Logo from "../images/logo.svg";
import Arrow from "../images/icon-arrow-down.svg";
import MenuIcon from "@material-ui/icons/Menu";

const Header = () => {
  const section = useRef();
  const [width, setWidth] = useState(section.current?.width);
  const [height, setHeight] = useState(section.current?.height);
  const [desktopOrMobile, setdesktopOrMobile] = useState(width > 575);
  const [show, setShow] = useState(false);
  const HeaderPic = desktopOrMobile ? HeaderPicD : HeaderPicM;
  console.log(height,section.current?.height,width);
  useEffect(() => {
    setWidth(section.current?.width);
    setHeight(section.current?.height);
    setdesktopOrMobile(width > 575);
  }, [section.current?.width]);
  return (
    <header className="header" style={{ height: `${height}px` }}>
      <img ref={section} src={HeaderPic} alt="Header" className="header_img" />
      <img
        src={Arrow}
        className="header_arrow-down"
        alt="arrow facing down"
        style={{
          display: show && "none",
          top: `${height / 2}px`,
          left: `${width / 2}px`,
        }}
      />
      <nav>
        <img src={Logo} className="header_logo" alt="logo" />
        <MenuIcon
          className="header_menu"
          onClick={() => setShow(!show)}
          style={{
            color: show === false && "white",
            display: desktopOrMobile ? "none" : "block",
          }}
        />

        <div
          className="header_arrow-left"
          style={{ display: !show && !desktopOrMobile && "none" }}
        ></div>

        <div
          className="header_menu-links"
          style={{ display: !show && !desktopOrMobile && "none" }}
        >
          <div>
            <h4>About</h4>
          </div>
          <div>
            <h4>Services</h4>
          </div>
          <div>
            <h4>Projects</h4>
          </div>
          <div id="header_yellow-btn">
            <h4>Contact</h4>
          </div>
        </div>
      </nav>

      <div className="header_title" style={{ display: show && "none" }}>
        <h1> WE ARE CREATIVE </h1>
      </div>
    </header>
  );
};

export default Header;
