import React from "react";
import "../css/services.css";
import Service from "./Service";
const Services = ({ imgSize }) => {
  return (
    <div className="services">
      <Service
        img={imgSize + "/image-graphic-design.jpg"}
        title="Graphic design"
        para="Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention."
        colorText="hsl(167, 40%, 24%)"
      />
      <Service
        img={imgSize + "/image-photography.jpg"}
        title="Photography"
        para="Increase your credibility by getting the most stunning, high-quality photos that improve your business image."
        colorText="hsl(198, 62%, 26%)"
      />
    </div>
  );
};

export default Services;
