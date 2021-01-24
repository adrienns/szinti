import React from "react";
import { FormattedMessage } from "react-intl";

import { Link } from "react-router-dom";
import "./404.css";

const NotFoundPage = () => {
  return (
    <div className="notfound_container">
      <h2>
        <FormattedMessage
          id="app.pagenotfound"
          defaultMessage="Opps!Page not found!"
        />
      </h2>
      <br></br>
      <h5>
        {" "}
        <FormattedMessage
          id="app.couldnotfoundpage"
          defaultMessage="Sorry we couldn’t find your page."
        />
      </h5>
      <br></br>
      <h5 id="homepagelink">
        <Link to="/">
          {" "}
          <FormattedMessage
            id="app.backtohomepage"
            defaultMessage="Back to home page "
          />
        </Link>
      </h5>
    </div>
  );
};

export default NotFoundPage;
