import React from "react";
import { LinkDec, Nav,Img,Links,Button } from "./Navbar.js";

export function Navbar() {
  return (
    <Nav>
      <div>
        <LinkDec to="/"><Img src="/d.png"/></LinkDec>
      </div>
      <Links>
        <LinkDec className="dec" to="/">
          Home
        </LinkDec>
        <LinkDec className="dec" to="/about">
          About
        </LinkDec>
        <LinkDec className="dec" to="/projects">
          Work
        </LinkDec>
        <LinkDec className="dec" to="/contact">
          Contact
        </LinkDec>
        <a href='/deepakcv.pdf' download><Button>Download CV</Button></a>
      </Links>
    </Nav>
  );
}
