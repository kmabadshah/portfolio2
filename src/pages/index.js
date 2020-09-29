import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import { graphql } from "gatsby";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../styles/css/index.css";

export default function Main({ data }) {
  const {
    allStrapiHero: { edges },
  } = data;
  const hero = edges[0].node;

  return (
    <div className="row no-gutters h-100">
      <Navbar data={hero} />
      <div className="col-xl-10 h-100">
        <Hero data={hero} />
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
