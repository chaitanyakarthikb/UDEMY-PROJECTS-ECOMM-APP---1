import React from "react";
import Button from "../StyleHelpers/Button/Button";
import "./Product.css";
const Product = ({ product }) => {
  return (
    <div className="productContainer">
      <h3>{product?.title}</h3>
      <img className="margin-top-halfrem" src={product?.images?.[0]} alt="" />
      <p className="margin-top-halfrem">
        {product?.description.slice(0, 100)}...
      </p>
      <div className="margin-top-halfrem">
        <span>${product?.price}</span>
      </div>
      <div className="margin-top-halfrem">
        <Button text={"Add to Cart"} />
      </div>
    </div>
  );
};

export default Product;
