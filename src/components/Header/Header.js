import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <ul>
        <li><Link to="/"  > Présentation</Link></li>
        <li><Link to="parcours" >Parcours</Link></li>
        <li><Link to="projects" >Projets</Link></li>
        {/* <li><Link to="contact" >Contact</Link></li> */}
    </ul>
  </header>
);

export default Header;
