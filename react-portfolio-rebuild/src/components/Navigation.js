import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <NavLink exact to="/about">
        ABOUT
      </NavLink>

      <NavLink exact to="/projects">
        PROJECTS
      </NavLink>

      <a href="https://github.com/diehlkj" target="_blank">
        GITHUB
      </a>

      <a href="https://www.linkedin.com/in/diehlkj/" target="_blank">
        LINKEDIN
      </a>

      <a href="https://twitter.com/diehlkj" target="_blank">
        TWITTER
      </a>
    </nav>
  );
}
