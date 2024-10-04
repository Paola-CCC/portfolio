import React from 'react';
import './Home.css';
import photoPerso from './moi.jpg';

const Home = () =>  {

    //   const onButtonClick = () => {
    //     fetch("CV_CYPRIEN_JS.pdf").then((response) => {
    //         response.blob().then((blob) => {
             
    //             const fileURL = window.URL.createObjectURL(blob);
    //             let alink = document.createElement("a");
    //             alink.href = fileURL;
    //             alink.download = "CV_CYPRIEN_JS.pdf";
    //             alink.click();
    //         });
    //     });
    // };
  
  return(
    <div class="main-contents">
      <div class="hero-text">
        <div className='img-zone'>
          <img src={photoPerso} alt='paola'  />
        </div>

        <div className='container-title-presentation'>
          <h1> Paola CYPRIEN</h1>
          <h2>Développeuse Full Stack</h2>
          {/* <button onClick={onButtonClick}>
           Télécharger mon CV
          </button> */}
        </div>

        <div className="contents-body">
            <h5>
              Bienvenue sur mon portfolio
            </h5>
            <p>
              Spécialisée côtée interface utilisateur, j'aime créer des interfaces clients visuellement agréables, fluides et facile à utiliser.
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
)};

export default Home;
