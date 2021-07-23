import React from "react";
import { About } from "../Pages/About/About";
import { Contact } from "../Pages/Contact/Contact";
import { Home } from "../Pages/Home/Home";
import { Route, Switch } from "react-router-dom";
import { Navbar } from "../Components/Navbar.jsx";
import { Projects } from "../Pages/Projects/Projects";

export function Routes() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  );
}
