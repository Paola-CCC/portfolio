import './App.css';
import { ContentsBody, Header, Section, Title } from './components';

function App() {
  return (
    <main className="App">
      <Header />

      <div class="hero-image">
          <div class="hero-text">
            <h1> Paola CYPRIEN</h1>
            <h2>Développeuse Frontend</h2>
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

     
 

      <Section sectionName={"process"}>
        <Title titleName={"Parcours"}/>
        <ContentsBody>

          <h4> Formation</h4>
          <p>Bachelor</p>
          <i class="fa-brands fa-php fa-2xl"></i>
        </ContentsBody>
      </Section>

      {/* <Section sectionName={"formation"}>
        <Title titleName={"Formation"}/>
        <ContentsBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nulla, similique sunt, sapiente unde possimus modi cum provident vero voluptates ad amet molestiae repellendus reiciendis temporibus pariatur natus repellat neque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae blanditiis adipisci maiores laborum in similique accusamus a placeat fuga temporibus pariatur iusto nobis exercitationem quam reiciendis, eum obcaecati illo porro. Architecto quos illum pariatur quibusdam in mollitia ipsam aut cumque nemo animi. Odit, molestiae nesciunt quam natus id omnis numquam accusamus quidem. Aliquid similique nulla, magni maiores dolor eveniet ipsa. Autem nam quam quia iure, nemo delectus deleniti provident accusamus, repudiandae omnis maxime deserunt eum, dolor consequatur iusto ipsum neque possimus quae. Culpa, illum. Eius iste porro at dolores enim. Sit ipsam ab rem nisi eius molestias blanditiis laudantium! Tempore necessitatibus perferendis, non sunt illum, fuga maxime ut dicta omnis, numquam ullam est hic! Quos atque porro qui optio provident! Sapiente quia quam dolorem minus numquam excepturi, quibusdam quis, optio est quidem quo nihil fuga ab quod. Sequi quo earum ex dolor, odit maxime, labore laboriosam est itaque reiciendis optio. Nihil ut id reprehenderit error enim laudantium sint unde nemo ipsa? Unde nemo at, qui eius necessitatibus tempore nobis nostrum aperiam, neque ratione culpa sequi iste id explicabo atque. Placeat. Repellendus sunt quis doloremque incidunt unde ab quidem sit fugiat a eius quam odit libero earum perferendis ea aut ipsam architecto consectetur exercitationem non consequuntur voluptate, facilis molestias? Atque, reiciendis! Nobis animi iste vero quam ab neque libero reprehenderit doloribus pariatur esse adipisci repudiandae numquam illum quo voluptatum quod quaerat officia magni voluptas id optio eveniet, ratione dolore? Dolorum, animi. Nemo deleniti numquam rem delectus tempore blanditiis debitis, a quis sit quas. Dolor voluptatum repudiandae perspiciatis ad officia ratione facere molestiae eos, itaque odit, consectetur omnis corrupti minus ipsum possimus. Libero quia ab voluptatum, quibusdam esse neque eaque iusto, enim quas ducimus asperiores incidunt molestiae rerum minima aut recusandae excepturi delectus mollitia. Harum eveniet modi non nesciunt ab. Deserunt, rerum?
        </ContentsBody>
      </Section> */}

      <Section sectionName={"projects"}>
        <Title titleName={"Projets"}/>
        <ContentsBody>



        </ContentsBody>
      </Section>

      <Section sectionName={"contact"}>
        <Title titleName={"Me contacter"}/>
        <ContentsBody>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nulla, similique sunt, sapiente unde possimus modi cum provident vero voluptates ad amet molestiae repellendus reiciendis temporibus pariatur natus repellat neque. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae blanditiis adipisci maiores laborum in similique accusamus a placeat fuga temporibus pariatur iusto nobis exercitationem quam reiciendis, eum obcaecati illo porro. Architecto quos illum pariatur quibusdam in mollitia ipsam aut cumque nemo animi. Odit, molestiae nesciunt quam natus id omnis numquam accusamus quidem. Aliquid similique nulla, magni maiores dolor eveniet ipsa. Autem nam quam quia iure, nemo delectus deleniti provident accusamus, repudiandae omnis maxime deserunt eum, dolor consequatur iusto ipsum neque possimus quae. Culpa, illum. Eius iste porro at dolores enim. Sit ipsam ab rem nisi eius molestias blanditiis laudantium! Tempore necessitatibus perferendis, non sunt illum, fuga maxime ut dicta omnis, numquam ullam est hic! Quos atque porro qui optio provident! Sapiente quia quam dolorem minus numquam excepturi, quibusdam quis, optio est quidem quo nihil fuga ab quod. Sequi quo earum ex dolor, odit maxime, labore laboriosam est itaque reiciendis optio. Nihil ut id reprehenderit error enim laudantium sint unde nemo ipsa? Unde nemo at, qui eius necessitatibus tempore nobis nostrum aperiam, neque ratione culpa sequi iste id explicabo atque. Placeat. Repellendus sunt quis doloremque incidunt unde ab quidem sit fugiat a eius quam odit libero earum perferendis ea aut ipsam architecto consectetur exercitationem non consequuntur voluptate, facilis molestias? Atque, reiciendis! Nobis animi iste vero quam ab neque libero reprehenderit doloribus pariatur esse adipisci repudiandae numquam illum quo voluptatum quod quaerat officia magni voluptas id optio eveniet, ratione dolore? Dolorum, animi. Nemo deleniti numquam rem delectus tempore blanditiis debitis, a quis sit quas. Dolor voluptatum repudiandae perspiciatis ad officia ratione facere molestiae eos, itaque odit, consectetur omnis corrupti minus ipsum possimus. Libero quia ab voluptatum, quibusdam esse neque eaque iusto, enim quas ducimus asperiores incidunt molestiae rerum minima aut recusandae excepturi delectus mollitia. Harum eveniet modi non nesciunt ab. Deserunt, rerum?
        </ContentsBody>
      </Section>

    </main>
  );
}

export default App;
