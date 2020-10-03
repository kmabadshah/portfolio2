import React from "react";
import Img from "gatsby-image";

export default function About({ data: { image } }) {
  return (
    <div id="about">
      <div className="container">
        <h2 id="title">About</h2>
        <div className="bar"></div>
        <p id="desc">
          Ultricies mi, quis hendrerit dolor magna eget est lorem ipsum dolor
          sit amet, consectetur adipiscing elit pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac? Luctus accumsan
          tortor posuere ac ut consequat semper viverra nam libero justo,
          laoreet sit amet cursus sit amet, dictum sit amet justo donec!
        </p>
        <Img fluid={image.childImageSharp.fluid} />
      </div>
    </div>
  );
}
