import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { WrapperContext } from "../Wrapper";

import "./ResponsiveNavMenuOpen.css";

const ResponsiveNavMenuOpen = (props) => {
  const { switchEnglish, switchHungarian } = useContext(WrapperContext);
  let responsiveNavClasses = "responsive-nav";
  if (props.show) {
    responsiveNavClasses = "responsive-nav open";
  }

  let linksMarkup = props.links.map((link, index) => {
    return (
      <li
        className="responsive-nav-list-item"
        key={index}
        onClick={props.closeResponsiveNavMenu}
      >
        <Link to={`/${link.link}`}>
          <FormattedMessage {...link.label} />
        </Link>
      </li>
    );
  });
  return (
    <div>
      <div className={responsiveNavClasses}>
        <div>
          <div className="responsive-nav-menu-list">
            <ul className="responsive-nav-items-container">
              {linksMarkup}
              <Link to="/">
                <li
                  onClick={props.closeResponsiveNavMenu}
                  className="responsive-nav-list-item"
                  id="responsive-nav-home-btn"
                >
                  <FormattedMessage id="app.home" defaultMessage="home" />
                </li>
              </Link>
              <li
                className="responsive-nav-list-item"
                id="responsive-language-options"
              >
                <span
                  className="responsive-hun-btn"
                  onClick={switchHungarian}
                  value="hun"
                >
                  HU
                </span>
                <span
                  className="responsive-en-btn"
                  onClick={switchEnglish}
                  value="en"
                >
                  EN
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="close-responsive-menu-btn-container">
          <span
            className="close-responsive-menu-btn"
            onClick={props.closeResponsiveNavMenu}
          >
            {/* <Icon icon={closeFill} /> */}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveNavMenuOpen;
