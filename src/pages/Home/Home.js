import React from 'react';
import './Home.css';

const Home = () => (
    <div class="main-contents">
      <div class="hero-text">
        <div className='img-zone'>
          <img src="https://blog.tattooforaweek.com/wp-content/uploads/2015/01/Rihanna-4-1170x731-580x362.jpg" alt=''  w />
        </div>

        <div className='container-title-presentation'>
          <h1> Paola CYPRIEN</h1>
          <h2>Développeuse Front end</h2>
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
