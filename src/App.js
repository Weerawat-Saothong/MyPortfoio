import React from "react";
import MyNavbar, {  } from "./components/my-navbar/mynavbar.component";
import  MyCarousal from "./components/my-carousal/my-carousal.component";
import TitleMessage from "./components/title-message/title-message.component";
import About from "./pages/about/about.component";
import Fade from "react-reveal/Fade";
import { Parallax} from 'react-parallax';
import Container from "react-bootstrap/Container";
import bgImg from './assets/img/parallex/background.webp';
import Skills from "./pages/skills/skills.component";
import Slide from "react-reveal/Slide";
import Experience from "./pages/experience/experience.component";
import TimeLine from "./components/projects-timeline/projects-timeline.component";
import ContactForm from "./pages/contact-form/contact-form.component";
import FooterPanel from "./components/footer/footer.component";
 import Particles from "react-particles-js";
  import { particlesOptions } from "./particlesOptions";
import './App.css';

const App = () => {
  return (<div  className="App" style={{ position: "relative" }}> 
    <MyNavbar/>
    <Particles
        className="particles particles-box"
        params={particlesOptions}/> 
    <MyCarousal />
    <TitleMessage/>
    <div>
    <Parallax 
          blur={{ min:-30, max: 30 }}
          bgImage={bgImg}  bgImageAlt="img error" strength={-200}>
          <div>
            <Container className="container-box rounded">
              <Fade duration={1000}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <Skills />
        </Slide>
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            <Experience />
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          <ContactForm />
        </Fade>
      </Container>
      <hr />
      <FooterPanel />
    </div>
    );  
};

export default App;
