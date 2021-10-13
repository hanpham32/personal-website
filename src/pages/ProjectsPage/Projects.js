import React from "react";
import Project from "../../components/Project";
import "./Projects.css";

// Import project assets
import { items } from "../../appdata/projects_data.js";
const projects = () => {
  return (
    <div className="projects-container">
      <div className="projects">
        {items.map((item, key) => (
          <Project
            src={item.src}
            alt={item.alt}
            desc={item.desc}
            tags={item.tags}
            source={item.source}
            demo={item.demo}
            date={item.date}
            key={key}
          />
        ))}
      </div>
    </div>
  );
};

export default projects;
