import React from "react";
import Img from "gatsby-image";
import { FaChevronRight } from "react-icons/fa";

export default function About({
  data: {
    birthday,
    website,
    phone,
    city,
    age,
    degree,
    email,
    freelance,
    image,
    title,
    under_title,
    whoami,
    desc,
  },
}) {
  return (
    <div id="about">
      <div className="container">
        <h2 id="sec_name">About</h2>
        <div className="bar"></div>
        <p id="desc" className="text-justify">
          {whoami}
        </p>

        <div className="row no-gutters">
          <div className="col-12 col-lg-4">
            <Img fluid={image.childImageSharp.fluid} className="img-fluid" />
          </div>
          <div className="col-12  col-lg-8 ">
            <h3 id="title">{title}</h3>
            <p id="under_title">{under_title}</p>
            <div className="row no-gutters">
              <div className="col-12 col-lg-6">
                {makeDetailItem("Birthday", birthday)}
                {makeDetailItem("Website", website)}
                {makeDetailItem("Phone", phone)}
                {makeDetailItem("City", city)}
              </div>
              <div className="col-12 col-lg-6">
                {makeDetailItem("Age", age)}
                {makeDetailItem("Degree", degree)}
                {makeDetailItem("Email", email)}
                {makeDetailItem("Freelance", freelance)}
              </div>
            </div>
            <p className="mt-2 text-justify">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
function makeDetailItem(title, value) {
  return (
    <div
      id={title.toLowerCase()}
      className={`info-item ${title === "City" && "mb-3"}`}
    >
      <FaChevronRight />
      <p>{title}:</p>
      <p>{value === true ? "Available" : value}</p>{" "}
    </div>
  );
}
