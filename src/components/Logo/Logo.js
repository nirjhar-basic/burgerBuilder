import React from "react";

import burgerLogo from "../../assests/images/burger-logo.png";
import "./Logo.css";

const logo = (props) => (
  <div className='Logo'>
    <img src={burgerLogo} alt='My burger' />
  </div>
);

export default logo;
