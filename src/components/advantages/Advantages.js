import React from "react";
import { projects } from "./../../helpers/projectsList";
import yellowSquare from './../../img/square.png'
import './style.css'

const Advantages = () => {
  return (
    <div className="advantages">
      <div className="h1-advantages">
        <div className="text-with-square">
          <img src={yellowSquare} />
          <p>НАШИ ПРЕИМУЩЕСТВА</p>
        </div>
        <p className="advan">5 причин прийти к нам</p>
      </div>
      <div>
        <ul className="projects">
          {projects.map((project, index) => (
            <div key={index}>
                <img
                className="img-advantages"
                src={project.img}
                alt="Project Icon"
              />
              <p className="main-text-advantages">{project.title}</p>
              <p className="second-text-advantages">{project.text}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Advantages;
