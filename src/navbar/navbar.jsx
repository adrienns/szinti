import React from "react";
import "./navbar.css";
import logo from "../images/logo.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends React.Component {
  render() {
    let linksMarkup = this.props.links.map((link, index) => {
      return (
        <li className="list-item" key={index}>
          {" "}
          <Link to={`/${link.link}`}>{link.label}</Link>
        </li>
      );
    });
    return (
      <div className="navbar-container">
        <div>
          <Link to="/">
            <img
              id="site-logo-image"
              src={logo}
              alt="VeWe Handcrafted Jewelry"
              width=" 160"
              height="90"
            />
          </Link>{" "}
        </div>

        <nav className="menu-navigation">
          <nav className="navbar-links" id="navbar-links">
            <ul>{linksMarkup}</ul>
          </nav>
        </nav>
        <div className="language_bar">
          <ul>
            <li>
              <Link to="/cart">HU|</Link>
            </li>
            <li>
              <Link to="/cart">EN</Link>
            </li>
            <li>
              <Link to="/cart">
                <button className="nav_cart_button">
                  0{" "}
                  <FontAwesomeIcon
                    className="shopping_bag"
                    icon="shopping-bag"
                  />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NavBar;
