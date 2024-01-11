import React from "react";
import { Row, Container } from "react-bootstrap";

function Download() {
  return (
    <section id="download">
      <Container>
        <Row>
          <div className="section-text">
            <div className="section-text__title text-white">
            </div>
            <div className="section-text__body text-white">.
            </div>
            <a href="#download" className="download-btn__img">
              <img src="./images/app_btn1.webp" alt="app store" />
            </a>
            <a href="#download" className="download-btn__img">
              <img src="./images/app_btn2.webp" alt="google play store" />
            </a>
          </div>
          <div className="section-image">
            <img src="./images/download.svg" alt="download" />
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Download;
