import React from "react";
import Img from "gatsby-image";
import Isotope from "./isotope";

export default function Portfolio({ data: { categories, desc } }) {
  return (
    <div id="portfolio">
      <div className="container">
        <h2 id="title">Portfolio</h2>
        <div className="bar"></div>
        <p>{desc}</p>
        <Isotope data={{ categories }} />
      </div>
    </div>
  );
}
