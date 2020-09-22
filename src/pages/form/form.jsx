import React, { Component } from "react";
import axios from "axios";
import "./form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";
import { library } from "@fortawesome/fontawesome-svg-core";
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
      .post("http://localhost:8080/api/forma", data)
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
      <div className="contact-wrapper">
        <div className="form">
          <h4 id="get_in_touch">
            {" "}
            <FormattedMessage id="app.text" defaultMessage="Contact us!" />
          </h4>
          <h5 id="get_in_touch">
            {" "}
            <FormattedMessage
              id="app.longtxt"
              defaultMessage="Contact us via email or by filling out our simple contact form."
            />
          </h5>
          <h5 id="get_in_touch">
            <a>
              <FontAwesomeIcon icon="envelope" style={{ color: "blue" }} />
            </a>
            {"  "}
            vewejewelery@gmail.com
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
                value={this.state.customername}
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
                value={this.state.email}
                onChange={this.handleEmailChange}
                placeholder="  Email address"
                required
              />
            </div>

            <div className="form-row">
              <label htmlFor="message"></label>

              <textarea
                className="text"
                type="message"
                name="message"
                placeholder="  Your message"
                style={styleMessage}
                value={this.state.message}
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
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
