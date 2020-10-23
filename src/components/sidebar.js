import React from "react";
import Img from "gatsby-image";
import { FaHome } from "react-icons/fa";
import { socialLinks, navLinks } from "./constants";
import { Link } from "react-scroll";

export default function Sidebar({
  data: { name, role, social, image, sidebarIsOpen, setSidebarIsOpen },
}) {
  return (
    <div id="sidebar" className={sidebarIsOpen && "ttl-0"}>
      <Img
        fluid={image.childImageSharp.fluid}
        className="img-fluid rounded-circle"
        imgStyle={{ objectPosition: "top" }}
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
          <Link
            className="row mb-3 w-100 align-items-center nav-item"
            key={index}
            style={{ marginLeft: "3rem" }}
            to={link}
            activeClass="active"
            spy={true}
            smooth={true}
            duration={1000}
            onClick={() => setSidebarIsOpen(false)}
          >
            <div className="d-flex text-white-50">{icon}</div>
            <p className="nav-link text-capitalize text-white-50">{name}</p>
          </Link>
        );
      })}
    </div>
  );
}
