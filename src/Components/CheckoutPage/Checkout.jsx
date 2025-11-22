import React from "react";
import ShoppingBasketItem from "../ShoppingBasketItem/ShoppingBasketItem";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";

const Checkout = () => {
  return (
    <section className="checkoutSection">
      <div className="shoppingBasket">
        <h2>Your Shopping Basket</h2>
        <ShoppingBasketItem />
        <ShoppingBasketItem />
        <ShoppingBasketItem />
      </div>
      <div className="subtotal">
        <Subtotal />
      </div>
    </section>
  );
};

export default Checkout;
