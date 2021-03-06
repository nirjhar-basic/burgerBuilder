import React from "react";

import Logo from "../../Logo/Logo";
import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";

const toolbar = (props) => (
  <header className='Toolbar'>
    <div>Menu</div>
    <div className='LogoTool'>
      <Logo />
    </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
