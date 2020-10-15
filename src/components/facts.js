import React from "react";
import { VscSmiley } from "react-icons/vsc";
import { FaTasks, FaHeadset } from "react-icons/fa";
import { InView } from "react-intersection-observer";
import CountUp from "react-countup";

export default function Facts({
  data: { desc, happy_clients, projects, support, intItems, setIntItems },
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
          {produceFact(
            <VscSmiley />,
            "happy_clients",
            happy_clients,
            intItems,
            setIntItems,
            "50%"
          )}
          {produceFact(
            <FaTasks />,
            "projects",
            projects,
            intItems,
            setIntItems,
            "75%"
          )}
          {produceFact(
            <FaHeadset />,
            "support",
            support,
            intItems,
            setIntItems,
            "100%"
          )}
        </div>
      </div>
    </div>
  );
}
function produceFact(icon, title, number, intItems, setIntItems, translation) {
  return (
    <InView
      as="div"
      onChange={(itemInView, entry) => {
        const tempItems = { ...intItems };
        tempItems["about-info"] = entry;
        setIntItems(tempItems);
      }}
      threshold={0.25}
      style={{
        opacity: 0,
        transform: `translateY(${translation})`,
        transition: `transform 1s cubic-bezier(0.34, 1.56, 0.64, 1)`,
      }}
      className="col-12 col-md-6 col-lg-auto  my-4"
    >
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
    </InView>
  );
}
