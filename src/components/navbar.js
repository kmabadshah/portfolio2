import React from "react";
import Img from "gatsby-image";
import { FaHome } from "react-icons/fa";
import { socialLinks, navLinks } from "./constants";

export default function Navbar({ data: { id, image, name, role, social } }) {
  return (
    <div
      id="navbar"
      className="col-xl-2 d-none h-100 d-xl-flex flex-column align-items-center"
    >
      <Img
        fluid={image.childImageSharp.fluid}
        className="rounded-circle img-fluid"
      />
      <h5 id="name">{name}</h5>
      <div id="social-links">
        {social.map(({ id, name, url }) => {
          return (
            <a href={url} key={id} className="social-link">
              <div className="icon d-flex">
                {socialLinks[name.toLowerCase()]}
              </div>
            </a>
          );
        })}
      </div>

      {navLinks.map(({ name, link, icon }, index) => {
        return (
          <div
            className="row gorder mb-3 w-100  border-danger align-items-center"
            key={index}
            style={{ marginLeft: "3rem" }}
          >
            <div className="d-flex text-white-50">{icon}</div>
            <a href={link} className="nav-link text-capitalize text-white-50">
              {name}
            </a>
          </div>
        );
      })}
    </div>
  );
}
