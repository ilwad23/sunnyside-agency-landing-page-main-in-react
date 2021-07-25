import React from "react";
import "../css/benefits.css";
function Benefits({ colorText, title, para, img }) {
  const pos =  img.indexOf("d") === 0?title.indexOf("T") === 0 ? "row-reverse" : "row":'collumn';
  console.log(pos);
  return (
    <div className="benefits" style={{ flexDirection: `${pos}` } }>
      <img src={`./images/${img}`} alt={img} className="benefits_img" />
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
  );
}

export default Benefits;
