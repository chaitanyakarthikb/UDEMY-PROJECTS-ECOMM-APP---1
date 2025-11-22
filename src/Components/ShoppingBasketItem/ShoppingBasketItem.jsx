import React from "react";
import Button from "../StyleHelpers/Button/Button";
import "./ShoppingBasketItem.css";

const ShoppingBasketItem = () => {
  return (
    <div className="shoppingBasketItem">
      <div className="shoppingBasketItemImage">
        <img src="https://i.imgur.com/QkIa5tT.jpeg" alt="" />
      </div>
      <div className="shoppingBasketItemInfo">
        <h2>Shopping Basket Item Title</h2>
        <p>$ 123.45</p>
        <div className="shoppingBasketQuantity">
          <p>+</p>
          Quantity
          <p>-</p>
        </div>
        <Button text={"remove"} />
      </div>
    </div>
  );
};

export default ShoppingBasketItem;
