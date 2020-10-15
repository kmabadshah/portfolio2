import React from "react";
import Img from "gatsby-image";
import { FaChevronRight } from "react-icons/fa";
import { InView } from "react-intersection-observer";

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
    intItems,
    setIntItems,
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
          <InView
            as="div"
            className="col-12 col-lg-4"
            onChange={(inView, entry) => {
              const tempItems = { ...intItems };
              tempItems["about-img"] = entry;
              setIntItems(tempItems);
            }}
            threshold={0.25}
            style={{
              opacity: 0,
              transform: "translateX(-25%)",
              transition: "transform 0.75s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
            <Img fluid={image.childImageSharp.fluid} className="img-fluid" />
          </InView>
          <InView
            className="col-12  col-lg-8 "
            as="div"
            onChange={(inView, entry) => {
              const tempItems = { ...intItems };
              tempItems["about-info"] = entry;
              setIntItems(tempItems);
            }}
            threshold={0.25}
            style={{
              opacity: 0,
              transform: "translateX(25%)",
              transition: "transform 0.75s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          >
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
          </InView>
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
