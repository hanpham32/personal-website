import React from "react";
import "./Project.css";

import TechStack from "./TechStack/TechStack";

// import github icon
import GITHUB from "../assets/github.png";

const Project = ({ src, alt, desc, tags, demo, source, date }) => {
  console.log(tags);
  return (
    <div className="project-container">
      <div className="column">
        <img src={src} alt={alt}></img>
      </div>
      <div className="column">
        <span className="tags-container">
          {tags.map((tag, key) => (
            <TechStack key={key} tag={tag} />
          ))}
        </span>
        <div>
          <p className="project-desc">{desc}</p>
          <p className="project-date-created">{date}</p>
        </div>
      </div>
      <div className="links">
        <a
          href={demo}
          target="_blank"
          className={demo == "" ? "hide" : "demo-button"}
        >
          <span>Demo</span>
        </a>
        <a href={source} target="_blank">
          <img src={GITHUB} alt="github-icon" className="github"></img>
        </a>
      </div>
    </div>
  );
};

export default Project;
