import React, { Component } from "react";
import axios from "axios";
import "./form.css";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";
import { library } from "@fortawesome/fontawesome-svg-core";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fab,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

library.add(fab, faFacebook, faInstagram);

library.add(faEnvelope);

const styleMessage = {
  height: "180px",
};

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customername: "",
      email: "",
      message: "",
      sent: false,
    };
  }
  handleCustomernameChange = (event) => {
    this.setState({ customername: event.target.value });
  };

  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      customername: this.state.customername,
      email: this.state.email,
      message: this.state.message,
    };
    axios
      .post(`/api/form`, data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("message not sent. please try it again");
      });
  };

  resetForm = () => {
    this.setState({
      customername: "",
      email: "",
      message: "",
    });

    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 3000);
  };

  render() {
    return (
      <div className="contact-form-container">
        <div className="contact-wrapper">
          <div className="contact-form-wrapper">
            <div className="form">
              <h1 className="contact-us" id="get_in_touch">
                {" "}
                <FormattedMessage id="app.text" defaultMessage="Contact us" />
              </h1>
              <h5 id="get_in_touch">
                {" "}
                <FormattedMessage
                  id="app.longtxt"
                  defaultMessage="Contact us via email or by filling out our contact form."
                />
              </h5>
              <h5 id="get_in_touch">
                <a>
                  <FontAwesomeIcon icon="envelope" style={{ color: "blue" }} />
                </a>
                {"  "}
                vewejewelery@gmail.com
              </h5>
              <h5 id="get_in_touch">
                {" "}
                <Link to="">
                  <FontAwesomeIcon icon={["fab", "instagram"]} /> {"  "}
                  Instagram
                </Link>
              </h5>
              <h5 id="get_in_touch">
                <Link to="https://www.facebook.com/vewedesign">
                  <FontAwesomeIcon icon={faFacebook} /> {"  "}
                  Facebook
                </Link>
              </h5>

              <form
                onSubmit={this.handleSubmit}
                id="contact_form"
                action="contact_form.php"
                method="POST"
                autoComplete="on"
              >
                <div className="form-row">
                  <label htmlFor="name"></label>
                  <input
                    className="text"
                    type="text"
                    required
                    value={this.state.customername || ""}
                    onChange={this.handleCustomernameChange}
                    name="name"
                    placeholder="  Your name"
                  />
                </div>

                <div className="form-row">
                  <label htmlFor="email"></label>

                  <input
                    className="text"
                    type="email"
                    name="email"
                    value={this.state.email || ""}
                    onChange={this.handleEmailChange}
                    placeholder="  Email address"
                    required
                  />
                  <h5>{this.state.emailError}</h5>
                </div>

                <div className="form-row">
                  <label htmlFor="message"></label>

                  <textarea
                    className="text"
                    type="message"
                    name="message"
                    placeholder="  Your message"
                    style={styleMessage}
                    value={this.state.message || ""}
                    onChange={this.handleMessageChange}
                    required
                  ></textarea>
                </div>
                <div className={this.state.sent ? "msg msg_appear" : "msg"}>
                  <FormattedMessage
                    id="app.messagesent"
                    defaultMessage="Contact us sweetheart"
                  />
                </div>

                <div className="form-row">
                  <button className="text" type="submit">
                    <FormattedMessage id="app.send" defaultMessage="SEND" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="google-maps">
            <h5>
              <FormattedMessage
                id="app.pickuppersonally"
                defaultMessage="You can pick up the product here:"
              />
            </h5>
            <h5> Budapest,1082 Kisfaludy utca 28a </h5>
            <iframe
              id="google-maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2696.1349120404775!2d19.070146015266484!3d47.48728510420638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc587a10ca81%3A0x3b3957da7e009ec2!2sBudapest%2C%20Kisfaludy%20u.%2028a%2C%201082%20Hungary!5e0!3m2!1sen!2sil!4v1613054898827!5m2!1sen!2sil"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default Form;
