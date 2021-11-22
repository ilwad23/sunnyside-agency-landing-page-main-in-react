import React, { useState } from "react";
import "../css/header.css";
import MenuIcon from "@material-ui/icons/Menu";

const Header = ({ desktopOrMobile }) => {
  const [show, setShow] = useState(false);
  const desktop = desktopOrMobile === "desktop";
  console.log(desktopOrMobile);
  return (
    <header className="header">
      <img
        src={`./images/${desktopOrMobile}/image-header.jpg`}
        alt="Header"
        className="header_img"
      />
      <img
        src="./images/icon-arrow-down.svg"
        className="header_arrow-down"
        alt="arrow facing down"
        style={{ display: show && "none" }}
      />
      <div className="header_content">
        <nav>
          <img src="./images/logo.svg" className="header_logo" alt="logo" />
          <MenuIcon
            className="header_menu"
            onClick={() => setShow(!show)}
            style={{
              color: show === false && "white",
              display: desktop && "none",
            }}
          />

          <div
            className="header_arrow-left"
            style={{ display: !show && !desktop && "none" }}
          ></div>

          <div
            className="header_menu-links"
            style={{ display: !show && !desktop && "none" }}
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
