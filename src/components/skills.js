import React from "react";
import { useInView } from "react-intersection-observer";

export default function Skills({ data: { desc, items } }) {
  return (
    <div id="skills">
      <div className="container">
        <h2 id="sec_name">Skills</h2>
        <div className="bar"></div>
        <p id="desc">{desc}</p>
        <div className="row">
          {Object.keys(items).map((key, index) => {
            return (
              <div className="d-flex col-lg-6 flex-column my-3" key={index}>
                <div className="d-flex justify-content-between">
                  <p className="font-weight text-uppercase mb-1">{key}</p>
                  <p className="font-weight">{items[key]}</p>
                </div>

                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{ width: items[key] }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
