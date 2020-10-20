import React, { useContext } from "react";
import "./navbar.css";
import logo from "../images/newlogo2.svg";

import { Link } from "react-router-dom";
import { ProductConsumer } from "../product_context";
import { Icon } from "@iconify/react";
import bagIcon from "@iconify/icons-bytesize/bag";
import HamburgerButton from "./HamburgerButton";
import { WrapperContext } from "../Wrapper";
import { FormattedMessage } from "react-intl";

const NavBar = (props) => {
  const { switchEnglish, switchHungarian } = useContext(WrapperContext);

  let linksMarkup = props.links.slice(0, 3).map((link, index) => {
    return (
      <li className="list-item" key={index} id="list-item-right">
        <Link to={`/${link.link}`}>
          <span>
            {" "}
            <FormattedMessage {...link.label} />
          </span>
        </Link>
      </li>
    );
  });

  let linksMarkup2 = props.links.slice(3, 7).map((link, index) => {
    return (
      <li className="list-item" key={index} id="list-item-left">
        {" "}
        <Link to={`/${link.link}`}>
          <span>
            {" "}
            <FormattedMessage {...link.label} />
          </span>
        </Link>
      </li>
    );
  });
  return (
    <div>
      <ul className="mobile-nav-bar">
        <li className="hamburger-menu">
          <HamburgerButton click={props.responsiveNavMenuHandler} />
        </li>
        <li>
          {" "}
          <Link to="/">
            <img
              id="site-logo-image"
              src={logo}
              alt="VeWe Handcrafted Jewelry"
              width=" 160"
              height="90"
            />
          </Link>
        </li>
        <li>
          <ProductConsumer>
            {(value) => {
              const { itemsTotal } = value;
              const { openSideModal } = value;

              return (
                <div>
                  <span className="responsive-item-counter"> {itemsTotal}</span>
                  <Icon
                    onClick={() => {
                      openSideModal();
                    }}
                    className="shopping_bag"
                    icon={bagIcon}
                  />
                </div>
              );
            }}
          </ProductConsumer>
        </li>
      </ul>

      <div className="navbar-container">
        <nav className="menu-navigation">
          <nav className="navbar-links" id="navbar-links">
            <ul>
              {linksMarkup}{" "}
              <Link to="/">
                <img
                  id="site-logo-image"
                  src={logo}
                  alt="VeWe Handcrafted Jewelry"
                  width=" 160"
                  height="90"
                />
              </Link>
              {linksMarkup2}{" "}
            </ul>
          </nav>
        </nav>
        {/* <div>
          <ul className="language_bar">
            <li>
              <span className="hun-btn" onClick={switchHungarian} value="hun">
                HU|
              </span>
            </li>
            <li>
              <span className="en-btn" onClick={switchEnglish} value="en">
                EN
              </span>
            </li>
            <li>
              <div>
                <span className="nav_cart_button">
                  <ProductConsumer>
                    {(value) => {
                      const { itemsTotal } = value;
                      const { openSideModal } = value;

                      return (
                        <div className="item-counter">
                          {itemsTotal}
                          <Icon
                            onClick={() => {
                              openSideModal();
                            }}
                            className="shopping_bag"
                            icon={bagIcon}
                          />
                        </div>
                      );
                    }}
                  </ProductConsumer>
                </span>
              </div>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
