import React, { useState, useEffect } from "react";
import ProfilePic from "../assets/Pic_Squared.jpg";
import SocialCubes from "../components/SocialCubes.js";
import { Container, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container className="xl:flex py-8 px-4">
      <Row className="flex justify-center">
        <div className="w-4/5">
          <h1 className="text-milkyWhite text-xl lg:text-6xl font-semibold">Hey, I'm Han</h1>
          <p className="text-lightGrey lg:text-2xl lg:leading-relaxed">
            College freshman from the University of Washington
            (Bothell). I spend my freetime to stumble on many interest-driven
            projects. Follow my works below!
          </p>
          <SocialCubes className="mt-4" />
        </div>
      </Row>
      <Row className="flex flex-shrink-0 justify-center mt-2 xl:mr-12">
        <div className="">
          <img
            src={ProfilePic}
            alt="Han"
            className="rounded-full h-36 w-36 lg:m-0 lg:p-0 lg:h-64 lg:w-64 mt-2"
          ></img>
        </div>
      </Row>
    </Container>
  );
};

export default Home;
