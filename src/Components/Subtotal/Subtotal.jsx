import React from "react";
import Button from "../StyleHelpers/Button/Button";
import "./Subtotal.css";

const Subtotal = () => {
  return (
    <div className="subTotalComponent">
      <h3>Subtotal ( 3 Items ): $93.3</h3>
      <Button text={"Proceed to Checkout"} />
    </div>
  );
};

export default Subtotal;
