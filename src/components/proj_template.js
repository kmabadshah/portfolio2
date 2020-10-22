/* global $ */
import React from "react";
import ReactDOM from "react-dom";
import { Link } from "gatsby";
import Img from "gatsby-image";

import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class ProjTemplate extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);

    this.$flickity = $(this.$el).find("#carousel").flickity({
      autoPlay: true,
      wrapAround: true,
      prevNextButtons: false,
    });
  }

  componentWillUnmount() {
    this.$flickity.flickity("destroy");
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {
      category,
      client,
      desc,
      images_detail,
      project_date,
      project_url,
    } = this.props.pageContext;

    return (
      <div id="proj_template" ref={(el) => (this.el = el)}>
        <div id="navbar">
          <div className="container-lg">
            <div className="row no-gutters align-items-center justify-content-between">
              <div className="col-12 col-md-auto">
                <h4 className="m-0">Portfolio Details</h4>
              </div>
              <div className="breadcrumb col-12 col-md-auto m-0 bg-light">
                <Link className="breadcrumb-item text-muted" to="/">
                  Home
                </Link>
                <p className="breadcrumb-item text-primary">
                  Portfolio Details
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-lg">
          <div id="carousel-and-info">
            <div id="carousel">
              {images_detail.map((image) => {
                return (
                  <Img
                    fluid={image.localFile.childImageSharp.fluid}
                    className="carousel-cell"
                  />
                );
              })}
            </div>

            <div id="info" className="card">
              <div className="card-body">
                <h5>Project Information</h5>
                <hr
                  style={{
                    backgroundColor: "rgba(0, 0, 0, 0.025)",
                    height: "1px",
                  }}
                />

                {createDetail("Category", category)}
                {createDetail("Client", client)}
                {createDetail("Project date", project_date)}
                {createDetail("Project URL", project_url)}
              </div>
            </div>
          </div>
        </div>

        <div className="container-lg">
          <div id="desc">
            <h4>This is an example of portfolio detail</h4>
            <p>
              Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque
              inventore commodi labore quia quia. Exercitationem repudiandae
              officiis neque suscipit non officia eaque itaque enim. Voluptatem
              officia accusantium nesciunt est omnis tempora consectetur
              dignissimos. Sequi nulla at esse enim cum deserunt eius.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

function createDetail(left, right) {
  return (
    <p className="mb-3">
      <strong>{left}: </strong>

      {left.includes("URL") ? (
        <a href="#" className="text-decoration-none">
          {right}
        </a>
      ) : (
        <span> {right}</span>
      )}
    </p>
  );
}
