import React from "react";
import "./BulidControl.css";

const bulidControl = (props) => (
  <div className='BulidControl'>
    <div className='Label'>{props.label}</div>
    <button className='Less' onClick={props.removed}>
      Less
    </button>
    <button className='More' onClick={props.added}>
      More
    </button>
  </div>
);

export default bulidControl;
