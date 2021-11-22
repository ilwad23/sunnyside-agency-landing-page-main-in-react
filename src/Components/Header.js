import React, { useState} from "react";
import "../css/header.css";
import HeaderPicD from "../images/desktop/image-header.jpg";
import HeaderPicM from "../images/mobile/image-header.jpg";
import Logo from "../images/logo.svg";
import Arrow from "../images/icon-arrow-down.svg";
import MenuIcon from "@material-ui/icons/Menu";

const Header = ({ desktopOrMobile }) => {
  const HeaderPic = desktopOrMobile ? HeaderPicD : HeaderPicM;
  const [show, setShow] = useState(false);

  return (
    <header
      className="header"
    >
      <img src={HeaderPic} alt="Header" className="header_img" />
      <img
        src={Arrow}
        className="header_arrow-down"
        alt="arrow facing down"
        style={{
          display: show && "none",
        }}
      />

      <div className="header_content">
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
      </div>
    </header>
  );
};

export default Header;
