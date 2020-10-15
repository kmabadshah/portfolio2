import React from "react";

export default function Resume({ data: { categories, desc } }) {
  const summary = categories.summary;
  const education = categories.education;
  const exp = categories.exp;

  return (
    <div id="resume">
      <div className="container">
        <h2 id="title">Resume</h2>
        <div className="bar"></div>
        <p id="desc">{desc}</p>

        <div className="row no-gutters">
          <div className="col-12 col-lg-6">
            <h4 className="font-weight-bold mb-3">Summary</h4>
            <div id="summary">
              <h5>{summary.name}</h5>
              <p className="font-italic">{summary.desc}</p>
              <ul className="mt-3">
                <li>{summary.address}</li>
                <li>{summary.number}</li>
                <li>{summary.email}</li>
              </ul>
            </div>

            <h4 className="mt-4 mb-3">Education</h4>
            {education.map((item) => {
              return (
                <div className="edu-item pb-4">
                  <h5 className="mb-3">{item.title}</h5>
                  <p className="year">{item.year}</p>
                  <p className="font-italic my-3">{item.company}</p>
                  <p>{item.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="col-12 col-lg-6 pl-lg-4">
            <h4 className="mt-4 mt-lg-0 mb-3">Professional Experience</h4>
            {exp.map(({ title, year, company, items: { array } }) => {
              return (
                <div className="prof-item pb-4">
                  <h5 className="mb-3">{title}</h5>
                  <p className="year">{year}</p>
                  <p className="my-3">{company}</p>
                  {array.map((item) => (
                    <p>{item}</p>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
