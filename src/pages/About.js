import React from "react";
import { Container, Row } from "react-bootstrap";

// Bio photo and icons
import Photo from "../assets/Pic_Squared2.jpg";
import GITHUB from "../assets/github.png";
import LINKEDIN from "../assets/linkedin.png";

const About = () => {
  return (
    <Container className="p-8">
      <Row>
        <div className="w-full lg:w-auto text-center">
          <h1 className="text-milkyWhite text-xl lg:text-6xl font-semibold">
            Hey, I'm Han
          </h1>
        </div>
      </Row>
      <Row className="flex justify-center lg:grid lg:grid-cols-5 pt-4">
        <div classname="flex justify-center lg:col-span-1">
          <div className="flex justify-center">
            <img src={Photo} className="w-36 h-36 rounded-full"></img>
          </div>
          <div className="flex justify-center mt-2">
            <a href="https://github.com/hanpham32" target="_blank">
              <img
                src={GITHUB}
                alt="github-icon"
                className="w-8 h-8 mx-2 mb-2 transform hover:scale-110"
              ></img>
            </a>
            <a href="https://www.linkedin.com/in/hansopham/" target="_blank">
              <img
                src={LINKEDIN}
                alt="linkedin-icon"
                className="w-8 h-8 mx-2 mb-2 transform hover:scale-110"
              ></img>
            </a>
          </div>
        </div>
        <div className="lg:col-span-4">
          <p className="text-lightGrey text-xl">
            I am a college freshman from the Seattle area. I either spend my
            time exploring different restaurants and coffee shops in Seattle, or
            at my computer learning various topics and creating different side
            projects. My interests are in software development with machine
            learning integration. In addition, I love creating tools that assist
            human productivity and efficiency. Currently, I'm researching and
            exploring Natural Language Processing, with the main focus in Neural
            Machine Translation.
            <br></br> Little background about me. I'm half Vietnamese and
            Chinese but I was born and grew up in Vietnam. When I was 12, I
            moved to Seattle and have lived here ever since. My other hobbies
            include photography and basketball. Sometimes, when the season
            changes, I find myself go on adventures with my lovely Fujifilm
            camera. <br></br> Thanks for giving my website a look :)
          </p>
        </div>
      </Row>
    </Container>
  );
};

export default About;
