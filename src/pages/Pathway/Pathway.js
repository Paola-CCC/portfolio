import React from 'react';
import './Pathway.css';
import { ReactComponent as AngularLogo}  from './../../assets/svg/angular.svg';

import { ReactComponent as ReactLogo}  from './../../assets/svg/react.svg';
import { ReactComponent as JavascriptLogo}  from './../../assets/svg/javascript.svg';
import { ReactComponent as TypeScriptLogo}  from './../../assets/svg/typescript.svg';
import { ReactComponent as SymfonyLogo}  from './../../assets/svg/symfony.svg';
import { ReactComponent as PHPLogo}  from './../../assets/svg/php.svg';
import { ReactComponent as MySqlLogo}  from './../../assets/svg/my-sql.svg';


const Pathway = () => (


  <div className="pathway">
      <section id='skills'>
        <h3> Compétences</h3>
        <div className='skills-container'>


          <div className='skill'>
              <div className='svg-container'>
                <AngularLogo />
              </div>
             <p> Angular</p>
          </div>

          <div className='skill'>
              <div className='svg-container'>
                <ReactLogo />
              </div>
             <p> ReactJS</p>
          </div>

          <div className='skill'>
              <div className='svg-container'>
                <JavascriptLogo />
              </div>
             <p> JavaScript</p>
          </div>

          <div className='skill'>
              <div className='svg-container'>
                <TypeScriptLogo />
              </div>
             <p> TypeScript</p>
          </div>

          <div className='skill'>
              <div className='svg-container symfo'>
                <SymfonyLogo />
              </div>
             <p> Symfony</p>
          </div>

          <div className='skill'>
              <div className='svg-container'>
                <PHPLogo />
              </div>
             <p> PHP</p>
          </div>

          <div className='skill'>
              <div className='svg-container'>
                <MySqlLogo />
              </div>
             <p> MySql</p>
          </div>

        </div>
      </section>
      <section>
              <ul>
                  <li>
                      <h3> Expérience </h3>
                    <p> Développeuse Frontend Angular en Alternance</p>
                    <p> Caisse nationale d'assurance vieillesse (CNAV)</p>
                    <p> 75019, Paris, Ile-de-France | Octobre 2021 - Septembre 2023 </p>
                  </li>
                  <li>
                    <h3> Formation </h3>
                    <p> Bachelor de Concepteur développeur</p>
                    <p> HETIC - Hautes études des technologies de l'information et de la communication</p>
                    <p> Octobre 2020 - Septembre 2023</p>
                  </li>
              </ul>
      </section>


  </div>
);



export default Pathway;
