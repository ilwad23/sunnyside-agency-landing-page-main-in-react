import React from "react";
import Logo from "./Logo";
import "../css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_content">
        <Logo className="footer_logo" color={"hsl(168, 41%, 25%)"} />
        <div className="footer_menu-links">
          <div>
            <h3>About</h3>
          </div>
          <div>
            <h3>Services</h3>
          </div>
          <div>
            <h3>Projects</h3>
          </div>
        </div>
        <div className="footer_icons">
          <img
            src="./images/icon-facebook.svg"
            className="footer_icon-facebook"
            alt="icon-facebook"
          />
          <img
            src="./images/icon-instagram.svg"
            className="footer_icon-instagram"
            alt="icon-instagram"
          />
          <img
            src="./images/icon-twitter.svg"
            className="footer_icon-twitter"
            alt="icon-twitter"
          />
          <img
            src="./images/icon-pinterest.svg"
            className="footer_icon-pinterest"
            alt="icon-pinterest"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
