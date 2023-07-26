import React from "react";
import yellowSquare from "./../../img/square.png";
import { photoList } from "./../../helpers/photoList";
import str from "./../../img/str.png";
import "./style.css";

const Services = () => {
  return (
    <div>
      <div className="h1-advantages">
        <div className="text-with-square">
          <img src={yellowSquare} />
          <p>УСЛУГИ</p>
        </div>
        <p className="advan">Фотоссесии</p>
      </div>
      <div className="position-cart-photo">
  {photoList.map((photo, index) => (
    <div key={index} className="cart-photo">
      <img src={photo.img} alt="Project Icon" />
      <button>
        <img src={str} />
      </button>
      <div className="white-board">
        <p>{photo.text}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  );
};

export default Services;
