import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <ul>
        <li><a href="#presentation"  tabindex="0"> Présentation</a></li>
        <li><a href="#process" tabindex="0">Parcours</a></li>
        <li><a href="#projects" tabindex="0">Projets</a></li>
        <li><a href="#contact" tabindex="0">Contacter</a></li>
    </ul>
  </header>
);

export default Header;
