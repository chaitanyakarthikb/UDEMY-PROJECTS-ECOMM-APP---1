import React from "react";
import "./Header.css";
import { BsGiftFill } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { isMobileResolution } from "../../Helpers";

const Header = () => {
  return (
    <header>
      <div className="leftContent">
        <BsGiftFill
          className="cursor-pointer"
          size={isMobileResolution() ? "1.5rem" : "2rem"}
        />
        <h1 className="cursor-pointer">eShop</h1>
      </div>

      <div className="centerContent d-flex-align-center">
        <input type="text" placeholder="Search..." />
        <span className="searchIcon cursor-pointer">
          <IoSearchSharp size={isMobileResolution() ? "1.5rem" : "1.3rem"} />
        </span>
      </div>

      <div className="rightContent">
        <div className="signInBox">
          <p className="cursor-pointer hidden_on_mobile">Hello Guest</p>
          <h3 className="cursor-pointer">Sign in</h3>
        </div>

        <div className="yourShopContent hidden_on_mobile cursor-pointer">
          <p>Your</p>
          <h3>Shop</h3>
        </div>

        <div className="d-flex-align-center">
          <FaShoppingCart
            className="cursor-pointer"
            size={isMobileResolution() ? "1.5rem" : "2rem"}
          />
          <span className="quantity cursor-pointer">3</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
