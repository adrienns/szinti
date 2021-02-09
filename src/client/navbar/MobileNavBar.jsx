import React from "react";
import HamburgerButton from "./HamburgerButton";
import { ProductConsumer } from "../contexts/ProductContext";
import { Link } from "react-router-dom";
import logo from "../images/newlogo2.svg";
import { Icon } from "@iconify/react";
import bagIcon from "@iconify/icons-bytesize/bag";

const MobileNavBar = (props) => {
  return (
    <React.Fragment>
      <ul className="mobile-nav-bar">
        <li className="hamburger-menu">
          <HamburgerButton click={props.responsiveNavMenuHandler} />
        </li>
        <li className="site-logo-container">
          <Link to="/">
            <img
              id="site-logo-image"
              src={logo}
              alt="VeWe Handcrafted Jewelry"
            />
          </Link>
        </li>
        <li className="mobile-shopping-bag-container">
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
                    className="nav_bar_shopping_bag"
                    icon={bagIcon}
                  />
                </div>
              );
            }}
          </ProductConsumer>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default MobileNavBar;
