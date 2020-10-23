import React from "react";
import GoogleMapReact from "google-map-react";
import { MdLocationOn, MdCall } from "react-icons/md";
import { FaEnvelope } from "react-icons/fa";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Contact({ data: { desc, location, email, call } }) {
  return (
    <div id="contact">
      <div className="container">
        <h2 id="title">Contact</h2>
        <div className="bar" />
        <p>{desc}</p>
        <div className="row no-gutters mt-4">
          <div className="col-lg-5 col-12 pr-lg-3">
            <div className="card">
              <div
                className="card-body d-flex flex-column"
                style={{ height: "36rem" }}
              >
                {buildLocItem("Location", location)}
                {buildLocItem("Email", email)}
                {buildLocItem("Call", call)}

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621"
                  frameborder="0"
                  allowfullscreen
                  id="map"
                ></iframe>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-12 pl-lg-3 pt-4 pt-lg-0">
            <div className="card">
              <div className="card-body" style={{ height: "36rem" }}>
                <form
                  onSubmit={(e) => e.preventDefault(e)}
                  className="form-group d-flex flex-column"
                >
                  <div className="row">
                    <div className="col-12 col-md-6">
                      <label for="form_name">Your Name</label>
                      <input
                        className="form-control"
                        maxlength="20"
                        required
                        id="form_name"
                      />
                    </div>

                    <div className="col-12 col-md-6 mt-3 mt-md-0">
                      <label for="form_email">Your Email</label>
                      <input
                        className="form-control"
                        maxlength="30"
                        required
                        id="form_email"
                        type="email"
                      />
                    </div>
                  </div>

                  <label for="form_subject" className="mt-3">
                    Subject
                  </label>
                  <input
                    className="form-control"
                    maxlength="20"
                    required
                    id="form_subject"
                  />

                  <label for="form_message" className="mt-3">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="form_message"
                    rows="10"
                    required
                    maxlength="200"
                  />

                  <button
                    type="submit"
                    className="btn-primary mt-4 btn mx-auto"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function buildLocItem(name, item) {
  return (
    <div className="row no-gutters mb-4">
      <div className="col-auto mr-3">
        <div className="icon">
          {(() => {
            switch (name) {
              case "Location":
                return <MdLocationOn />;
                break;

              case "Email":
                return <FaEnvelope />;
                break;

              case "Call":
                return <MdCall />;
                break;

              default:
                return "";
            }
          })()}
        </div>
      </div>
      <div className="col">
        <h5 className="m-0">{name}: </h5>
        <p className="text-muted">{item}</p>
      </div>
    </div>
  );
}
