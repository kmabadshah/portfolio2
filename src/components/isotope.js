/* global $ */

import React from "react";
import Img from "gatsby-image";

class Isotope extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);

    let categories = "";
    this.props.data.categories.forEach((category) => {
      categories += `#${category.name} `;
    });

    const $isoItems = $(this.$el.find("#iso-items")[0]);
    this.$isoItems = $isoItems;

    $isoItems.isotope({
      itemSelector: ".iso-item",
      layoutMode: "fitRows",
      fitRows: {
        columnWidth: ".item-sizer",
      },
      percentPosition: true,
    });

    const $isoButtons = $(this.$el.find("#iso-buttons")[0]);

    $isoButtons.children(".iso-button").click(function () {
      $isoButtons.children(".iso-button").css("color", "");
      $(this).css("color", "#37b3ed");
      const dataToggle = $(this).attr("data-toggle");
      $isoItems.isotope({ filter: dataToggle });
    });
  }

  componentWillUnmount() {
    this.$isoItems.isotope("destroy");
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { categories } = this.props.data;

    return (
      <div
        className=""
        style={{ maxHeight: "100%", maxWidth: "100%" }}
        ref={(el) => (this.el = el)}
        id="isotope"
      >
        <div className="btn-group text-uppercase" id="iso-buttons">
          <button data-toggle="*" className="iso-button text-uppercase">
            all
          </button>
          {categories.map((category) => (
            <button data-toggle={"." + category.name} className="iso-button">
              {category.name}
            </button>
          ))}
        </div>

        <div id="iso-items">
          <div className="item-sizer"></div>
          {categories.map((category) => {
            return category.images.map((image) => (
              <div className={"iso-item mb-4" + " " + category.name}>
                <Img fluid={image.localFile.childImageSharp.fluid} />
                <div className="d-flex justify-content-between position-absolute">
                  <button className=".btn-more btn btn-block">hello</button>
                  <button className=".btn-details btn btn-block">world</button>
                </div>
              </div>
            ));
          })}
        </div>
      </div>
    );
  }
}

export default Isotope;
