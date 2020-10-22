/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react");

exports.onRenderBody = ({ setPostBodyComponents, setHeadComponents }) => {
  setPostBodyComponents([
    <script
      src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
      crossOrigin="anonymous"
    ></script>,
    <script src="https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.js"></script>,
    <script type="text/javascript" src="/venobox/venobox.min.js"></script>,
    <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>,
  ]);

  setHeadComponents([
    <link
      rel="stylesheet"
      href="/venobox/venobox.min.css"
      type="text/css"
      media="screen"
    />,
    <link
      rel="stylesheet"
      href="https://unpkg.com/flickity@2/dist/flickity.min.css"
    />,
  ]);
};
