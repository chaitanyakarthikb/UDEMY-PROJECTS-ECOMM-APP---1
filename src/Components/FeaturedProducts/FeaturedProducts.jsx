import React, { useEffect, useState } from "react";
import "./FeaturedProducts.css";
import Product from "../Product/Product";
const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      try {
        let apiUrl = "https://api.escuelajs.co/api/v1/products";
        let response = await fetch(apiUrl);
        let data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products from the backend", error);
      }
    };
    fetchFeaturedProducts();
  }, []);

  const getRandomIndices = () => {
    let arr = [];
    while (arr.length !== 3) {
      let randomIdx = Math.floor(Math.random() * 50);
      arr.push(randomIdx);
    }
    return arr;
  };

  useEffect(() => {
    setFeaturedProducts(getRandomIndices());
  }, [products]);

  return (
    <section className="featuredProductsSection">
      <div className="featuredProductsHeading">
        <h1>Our Featured Products...</h1>
      </div>
      <div className="productsSection">
        <div className="grid-col-3">
          {featuredProducts &&
            featuredProducts.map((el) => {
              return <Product key={el} product={products[el]} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
