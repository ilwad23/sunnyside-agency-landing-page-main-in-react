import React from "react";
import "../css/client.css";
const Client = ({ img, para, name, status }) => {
  return (
    <div className="client">
      <img className="client_img" src={`images/image-${img}`} alt={`${img}`} />
      <p className="client_para">{para}</p>
      <p className="client_name">{name}</p>
      <p className="client_status">{status}</p>
    </div>
  );
};
export default Client;
