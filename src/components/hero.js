import React from "react";
import Img from "gatsby-image";

export default function Hero({ data: { name, role, image } }) {
  return (
    <div id="hero">
      <Img
        fluid={image.childImageSharp.fluid}
        className="img"
        imgStyle={{ objectPosition: "top", backgroundAttachment: "fixed" }}
      />
      <h1 id="name">{name}</h1>
    </div>
  );
}
