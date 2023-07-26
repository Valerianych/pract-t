import React from "react";
import yellowSquare from "./../../img/square.png";
import "./style.css";

const AboutUs = () => {
  return (
    <div>
      <div className="h1-advantages">
        <div className="text-with-square">
          <img src={yellowSquare} />
          <p>О КОМПАНИИ</p>
        </div>
        <p className="advan">Наша фотостудия</p>
      </div>
      <div className="main-text-about">
        <div className="first-text-about">
          Van Gog фотостудия это творческое арт - пространство для реализации
          любых идей и задач! Это не просто студия для сьемки, это целый
          комплекс услуг для вас и ваших близких!
        </div>
        <div className="second-text-about">
          Это не просто студия для сьемки, это целый комплекс услуг для вас и
          ваших близких!
          <br />
          Мы работаем по системе «все включено», обратившись к нам вам нужно
          только одно, рассказать, что вы хотите, а мы в свою очередь предложим
          варианты фотосъемки и варианты для реализации ваших идей.
        </div>
        <button>Больше о фотостудии</button>
      </div>
    </div>
  );
};

export default AboutUs;
