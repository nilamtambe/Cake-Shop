import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/BannerImage.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home"   style={{ backgroundImage: `url(${BannerImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'}}>
      
      <div className="headerContainer">
        <h1> Welcome to Cake Shop </h1>
        <p> YOUR DREAM, OUR CAKE</p>
        <Link to="/menu">
          
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;