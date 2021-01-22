import React from "react";
import { Icon } from "@iconify/react";
import menuIcon from "@iconify/icons-bytesize/menu";

import "./navbar.css";

const HamburgerButton = (props) => {
  return (
    <div>
      <span onClick={props.click}>
        <Icon className="hamburger-icon" icon={menuIcon} />
      </span>
    </div>
  );
};

export default HamburgerButton;
