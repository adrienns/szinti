import React, { useState, useContext } from "react";

import { Link } from "react-router-dom";

import "./ResponsiveNav.css";

const ResponsiveNav = (props) => {
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
        {" "}
        <Link to={`/${link.link}`}>{link.label}</Link>
      </li>
    );
  });
  return (
    <div>
      <div className={responsiveNavClasses}>
        <div>
          <div className="responsive-nav-menu-list">
            <ul className="responsive-nav-items-container">
              {linksMarkup}{" "}
              <li
                onClick={props.closeResponsiveNavMenu}
                className="responsive-nav-list-item"
                id="responsive-nav-home-btn"
              >
                home
              </li>
              <li
                onClick={props.closeResponsiveNavMenu}
                className="responsive-nav-list-item"
                id="responsive-language-options"
              >
                <span>HU</span>
                <span>EN</span>
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

export default ResponsiveNav;
