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
          <ul className="footer-section">
            <li>
              <Link to="/form">
                <FormattedMessage
                  id="app.contactus"
                  defaultMessage="Contact me"
                />
              </Link>
              <li>
                <Link to="/terms&conditions">
                  {" "}
                  <FormattedMessage
                    id="app.termsandconditions"
                    defaultMessage="Terms & Conditions"
                  />
                </Link>
              </li>
              <li>
                <Link to="/aboutus">
                  <FormattedMessage
                    id="app.aboutus"
                    defaultMessage="about us"
                  />{" "}
                </Link>
              </li>
              {/* <li>
                <FormattedMessage
                  id="app.collection"
                  defaultMessage="Collections"
                />
              </li> */}
            </li>
          </ul>

          <div className="footer-section">
            <ul>
              <li className="footer-group-title">
                {" "}
                <FormattedMessage
                  id="app.followme"
                  defaultMessage="Follow me"
                />{" "}
              </li>

              <li>
                {" "}
                <ul className="follow-us-icons-and-text">
                  <li>
                    <a href="https://www.instagram.com/vewe_jewelry">
                      <FontAwesomeIcon
                        className="instagram-icon"
                        icon={["fab", "instagram"]}
                      />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/vewedesign">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        className="facebook-icon"
                      />
                    </a>
                  </li>
                </ul>{" "}
              </li>
            </ul>
          </div>
        </section>
        <div>
          <div className="paypal_acceptance_mark">
            <img
              src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg"
              border="0"
              alt="PayPal Acceptance Mark"
            />
          </div>
        </div>

        <p id="footer-company">© VēWē - Handcrafted Jewelry</p>
      </footer>
    );
  }
}

export default Footer;
