import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import About from "../components/about";
import Hero from "../components/hero";
import { graphql } from "gatsby";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/index.css";

export default function Main({ data }) {
  const {
    allStrapiHero: { edges },
  } = data;
  const hero = edges[0].node;

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sidebarIsOpen ? "hidden" : "auto";
  }, [sidebarIsOpen]);

  return (
    <div id="wrapper">
      <Sidebar
        data={{
          ...hero,
          sidebarIsOpen,
          setSidebarIsOpen,
        }}
      />

      <div id="content">
        <FaBars
          id="btn-toggle-sidebar-1"
          className={sidebarIsOpen && "tsc-0"}
          onClick={(e) => {
            setSidebarIsOpen(true);
          }}
        />
        <FaTimes
          id="btn-toggle-sidebar-2"
          className={!sidebarIsOpen && "tsc-0"}
          onClick={(e) => {
            setSidebarIsOpen(false);
          }}
        />
        <Hero
          data={{
            ...hero,
            sidebarIsOpen,
            setSidebarIsOpen,
          }}
        />
        <div id="bottom" onClick={() => setSidebarIsOpen(false)}>
          <About data={{ ...hero }} />
        </div>
      </div>
    </div>
  );
}
export const query = graphql`
  {
    allStrapiHero {
      edges {
        node {
          id
          name
          role {
            id
            name
          }
          social {
            id
            name
            url
          }
          image {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`;
