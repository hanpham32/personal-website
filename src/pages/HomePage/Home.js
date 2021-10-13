import React from "react";
import "./Home.css";
import ProfilePic from "../../assets/Pic_Squared.jpg";
import SocialCubes from "../../components/SocialCubes.js";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-column">
        <h1 className="home-greet">Hey, I'm Han</h1>
        <p className="home-description">
          Incoming college freshman from the University of Washington (Bothell).
          I spend my freetime to stumble on many interest-driven projects.
          Follow my works below!
        </p>
        <SocialCubes />
      </div>
      <div className="home-column">
        <img src={ProfilePic} alt="Han" className="profile-pic"></img>
      </div>
    </div>
  );
};

export default Home;
