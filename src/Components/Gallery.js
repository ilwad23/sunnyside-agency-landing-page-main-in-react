import React from "react";
import "../css/gallery.css";

const Gallery = ({ imgSize }) => {
  const size = imgSize[1] === "desktop" ? 4 : 2;
  const halfWidth = imgSize[0] / size;
  const height = imgSize[0];
  return (
    <div
      className="gallery"
      style={{
        width: `${imgSize[0]}px`,
        height: imgSize[1] === "desktop" ? `${halfWidth}px` : `${height}px`,
        position: imgSize[1] !== "desktop" && "relative",
      }}
    >
      <img
        src={`./images/${imgSize[1]}/image-gallery-milkbottles.jpg`}
        alt="milkbottles"
        className="gallery_img img1"
        style={{
          width: `${halfWidth}px`,
          height: `${halfWidth}px`,
        }}
      />
      <img
        src={`./images/${imgSize[1]}/image-gallery-orange.jpg`}
        alt="orange"
        className="gallery_img img2"
        style={{
          width: `${halfWidth}px`,
          height: `${halfWidth}px`,
          position: imgSize[1] !== "desktop" && "absolute",
          left: imgSize[1] !== "desktop" && `${halfWidth}px`,
        }}
      />
      <img
        src={`./images/${imgSize[1]}/image-gallery-cone.jpg`}
        alt="cone"
        className="gallery_img img3"
        style={{
          width: `${halfWidth}px`,
          height: `${halfWidth}px`,
          position: imgSize[1] !== "desktop" && "absolute",
          top: imgSize[1] !== "desktop" && `${halfWidth}px`,
          left: imgSize[1] !== "desktop" && 0,
        }}
      />
      <img
        src={`./images/${imgSize[1]}/image-gallery-sugarcubes.jpg`}
        alt="sugar-cubes"
        className="gallery_img img4"
        style={{
          width: `${halfWidth}px`,
          height: `${halfWidth}px`,
          position: imgSize[1] !== "desktop" && "absolute",
          top: imgSize[1] !== "desktop" && `${halfWidth}px`,
          left: imgSize[1] !== "desktop" && `${halfWidth}px`,
        }}
      />
    </div>
  );
};

export default Gallery;
