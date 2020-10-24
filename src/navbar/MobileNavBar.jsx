import React from "react";
import HamburgerButton from "./HamburgerButton";
import { ProductConsumer } from "../product_context";
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
    </React.Fragment>
  );
};

export default MobileNavBar;
