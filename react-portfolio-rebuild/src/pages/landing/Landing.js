import React from "react";
import Navigation from "components/Navigation";
import LeftCorners from "components/LeftCorners";

export default function Landing() {
  return (
    <section className="landing">
      <LeftCorners />
      <main className="landing-content">
        <div className="title">
          <h1>KEN</h1>
          <h2>DIEHL</h2>
          <h3>WEB DEVELOPER</h3>
        </div>

        <Navigation />
      </main>

      <div className="landing-accent-graphic"></div>
    </section>
  );
}
