import React from "react";
import "../css/services.css";
// import ServPicD from "../images/desktop/image-transform.jpg";
// import ServPicM from "../images/desktop/image-transform.jpg";

const Service = ({ img, title, para, colorText }) => {
  return (
    <div className="service">
      <img src={`./images/${img}`} alt={img} className="service_img" />
      <div className="service_content">
        <div
          className="service_text"
          style={{
            color: colorText,
          }}
        >
          <h2 className="service_title">{title}</h2>
          <p className="service_para">{para}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
