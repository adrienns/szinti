import React, { useContext } from "react";
import "./navbar.css";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../product_context";

import { Icon } from "@iconify/react";
import bagIcon from "@iconify/icons-bytesize/bag";
import HamburgerButton from "./HamburgerButton";
import { WrapperContext } from "../Wrapper";
import { FormattedMessage } from "react-intl";

const NavBar = (props) => {
  const { switchEnglish, switchHungarian } = useContext(WrapperContext);

  let linksMarkup = props.links.map((link, index) => {
    return (
      <li className="list-item" key={index}>
        <Link to={`/${link.link}`}>
          <FormattedMessage {...link.label} />
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
        <Link to="/">
          <img
            id="site-logo-image"
            src={logo}
            alt="VeWe Handcrafted Jewelry"
            width=" 160"
            height="90"
          />
        </Link>{" "}
        <nav className="menu-navigation">
          <nav className="navbar-links" id="navbar-links">
            <ul>{linksMarkup}</ul>
          </nav>
        </nav>
        <div>
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
        </div>
      </div>
    </div>
  );
};

export default NavBar;
