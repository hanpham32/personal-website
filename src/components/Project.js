import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import TechStack from "./TechStack/TechStack";

// import github icon
import GITHUB from "../assets/github.png";

const Project = ({ src, alt, desc, tags, demo, source, date }) => {
  console.log(tags);
  return (
    <Container className="rounded-2xl w-11/12 h-auto bg-lightGrey2 my-4 xl:py-2 xl:px-8">
      <Row className="flex xl:grid xl:grid-cols-6">
        <div className="flex justify-center items-center lg:col-span-2">
          <img className="rounded-t-2xl xl:rounded-2xl" src={src} alt={alt}></img>
        </div>
        <div className="px-4 py-2 text-milkyWhite lg:col-span-3">
          <span className="flex flex-row flex-wrap">
            {tags.map((tag, key) => (
              <TechStack key={key} tag={tag} />
            ))}
          </span>
          <div className="mt-2">
            <p>{desc}</p>
            <p>{date}</p>
          </div>
        </div>
        <div className="my-2 flex flex-row-reverse w-full lg:col-span-1">
          <a
            className={
              demo == ""
                ? "hidden"
                : "flex justify-center items-center cursor-pointer bg-demoBtn w-16 h-8 rounded-full transform hover:scale-110 mr-2"
            }
          >
            <span>Demo</span>
          </a>
          <a className="w-8 h-8 block mx-2 cursor-pointer transform hover:scale-110">
            <img src={GITHUB} alt="github-icon" className="github"></img>
          </a>
        </div>
      </Row>
    </Container>
  );
};

export default Project;
