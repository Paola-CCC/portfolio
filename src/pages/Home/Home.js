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

        <div className="contents-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nulla, similique sunt, sapiente unde possimus modi cum provident vero voluptates ad amet molestiae repellendus reiciendis temporibus pariatur natus repellat neque.
            </p>
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
      </div>
    </div>
);

export default Home;
