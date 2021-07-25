import React from "react";
import "../css/testimonials.css";
import Client from "./Client";
const Testimonials = () => {
  return (
    <div className="testimonials">
      <h3 className="testimonials_title">Client testimonials </h3>
      <div className="testimonials_clients">
        <Client
          img="emily.jpg"
          para="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          name="Emily R."
          status="Marketing Director"
        />
        <Client
          img="thomas.jpg"
          para="Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          name="Thomas S."
          status="Chief Operating Officer"
        />
        <Client
          img="jennie.jpg"
          para="Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          name="Jennie F."
          status="Business Owner"
        />
      </div>
    </div>
  );
};

export default Testimonials;
