import React from "react";
import { LinkDec, Nav } from "./Navbar.js";


export function Navbar() {
  return (
    <Nav>
      <LinkDec className="dec" to="/">Home</LinkDec>
      <LinkDec className="dec" to="/about">About</LinkDec>
      <LinkDec className="dec" to="/projects">Projects</LinkDec>
      <LinkDec className="dec" to="/contact">Contact</LinkDec>
    </Nav>
  );
}
