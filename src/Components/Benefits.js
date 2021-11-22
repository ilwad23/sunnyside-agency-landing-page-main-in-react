import React from "react";
import "../css/benefits.css";
import TransformPicD from "../images/desktop/image-transform.jpg";
import TransformPicM from "../images/desktop/image-transform.jpg";
import StandOutPicD from "../images/desktop/image-stand-out.jpg";
import StandOutPicM from "../images/mobile/image-stand-out.jpg";



function Benefits({ colorText, title, para, img }) {
  const pos =
  img
  ? title.indexOf("T") === 0
  ? "row-reverse"
  : "row"
  : "collumn";
  
  const BenefitPic = img
    ? title.indexOf("T") === 0
      ? TransformPicD
      : StandOutPicD
    : title.indexOf("T") === 0
    ? TransformPicM
    : StandOutPicM;
  return (
    <div className="benefits" style={{ flexDirection: `${pos}` }}>
      <img src={BenefitPic} alt="transform" className="benefits_img" />
      <div className="benefits_textWrapper">
        <div className="benefits_text">
          <h1 className="benefits_title">{title}</h1>
          <p className="benefits_para"> {para}</p>
          <div
            className="benefits_btn"
            style={{ borderBottom: `5px solid ${colorText}` }}
          >
            LEARN MORE
          </div>
        </div>
      </div>
    </div>
  );
}

export default Benefits;
