import React, { useRef, useEffect } from "react";
import BgImg from "gatsby-background-image";
import Typed from "typed.js";

export default function Hero({
  data: { name, role, image, sidebarIsOpen, setSidebarIsOpen },
}) {
  let typed = React.createRef();

  useEffect(() => {
    const typed_strings = typed.current.attributes[0].value.split(",");

    new Typed(typed.current, {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });
  }, []);

  return (
    <div id="hero" onClick={() => setSidebarIsOpen(false)}>
      <BgImg
        fluid={image.childImageSharp.fluid}
        style={{ backgroundPosition: "top", backgroundAttachment: "fixed" }}
        className="op-1 image"
      >
        <div id="whoami">
          <h1 id="name">{name}</h1>
          <h5 id="typed">
            I'm {"  "}
            <span
              ref={typed}
              data-typed-strings="Developer, Blogger, Freelancer"
            ></span>
          </h5>
        </div>
      </BgImg>
    </div>
  );
}
