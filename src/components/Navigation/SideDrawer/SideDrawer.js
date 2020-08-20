import React from "react";

import Logo from "../../Logo/Logo";
import "./SideDrawer.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/BackDrop/Backdrop";
import Auxilary from "../../../hoc/Auxilary";

const sideDrawer = (props) => {
  return (
    <Auxilary>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className='SideDrawer'>
        <div className='LogoSide'>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Auxilary>
  );
};

export default sideDrawer;
