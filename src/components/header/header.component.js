import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";
import Logo from "../../assets/circle-m.png";

const Header = () => (
  <div className="logo-container header">
    <Link to="/">
      <img src={Logo} className="logo" alt="logo icons8.com" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT US
      </Link>
    </div>
  </div>
);

export default Header;
