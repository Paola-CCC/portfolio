import React from 'react';
import './Projects.css';
import clientSound from'../../assets/screens/client-symfo-sound.jpg';
import beautyGalaxyPhoto from'../../assets/screens/beauty-galaxy.png';
import cineMoiPhoto from'../../assets/screens/cine-moi.png';
import backOfficeSymfoPhoto from'../../assets/screens/backoffice-sound.png';




const Projects = () => (
  <div className="projects-container">


      <div className="card-container  projects-group">
    
            <div className="card">
              
              <div className="card-photo">
                <img src={clientSound} alt='client-symfo' />
              </div>
              <div  className='card-body'>
                  <h2>
                    <span>Symfo Sound </span>
                    <span> Vue du client </span>

                  </h2>
                  <p> Projet issu du projet de fin d'année consitant à créer une plateforme d'apprentissage de musique classique.</p>
                  <div className='links-group'> 
                    <a href='https://github.com/Paola-CCC/client-sound'>  <i className="fa-brands fa-github"></i> Front </a>
                    <a href='https://github.com/Paola-CCC/api-server-sound'>  <i className="fa-brands fa-github"></i> Back </a>
                    <a href='https://client-react-nu.vercel.app/'> <i className="fa-solid fa-globe"></i> Rendu </a>
                  </div>
                  <ul>
                    <li>React JS </li>
                    <li>Symfony</li>
                    <li>Sass</li>
                  </ul>
              </div>
            </div>


            {/* DASHBOARD SYMFO SOUND */}

            <div className="card">
              <div className="card-photo">
                <img alt='back-office-sound' src={backOfficeSymfoPhoto} />
              </div>
              <div  className='card-body'>
                  <h2>
                    <span>Symfo Sound </span>
                    <span> Dashboard administrateur </span>
                  </h2>
                  
                  <p> Projet issu du projet de fin d'année consitant à créer une plateforme d'apprentissage de musique classique.</p>
                  <div className='links-group'> 
                    <a href='https://github.com/Paola-CCC/back-office-sound'>  <i className="fa-brands fa-github"></i> Front </a>
                    <a href='https://github.com/Paola-CCC/api-server-sound'>  <i className="fa-brands fa-github"></i> Back </a>
                    <a href='https://back-office-sound.vercel.app/'> <i className="fa-solid fa-globe"></i> Rendu </a>
                  </div>
                  <ul>
                    <li>React</li>
                    <li>TypeScript </li>
                    <li>Symfony</li>
                    <li>Sass</li>
                  </ul>
              </div>
            </div>

            {/* BEAUTY GALAXY */}

            <div className="card">
              <div className="card-photo">
                <img alt='beauty-Galaxy' src={beautyGalaxyPhoto} />
              </div>
              <div  className='card-body'>
                  <h2>
                     Beauty Galaxy
                  </h2>
                  
                  <p> Site e-commerce de cosmétiques.</p>
                  <div className='links-group'> 
                    <a href='https://github.com/Paola-CCC/Beauty-Shop-ReactJS-Typescript'>  <i className="fa-brands fa-github"></i> Front </a>
                    <a href='https://github.com/Paola-CCC/backend-beauty-galaxy'>  <i className="fa-brands fa-github"></i> Back </a>
                    <a href='https://beauty-shop-react-js-typescript.vercel.app/'> <i className="fa-solid fa-globe"></i> Rendu </a>
                  </div>
                  <ul>
                    <li>React</li>
                    <li>TypeScript </li>
                    <li>Redux</li>
                    <li>Sass</li>
                    <li>PHP</li>

                  </ul>
              </div>
            </div>

                        {/* MOVIES'N CO */}
            <div className="card">
              <div className="card-photo">
                <img alt='cineMoi' src={cineMoiPhoto} />
              </div>
              <div  className='card-body'>
                  <h2>
                    CINE & MOI
                  </h2>
                  
                  <p> Blog autour du cinéma et des séries - En cours de construction...</p>
                  <div className='links-group'> 
                    <a href='https://github.com/Paola-CCC/ng-film-blog'>  <i className="fa-brands fa-github"></i> Front </a>
                    <a href='https://github.com/Paola-CCC/backend-php-film'>  <i className="fa-brands fa-github"></i> Back </a>
                    <a href='https://ng-film-blog.vercel.app/#/home'> <i className="fa-solid fa-globe"></i> Rendu </a>
                  </div>
                  <ul>
                    <li>Angular</li>
                    <li>TypeScript </li>
                    <li>Sass</li>
                    <li>PHP</li>
                  </ul>
              </div>
            </div>

        
      </div>

  </div>
);



export default Projects;
