/* global $ */
import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import Img from "gatsby-image";

export default class Testimonials extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);

    this.$flickity = $(this.$el).find("#carousel").flickity({
      wrapAround: true,
      autoPlay: true,
      groupCells: true,
      cellAlign: "left",
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
    const { desc, testimonials } = this.props.data;

    return (
      <div id="testimonials" ref={(el) => (this.el = el)}>
        <div className="container">
          <h2 id="title">Testimonials</h2>
          <div className="bar" />
          <p>{desc}</p>
          <div id="carousel">
            {testimonials.map(({ id, image, tag, name, quote }) => {
              return (
                <div
                  className="carousel-cell px-3 boder border-danger"
                  key={id}
                >
                  <div className="card">
                    <div className="card-body">
                      <ImQuotesLeft className="quote-left" />
                      <i className="d-inline mx-2">{quote}</i>
                      <ImQuotesRight className="quote-right" />
                    </div>
                  </div>

                  <Img className="image" fluid={image.childImageSharp.fluid} />
                  <h5 className="text-center m-0">{name}</h5>
                  <p className="m-0 text-center mb-1 text-muted">{tag}</p>
                </div>
              );
            })}
          </div>

          {/* <div id="carousel">{createTestimonials(testimonials)}</div> */}
        </div>
      </div>
    );

    function createTestimonials(testi_array) {
      const length = testi_array.length;

      let result = [];
      let secondResult = [];
      let lastItemIndex;

      for (let x = 3; x <= length; x = x + 3) {
        let numArray = Array.from(Array(x), (_, i) => i).splice(x - 3, 3);

        lastItemIndex = numArray[numArray.length - 1];

        result.push(
          <div className="carousel-cell">
            <div className="row">
              {numArray.map(({ id, tag, quote, name }) => {
                return (
                  <div className="card col-4">
                    <div className="card-body">
                      <h1>Hello</h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }

      if (length % 3 !== 0) {
        result.push(
          <div className="carousel-cell">
            <div className="row">
              {testimonials.map((_, i) => {
                if (i > lastItemIndex) {
                  return (
                    <div className="card col-6">
                      <div className="card-body">
                        <h1>Hello</h1>
                      </div>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        );
      }

      return result;
    }
  }
}
