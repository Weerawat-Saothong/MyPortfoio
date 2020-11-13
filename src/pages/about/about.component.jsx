import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Profile from "../../assets/img/profile/P.png";
import Button from "react-bootstrap/Button";
import "./about.style.css";
const About = () => {
    return (
      <div id="about">
        <div className="about">
          <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
          <Container>
            <Row className="pt-3 pb-5 align-items-center">
              <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2 ">
                  <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
                </Row>
              </Col>
              <Col xs={12} md={6}>
                <Row className=" align-items-start p-2 my-details rounded">
                  Hi! I am <strong>&nbsp;Weerawat Saothong</strong>
                  <br />I'm from Thailand, I live in Kalasin Province, I'm 23 years old.<br />
                  In the year 2020 I completed my bachelor's degree 
                  <br /> 
                  at Rajabhat Mahasarakham University in Computer Science.
                  <br /> 
                  I love learning about new technologies and I am committed to bringing
                  My computer programming knowledge
                  <br />
                  In programming and web development design to meet the needs of most users.
                  <br /> 

                  <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="https://drive.google.com/file/d/1Jnmb6Ww1wXGf1J9Hw62jJeOgybecLeZe/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-danger">
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://drive.google.com/file/d/1Q4Wmr9LGX2NCjywqkdP63UBO9oRSL3DL/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-primary">
                        My Transcript
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Weerawat-Saothong" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;