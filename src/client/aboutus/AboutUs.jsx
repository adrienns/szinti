import React from "react";
import "./AboutUs.css";
// import image1 from "../images/aboutmephoto.jpg";
import { FormattedMessage } from "react-intl";

const AboutUs = () => {
  return (
    <main>
      <div className="about-us-wrapper">
        <div className="boxes">
          <a href="#">
            <img
              src="https://res.cloudinary.com/cloudies/image/upload/v1621780244/aboutmephoto_qtxfcw.jpg"
              alt="Photo"
              width="450"
            />
          </a>
        </div>
        <div className="boxes" id="text-box1">
          <p>
            <FormattedMessage id="app.mystrory" defaultMessage="My story" />
          </p>
        </div>
      </div>
      <div id="text-box2">
        <p>
          Hello! My name is Szintia, a goldsmith school graduate from Hungary. I
          love designing creative jewelries. I create my unique pieces in a cute
          studio based in Budapest. More info coming soon :)
        </p>
      </div>
    </main>
  );
};

export default AboutUs;
