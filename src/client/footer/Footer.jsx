import React from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
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
            {/* <div className="footer-group-title">
              <FormattedMessage id="app.help" defaultMessage="help" />
            </div> */}
            <ul>
              <li>
                <Link to="/form">
                  <FormattedMessage
                    id="app.contactus"
                    defaultMessage="Contact me"
                  />
                </Link>
                <ul className="follow-us-icons-and-text">
                  <li>
                    <Link to="">
                      <FontAwesomeIcon
                        className="instagram-icon"
                        icon={["fab", "instagram"]}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.facebook.com/vewedesign">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="facebook-icon"
                      />
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            {/* <div className="footer-group-title">
              <FormattedMessage id="app.general" defaultMessage="general" />
            </div> */}
            <ul>
              <li>
                <Link to="/aboutus">
                  <FormattedMessage
                    id="app.aboutus"
                    defaultMessage="about us"
                  />{" "}
                </Link>
              </li>
              <li>
                <a href="#">Collections</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            {/* <div className="footer-group-title">Legal</div> */}
            <ul>
              {/* <li>
                <a href="#">Privacy</a>
              </li> */}
              <li>
                <Link to="/terms&conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </section>
        <div>
          <div className="social_media_icons">
            <div className="paypal_acceptance_mark">
              <img
                src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg"
                border="0"
                alt="PayPal Acceptance Mark"
              />
            </div>
          </div>

          <p id="footer-company">© VēWē - Handcrafted Jewelry</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
