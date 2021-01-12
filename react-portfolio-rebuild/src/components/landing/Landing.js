import React from "react";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <section className="landing">
      <div className="landing-corners">
        <div className="corner-t"></div>
        <div className="corner-b"></div>
      </div>

      <main className="landing-content">
        <div className="title">
          <h1>KEN</h1>
          <h2>DIEHL</h2>
          <h3>WEB DEVELOPER</h3>
        </div>

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
      </main>

      <div className="landing-accent-graphic"></div>
    </section>
  );
}
