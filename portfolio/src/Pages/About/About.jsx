import React from "react";
import { Link } from "react-router-dom";
import { Container, StyledHeading, GridCont, Data, Name, Summary, Img,Expertise,Skills,HeadExp,Button,ProExp } from "./About.styled";

export function About() {
  const [skills]=React.useState(["Javascript","HTML/CSS3","React JS","MongoDB", "Express","Node JS","GIT", "Data Structures","Algorithms"])
  return (
    <div>
      <Container>
        <StyledHeading>About me</StyledHeading>
        <GridCont>
          <Data>
            <Name>Deepak Makkar</Name>
            <Summary>
              Web Developer with a passion for web application development and success in managing development projects using
              Agile, and Lean processes.
            </Summary>
            <Summary>
              Dedicated to driving innovation with the ability to follow industry and technological trends, and facilitating
              early adoption of innovations.
            </Summary>
            <Expertise>
              <HeadExp>Expertise in: </HeadExp>
              <Skills>
                {skills.map(el => {
                  return <div>{el}</div>
                })}
              </Skills>

            </Expertise>
            <Expertise>
              <HeadExp>Interests</HeadExp>
              <Skills>
                {["Coding","Travelling","Playing Football"].map(el => {
                  return <div>{el}</div>
                })}
              </Skills>

            </Expertise>
          </Data>
          <div>
            <div>
              <Img src="/dp.jpg" alt="dp" />
              <ProExp>To know more about my experience,   <Link to="/projects"> <Button>Projects Completed</Button></Link> </ProExp>
            </div>
          </div>
        </GridCont>
      </Container>
    </div>
  );
}
