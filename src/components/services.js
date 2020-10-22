import React from "react";
import { FiMonitor } from "react-icons/fi";
import { FaGlobeAfrica } from "react-icons/fa";
import { GoGraph } from "react-icons/go";
import { AiFillPicture } from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdDateRange } from "react-icons/md";

export default function Services({ data: { desc, services } }) {
  const icons = [
    <FiMonitor />,
    <GoGraph />,
    <FaGlobeAfrica />,
    <AiFillPicture />,
    <GiSettingsKnobs />,
    <MdDateRange />,
  ];

  return (
    <div id="services">
      <div className="container">
        <h2 id="title">Services</h2>
        <div className="bar"></div>
        <p>{desc}</p>
        <div className="row no-gutters" id="items">
          {services.map(({ title, desc }, i) => {
            return (
              <div className="col-12 col-md-6 col-lg-4 pr-md-5" id="item">
                <div className="row no-gutters align-items-between">
                  <div className="col-2 col-md-3">
                    <div className="icon">{icons[i]}</div>
                  </div>
                  <div className="col-10 col-md-9 pl-md-3">
                    <p className="font-weight-bold text-justify mb-2">
                      {title}
                    </p>
                    <p className="desc">{desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
