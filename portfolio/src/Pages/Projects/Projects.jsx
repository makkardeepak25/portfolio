import React from "react";
import {
  Container,
  StyledHeading,
  ProjectsData,
  ProImg,
  PerPro,
  Span,
  ProjName,
  TechStack,
  HeadingTech,
  Anch
} from "./Projects.styled";
import GitHubIcon from "@material-ui/icons/GitHub";

const projects = [
  {
    img: "https://uploads-ssl.webflow.com/5d367dcf0ec6034477e114ae/5ecaf0f2d59200434f9a17a1_airtable.png",
    proj_name: "Air Table Clone",
    git: "https://github.com/makkardeepak25/project_airtable",
    tech_stack: ["Javascript", "HTML/CSS3"]
  },
  {
    img: "https://play-lh.googleusercontent.com/3k6wixARxo4AR1Vrh2J1Y-1Eh4RRR5SBS7bZqQvQbbMdBPd-yyT4UEjYrYqoRiIEMA",
    proj_name: "Uboric Clone",
    git: "https://github.com/makkardeepak25/Uboric-clone",
    tech_stack: ["Javascript", "HTML/CSS3"]
  },
  {
    img: "https://aniportalimages.s3.amazonaws.com/media/details/Monster_India_7tNk2P2.jpg",
    git: "https://github.com/makkardeepak25/Monster_clone",
    proj_name: "Monster India Clone",
    tech_stack: ["Javascript", "React JS"]
  },
  {
    img: "https://pbs.twimg.com/profile_images/722630192552931329/IDmENPgY_400x400.jpg",
    git: "https://github.com/makkardeepak25/strawberry_net_clone",
    proj_name: "Strawberrynet Clone",
    tech_stack: ["Javascript", "React JS", "Mongo DB"]
  }
];

export function Projects() {
  const [proj] = React.useState(projects);
  return (
    <Container>
      <StyledHeading>Project Work</StyledHeading>
      <ProjectsData>
        {proj.map(el => {
          return (
            <PerPro>
              <ProImg src={el.img} />
              <div>
                <ProjName>{el.proj_name}</ProjName>
                <HeadingTech>Tech Stack used:</HeadingTech>

                <TechStack>
                  {el.tech_stack.map(item => {
                    return <Span>{item}</Span>;
                  })}
                </TechStack>
              </div>
              <Anch href={el.git}>
                <GitHubIcon style={{ color: "#505050", width: "35px", height: "35px" }} />
              </Anch>
            </PerPro>
          );
        })}
      </ProjectsData>
    </Container>
  );
}
