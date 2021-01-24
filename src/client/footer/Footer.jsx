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
            <div className="footer-group-title">
              <FormattedMessage id="app.help" defaultMessage="help" />
            </div>
            <ul>
              <li>
                <Link to="/form">
                  <FormattedMessage
                    id="app.contactus"
                    defaultMessage="Contact me"
                  />
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <div className="footer-group-title">
              <FormattedMessage id="app.general" defaultMessage="general" />
            </div>
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
          <div className="follow_us_text">
            <FormattedMessage id="app.followme" defaultMessage="follow me" />
          </div>
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
              {/* <li>  <table border="0" cellPadding="10" cellSpacing="0" align="center"><tr><td align="center">
            </td></tr>
            <tr><td align="center">
              <a href="https://www.paypal.com/webapps/mpp/paypal-popup" title="How PayPal Works" onClick="javascript:window.open('https://www.paypal.com/webapps/mpp/paypal-popup','WIPaypal','toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=yes, width=1060, height=700'); return false;"><img src="https://www.paypalobjects.com/webstatic/mktg/logo/AM_mc_vs_dc_ae.jpg" border="0" alt="PayPal Acceptance Mark"/>
              </a></td></tr></table> </li> */}
            </ul>
          </div>

          <p id="footer-company">© 2020 Vewe Ltd. Reg No 0000000</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
