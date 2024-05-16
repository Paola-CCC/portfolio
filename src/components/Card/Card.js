import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

const Card = ({ }) => (
  <div class="card">
    <div class="card-photo">
      <img
        alt=""
        src="https://www.firstforwomen.com/wp-content/uploads/sites/2/2024/07/shakira.jpg"
      />
    </div>
    <div className="card-body">
      <h2>Sound Client</h2>
      <p>
        {" "}
        Projet issu du projet de fin d'année consitant à créer une plateforme
        d'apprentissage de musique classique.
      </p>
      <div className="links-group">
        <a href="#">
          {" "}
          <i class="fa-brands fa-github fa-xl"></i> Github
        </a>
        <a href="#">
          {" "}
          <i class="fa-solid fa-globe fa-lg"></i> Rendu{" "}
        </a>
      </div>
      <ul>
        <li>React JS </li>
        <li>Symfony 6</li>
        <li>Sass</li>
      </ul>
    </div>
  </div>
);

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
