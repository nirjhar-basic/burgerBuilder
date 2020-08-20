import React from "react";

import "./Modal.css";
import Auxilary from "../../../hoc/Auxilary";
import BackDrop from "../BackDrop/Backdrop";

const modal = (props) => (
  <Auxilary>
    <BackDrop show={props.show} clicked={props.modalClose} />
    <div
      className='Modal'
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Auxilary>
);

export default modal;
