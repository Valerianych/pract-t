import React from "react";
import { NavLink } from "react-router-dom";
import './style.css'
import str from './../../img/strelochka.png'

const Navbar = () => {


  return (

    <nav className="main-nav">
      <ul>
        <li>О КОМПАНИИ
          <img src={str} alt="str" />
          <ul>
            <li>Наша фотостудия</li>
            <li>Отзывы</li>
            <li>Частые вопросы</li>
          </ul>
        </li>
        <li>АРЕНДА ЗАЛОВ
        <img src={str} alt="str" />
        </li>
        <li>ФОТОСЕССИИ
        <img src={str} alt="str" />
        </li>
        <li>ПРАВИЛА</li>
        <li>ПОРТФОЛИО</li>
        <li>КОНТАКТЫ</li>
      </ul>
    </nav>

  );
};

export default Navbar;
