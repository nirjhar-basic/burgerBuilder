import React from "react";

import Auxilary from "../../../hoc/Auxilary";
import Button from "../../UI/Button/Button";
const ordeSummary = (props) => {
  const ingredient = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li>
        <span>{igKey}:</span>
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Auxilary>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients:</p>
      <ul>{ingredient}</ul>
      <p>
        <strong>Total Price:{props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout</p>
      <Button btnType='Danger' clicked={props.purchaseCanceled}>
        Cancel
      </Button>
      <Button btnType='Success' clicked={props.purchaseContinued}>
        Continue
      </Button>
    </Auxilary>
  );
};
export default ordeSummary;
