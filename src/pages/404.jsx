import React from "react";

import { Link } from "react-router-dom";
import "./404.css";

const NotFoundPage = () => {
  return (
    <div className="notfound_container">
      <h2>Opps!Page not found!</h2>
      <br></br>
      <h5>Sorry we couldn’t find your page</h5>
      <br></br>
      <h5 id="homepagelink">
        <Link to="/">Back to home page </Link>
      </h5>
    </div>
  );
};

export default NotFoundPage;
