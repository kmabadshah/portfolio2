import React from "react";
import { VscSmiley } from "react-icons/vsc";
import { FaTasks, FaHeadset } from "react-icons/fa";
import CountUp from "react-countup";

export default function Facts({
  data: { desc, happy_clients, projects, support },
}) {
  return (
    <div id="facts">
      <div className="container">
        <h2 className="font-weight-bold" id="sec-title">
          Facts
        </h2>
        <div className="bar"></div>
        <p>{desc}</p>

        <div className="row no-gutters justify-content-between" id="items">
          {produceFact(<VscSmiley />, "happy_clients", happy_clients, "50%")}
          {produceFact(<FaTasks />, "projects", projects, "75%")}
          {produceFact(<FaHeadset />, "support", support, "100%")}
        </div>
      </div>
    </div>
  );
}
function produceFact(icon, title, number, translation) {
  return (
    <div className="col-12 col-md-6 col-lg-auto  my-4">
      <div className="row no-gutters ">
        <div className="col-auto  pr-2 pt-2 ">{icon}</div>

        <div className="col-auto pl-3 ">
          <h1>{number}</h1>

          {(() => {
            switch (title) {
              case "happy_clients":
                return (
                  <p style={{ fontSize: "0.85rem", margin: 0 }}>
                    <b>Happy Clients</b> and counting
                  </p>
                );

              case "projects":
                return (
                  <p style={{ fontSize: "0.85rem", margin: 0 }}>
                    <b>Projects</b> successfully finished
                  </p>
                );

              case "support":
                return (
                  <p>
                    <b>Hours</b> of Support
                  </p>
                );
            }
          })()}
        </div>
      </div>
    </div>
  );
}
