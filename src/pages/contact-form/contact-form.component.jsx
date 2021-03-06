import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {
  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="weerawatsaotong@gmail.com" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" >
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>
            
            <div className="m-2">
              <a href="https://github.com/Weerawat-Saothong" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" >
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.youtube.com/channel/UCCrMud1i5CqDW6r7q6Cvfqw?view_as=subscriber" target="_blank" rel="noopener noreferrer">
                <Button id="youtube-btn" variant="outline-info">
                <i class="fab fa-youtube"></i> Youtube
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://twitter.com/home?lang=th" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-info" >
                  <i className="fab fa-twitter"></i> Twitter
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.facebook.com/profile.php?id=100002822094611" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-primary">
                  <i className="fab fa-facebook-square"></i> FaceBook
                </Button>
              </a>
            </div>
            <div className="m-2">
                <Button variant="outline-secondary" title="0954017406" class="popup" onclick="myFunction()">
                  <i className="fab fa-phone-squar"></i> Call Me
                </Button>             
            </div>
            
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;
