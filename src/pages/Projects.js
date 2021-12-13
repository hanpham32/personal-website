import React from "react";
import { Container, Row } from "react-bootstrap";
import Project from "../components/Project";
import FadeIn from "react-fade-in/lib/FadeIn";
// Import project assets
import { items } from "../appdata/projects_data.js";
const Projects = () => {
  return (
    <Container>
      <Row>
        <FadeIn>
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
        </FadeIn>
      </Row>
    </Container>
  );
};

export default Projects;
