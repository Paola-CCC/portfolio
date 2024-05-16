import React from 'react';
import './Home.css';

const Home = () => (
    <div class="main-contents">
      <div class="hero-text">
        <div className='img-zone'>
          <img src={"https://media.licdn.com/dms/image/D4E03AQFBNXBbaBv2lA/profile-displayphoto-shrink_400_400/0/1698164012601?e=1721260800&v=beta&t=3kwP7xK5c2pHE7I6Ff5TEGCUc9QtDZM07FTiBLhMH34"} alt='paola'  w />
        </div>

        <div className='container-title-presentation'>
          <h1> Paola CYPRIEN</h1>
          <h2>Développeuse Frontend Junior</h2>
        </div>
        <ul className='medias-links'>
          <li>            
            <a href='https://github.com/Paola-CCC'> 
            <i class="fa-brands fa-square-github fa-xl"></i>
            </a>
          </li>
          <li>
            <a href='https://www.linkedin.com/in/paola-cyprien-698210293/'>
            <i class="fa-brands fa-linkedin fa-xl"></i>
            </a>
          </li>
        </ul>
        <div className="contents-body">
            <p>
              Bienvenue sur mon portfolio, spécialisée côtée interface utilisateur, j'aime créer des interfaces clients visuellement agréables, fluides et facile à utiliser.
            </p>
        </div>
      </div>
    </div>
);

export default Home;
