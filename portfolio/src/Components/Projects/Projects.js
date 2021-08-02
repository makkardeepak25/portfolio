import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={"https://pbs.twimg.com/profile_images/722630192552931329/IDmENPgY_400x400.jpg"}
              isBlog={false}
              title="StrawberryNet"
              description="Strawberrynet Clone build with react.js, Material-UI, and other frameworks"
              link="https://github.com/makkardeepak25/strawberry_net_clone"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={"https://aniportalimages.s3.amazonaws.com/media/details/Monster_India_7tNk2P2.jpg"}
              isBlog={false}
              title="Monster India"
              description="Monster India, awebsite for job seekers, cloned with React JS."
              link="https://github.com/makkardeepak25/Monster_clone"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={"https://play-lh.googleusercontent.com/3k6wixARxo4AR1Vrh2J1Y-1Eh4RRR5SBS7bZqQvQbbMdBPd-yyT4UEjYrYqoRiIEMA"}
              isBlog={false}
              title="Uboric"
              description="Uboric,e marketplace for home products build with Advanced Javascript and HTML/CSS3"
              link="https://github.com/makkardeepak25/Uboric-clone"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={"https://uploads-ssl.webflow.com/5d367dcf0ec6034477e114ae/5ecaf0f2d59200434f9a17a1_airtable.png"}
              isBlog={false}
              title="Airtable"
              description="Airtable cloned with basic Javascript and HTML/CSS"
              link="https://github.com/makkardeepak25/project_airtable"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
