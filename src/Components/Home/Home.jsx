import React from "react";
import "./Home.css";
import Button from "../StyleHelpers/Button/Button";

const Home = () => {
  return (
    <section className="home-container">
      <figure>
        <img src="/ecommerce.jpg" alt="" />
      </figure>
      <div className="home-content">
        <h1>Welcome to CK Store</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque vero
          harum sequi praesentium. Aliquam, unde, neque error maxime similique
          dolores sequi quis inventore reiciendis itaque eaque cumque porro
          culpa, fugit tempora facere natus iste
        </p>
        <Button text={"Shop now"} />
      </div>
    </section>
  );
};

export default Home;
