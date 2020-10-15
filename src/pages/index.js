import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar";
import About from "../components/about";
import Hero from "../components/hero";
import Facts from "../components/facts";
import Skills from "../components/skills";
import Resume from "../components/resume";
import Portfolio from "../components/portfolio";

import { graphql } from "gatsby";
import { FaBars, FaTimes } from "react-icons/fa";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../styles/css/index.css";

export default function Main({ data }) {
  const hero = data.allStrapiHero.edges[0].node;
  const about = data.allStrapiAbout.edges[0].node;
  const facts = data.allStrapiFacts.edges[0].node;
  const skills = data.allStrapiSkills.edges[0].node;
  const resume = data.allStrapiResume.edges[0].node;
  const portfolio = data.allStrapiPortfolio.edges[0].node;

  const [intItems, setIntItems] = useState({});

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = sidebarIsOpen ? "hidden" : "auto";
  }, [sidebarIsOpen]);

  useEffect(() => {
    if (Object.keys(intItems).length) {
      for (const [key, value] of Object.entries(intItems)) {
        if (value.isIntersecting) value.target.classList.add("ttl-0", "op-1");
      }
    }
  }, [intItems]);

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
          <About data={{ ...about, setIntItems, intItems }} />
          <Facts data={{ ...facts, setIntItems, intItems }} />
          <Skills data={{ ...skills }} />
          <Resume data={{ ...resume }} />
          <Portfolio data={{ ...portfolio }} />
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
              fluid(quality: 100, webpQuality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }

    allStrapiAbout {
      edges {
        node {
          id
          age
          birthday
          city
          degree
          desc
          email
          freelance
          phone
          title
          under_title
          website
          whoami
          image {
            childImageSharp {
              fluid(quality: 100, webpQuality: 100) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      }
    }

    allStrapiFacts {
      edges {
        node {
          desc
          happy_clients
          id
          projects
          support
        }
      }
    }

    allStrapiSkills {
      edges {
        node {
          desc
          id
          items {
            css
            html
            javascript
            wordpress
            php
          }
        }
      }
    }

    allStrapiResume {
      edges {
        node {
          categories {
            summary {
              address
              desc
              email
              id
              name
              number
            }

            education {
              company
              desc
              title
              year
              id
            }

            exp {
              company
              id
              items {
                array
              }
              title
              year
            }
          }
          desc
        }
      }
    }

    allStrapiPortfolio {
      edges {
        node {
          desc
          categories {
            id
            name
            images {
              localFile {
                childImageSharp {
                  fluid(quality: 100, webpQuality: 100) {
                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
