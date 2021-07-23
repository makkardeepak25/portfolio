import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailIcon from "@material-ui/icons/Mail";
import { Cont, Title, Social, FormLine, SocialLinks } from "./Contact.styled";


export function Contact() {
  return (
    <Cont>
      <Title>Contact me</Title>
      <FormLine>
        I'm currently open to new career opportunities. Would you like to contact me? Feel free to leave me a message, or reach
        out through the websites below:
      </FormLine>

      <Social>I am Social</Social>
      <SocialLinks>
        <a href={"https://www.linkedin.com/in/deepakmakkar25/"}>
          <LinkedInIcon style={{ color: "#C0C0C0", width: "35px", height: "35px" }} />
        </a>
        <a href={"https://github.com/makkardeepak25"}>
          <GitHubIcon style={{ color: "#C0C0C0", width: "35px", height: "35px" }} />
        </a>
        <a href={"mailto: deepak.elect@nitttrchd.ac.in"}>
          <MailIcon style={{ color: "#C0C0C0", width: "35px", height: "35px" }} />
        </a>
        <a href={"https://wa.me/919877468563"}>
          <WhatsAppIcon style={{ color: "#C0C0C0", width: "35px", height: "35px" }} />
        </a>
        <a href={"https://www.instagram.com/makkar2330/"}>
          <InstagramIcon style={{ color: "#C0C0C0", width: "35px", height: "35px" }} />
        </a>
        <a href={"https://www.facebook.com/makkar2330/"}>
          <FacebookIcon style={{ color: "#C0C0C0", width: "35px", height: "35px" }} />
        </a>
      </SocialLinks>
    </Cont>
  );
}
