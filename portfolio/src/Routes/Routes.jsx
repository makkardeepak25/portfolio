import React from "react";
import { About } from "../Pages/About";
import { Contact } from "../Pages/Contact";
import { Home } from "../Pages/Home";
import { Route } from "react-router-dom";
import { Navbar } from "../Components/Navbar.jsx";

export function Routes() {
  return (
    <div>
      <Navbar />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/projects" />
      <Route path="/contact">
        <Contact />
      </Route>
    </div>
  );
}
