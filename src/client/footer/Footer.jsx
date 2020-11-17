import React from "react";
import { Link } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

library.add(fab, faFacebook, faInstagram);

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <section className="footer-nav">
          <div className="footer-section">
            <div className="footer-group-title">help</div>

            <ul>
              <li>
                <Link to="/form">Contact us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <div className="footer-group-title">General</div>

            <ul>
              <li>
                <Link to="/aboutus">About us</Link>
              </li>

              <li>
                <a href="#">Collections</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <div className="footer-group-title">Legal</div>

            <ul>
              <li>
                <a href="#">Privacy & Cookies</a>
              </li>
              <li>
                <Link to="/terms&conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </section>
        <div>
          <div className="follow_us_text">Follow us</div>
          <div className="social_media_icons">
            <ul>
              <li>
                <Link to="">
                  <FontAwesomeIcon icon={["fab", "instagram"]} />
                </Link>
              </li>
              <li>
                <Link to="https://www.facebook.com/vewedesign">
                  <FontAwesomeIcon icon={faFacebook} />
                </Link>
              </li>
            </ul>
          </div>
          <p id="footer-company">© 2020 Vewe Ltd. Reg No 0000000</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
