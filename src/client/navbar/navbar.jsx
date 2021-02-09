import React, { useContext } from "react";
import "./navbar.css";
import logo from "../images/newlogo2.svg";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../contexts/ProductContext";
import { Icon } from "@iconify/react";
import bagIcon from "@iconify/icons-bytesize/bag";
import { WrapperContext } from "../Wrapper";
import { FormattedMessage } from "react-intl";
import MobileNavBar from "./MobileNavBar";

const NavBar = (props) => {
  const { switchEnglish, switchHungarian } = useContext(WrapperContext);

  let linksMarkup = props.links.slice(0, 3).map((link, index) => {
    return (
      <li className="navbar-list-item" key={index} id="list-item-right">
        <Link to={`/${link.link}`}>
          <span>
            <FormattedMessage {...link.label} />
          </span>
        </Link>
      </li>
    );
  });

  let linksMarkup2 = props.links.slice(3, 7).map((link, index) => {
    return (
      <li className="navbar-list-item" key={index} id="list-item-left">
        <Link to={`/${link.link}`}>
          <span>
            <FormattedMessage {...link.label} />
          </span>
        </Link>
      </li>
    );
  });
  return (
    <React.Fragment>
      <MobileNavBar responsiveNavMenuHandler={props.responsiveNavMenuHandler} />
      <div className="navbar-container">
        <ul className="language_bar">
          <li>
            <span className="hun-btn" onClick={switchHungarian} value="hun">
              HU
            </span>
          </li>
          <li>
            <span className="en-btn" onClick={switchEnglish} value="en">
              EN
            </span>
          </li>
        </ul>
        <nav className="menu-navigation">
          <ul>
            <div className="nav-bar-element">{linksMarkup}</div>
            <div className="nav-bar-element">
              <Link to="/">
                <img
                  id="site-logo-image"
                  src={logo}
                  alt="VeWe Handcrafted Jewelry"
                />
              </Link>
            </div>
            <div className="nav-bar-element">{linksMarkup2}</div>
          </ul>
        </nav>
        <div className="shopping-bag-container">
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
                      className="nav_bar_shopping_bag"
                      icon={bagIcon}
                    />
                  </div>
                );
              }}
            </ProductConsumer>
          </span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
