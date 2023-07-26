import React from "react";
import { slideRent } from "../../helpers/slideRent";
import yellowSquare from "./../../img/square.png";
import str from "./../../img/str.png";
import chair from "./../../img/slideRent.png";
import './style.css'

const Rent = () => {
  return (
    <div>
      <div className="h1-advantages">
        <div className="text-with-square">
          <img src={yellowSquare} />
          <p>АРЕНДА</p>
        </div>
        <p className="advan">Наши залы</p>
      </div>

      <div className="slide-rent">
        <div className="left-container-rent">
          <img src={chair} />
        </div>
        <div className="right-container-rent">
            <p className="main-text-rent">Футуризм</p>
            <p className="second-text-rent">Просторный, светлый зал, выполненный в стиле <br></br> футуризм и модерн.</p>
            <button>Узнать больше о зале</button>
        </div>
        <div className="str-slide-rent">
          <button className="left-str">
            <img src={str} />
          </button>
          <button className="right-str">
            <img src={str} />
          </button>
        </div>
      </div>

      {/* {slideRent.map((img, index) =>(
        <div>
            <img src={img.img} />
        </div>
      ))} */}
    </div>
  );
};

export default Rent;
