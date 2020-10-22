/* global $ */

import React from "react";
import Img from "gatsby-image";
import { Link } from "gatsby";
import { FiPlus } from "react-icons/fi";
import { FaLink } from "react-icons/fa";

class Isotope extends React.Component {
  componentDidMount() {
    this.$el = $(this.el);

    const $isoItems = $(this.$el.find("#iso-items")[0]);
    this.$isoItems = $isoItems;

    $isoItems.find(".btn-more").venobox(); // jquery lightbox plugin

    $isoItems.isotope({
      itemSelector: ".iso-item",
      layoutMode: "fitRows",
      fitRows: {
        columnWidth: ".item-sizer",
      },
      percentPosition: true,
    }); // jquery image gallery plugin

    const $isoButtons = $(this.$el.find("#iso-buttons")[0]);

    $isoButtons.children(".iso-button").click(function () {
      $isoButtons.children(".iso-button").css("color", "");
      $(this).css("color", "#37b3ed");
      const dataToggle = $(this).attr("data-toggle");
      $isoItems.isotope({ filter: dataToggle });

      $isoItems.find(".btn-more").removeAttr("data-gall");
      $isoItems.find(dataToggle).find(".btn-more").attr("data-gall", "gallery");
    });
  }

  componentWillUnmount() {
    this.$isoItems.isotope("destroy");
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
            return category.projects.map(({ id, image_featured }) => (
              <div className={"iso-item mb-4" + " " + category.name}>
                <Img
                  fluid={image_featured.childImageSharp.fluid}
                  className="img-fluid"
                />
                <div className="d-flex justify-content-between position-absolute">
                  <a
                    data-gall="gallery"
                    className="btn-more"
                    href={image_featured.childImageSharp.fluid.src}
                  >
                    <FiPlus />
                  </a>
                  <Link className="btn-details" to={"/projects/" + id}>
                    <FaLink />
                  </Link>
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
