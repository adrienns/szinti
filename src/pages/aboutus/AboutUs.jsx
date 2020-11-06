import React, { Component } from "react";
import "./AboutUs.css";
import image1 from "../../images/cute2.jpg";
import image2 from "../../images/pics1.jpg";
import image3 from "../../images/cute3.jpg";

const AboutUs = () => {
  return (
    <main>
      <div className="about-us-wrapper">
        <div className="boxes">
          <a href="#">
            <img src={image3} alt="Cute Dog2" width="450" />
          </a>
        </div>
        <div className="boxes" id="text-box1">
          <p> My story</p>
        </div>

        <div className="boxes" id="text-box2">
          <p>
            Few stories are as widely read and as universally cherished by
            children and adults alike as The Little Prince. Richard Howard's
            translation of the beloved classic beautifully reflects
            Saint-Exupéry's unique and gifted style. Howard, an acclaimed poet
            and one of the preeminent translators of our time.
          </p>
        </div>

        <div className="boxes">
          <a href="#">
            <img src={image1} alt="Cute Dog3" width="450" />
          </a>
        </div>

        <div className="boxes">
          <a href="#">
            <img src={image2} alt="Cute Dog4" width="450" />
          </a>
        </div>
        <div className="boxes" id="text-box2">
          <p>
            Few stories are as widely read and as universally cherished by
            children and adults alike as The Little Prince. Richard Howard's
            translation of the beloved classic beautifully reflects
            Saint-Exupéry's unique and gifted style. Howard, an acclaimed poet
            and one of the preeminent translators of our time.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutUs;
