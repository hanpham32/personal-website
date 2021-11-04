import React from "react";
import { Container, Row } from "react-bootstrap";
import Project from "../components/Project";

// Import project assets
import { items } from "../appdata/projects_data.js";
const Projects = () => {
  return (
    <Container>
      <Row>
        <div>
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
      </Row>
    </Container>
  );
};

export default Projects;
