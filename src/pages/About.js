import React from "react";
import MultipleCakes from "../assets/cake7.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultipleCakes})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Welcome to our New Cake Shop. We are providing different Flavours of Colourful and Tasty cakes.
          We offer services for festivals and occations like birthdays,weddings,and other events.
          Cake shop bakes,you take, cakes makes your tummy smile. Undoubtedly we love to eat cakes.
          Despite our to and fro movement towords healthy eating options, We continue gorging on delicious cakes.
          Here you get a cake for every occasion. We provide a slice of heaven. Step in for cake lift.
          We offer exceptional taste at exceptional prices. We just cake!.Let us bake joy for you.Ready Steady Bake.
          Your dream. Our cake. Each of our cakes tells a story. We love, We live, we cake .....

        </p>
      </div>
    </div>
  );
}

export default About;