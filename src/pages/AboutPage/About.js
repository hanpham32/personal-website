import React from "react";
import "./About.css";

// Bio photo and icons
import Photo from "../../assets/Pic_Squared2.jpg";
import GITHUB from "../../assets/github.png";
import LINKEDIN from "../../assets/linkedin.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1 className="greet">Hey, I'm Han</h1>
        <div className="bio">
          <div className="about-column">
            <img src={Photo} className="photo"></img>
            <div className="about-icons">
              <a
                href="https://github.com/hanpham32"
                target="_blank"
                className="about-href"
              >
                <img
                  src={GITHUB}
                  alt="github-icon"
                  className="about-icon"
                ></img>
              </a>
              <a
                href="https://www.linkedin.com/in/hansopham/"
                target="_blank"
                className="about-href"
              >
                <img
                  src={LINKEDIN}
                  alt="github-icon"
                  className="about-icon"
                ></img>
              </a>
            </div>
          </div>
          <div className="about-column">
            <p className="about-bio">
              I am an upcoming college freshman from the Seattle area. I either
              spend my time exploring different restaurants and coffee shops in
              Seattle, or at my computer learning various topics and creating
              different side projects. My interests are in software development
              with machine learning integration. In addition, I love creating
              tools that assist human productivity and efficiency.
              <br></br> Little background about me. I was born and grew up in
              Vietnam up until I was 12, then I moved to Seattle and have lived
              here ever since. My other hobbies include photography and
              basketball. Sometimes, when the season changes, I find myself
              go on adventures with my lovely Fujifilm camera. <br></br>{" "}
              Thanks for giving my website a look :)
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default About;
