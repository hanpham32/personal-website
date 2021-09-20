import React from "react";
import "./Home.css";
import ProfilePic from "../../assets/Pic_Squared.jpg";
import SocialCubes from "../../components/SocialCubes.js";

const Home = () => {
  return (
    <div className="home-content">
      <div className="container">
        <div className="column">
          <h1 className="greet">Hey, I'm Han</h1>
          <p className="description">
            Incoming college freshman from the University of Washington
            (Bothell). I spend my freetime to stumble on many interest-driven
            projects. Follow my works below!
          </p>
          <SocialCubes />
        </div>
        <div className="column">
          <img src={ProfilePic} alt="Han" className="profile-pic"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
