import React from "react";
import { FormattedMessage } from "react-intl";
import "./comingSoonText.css";

const ComingSoonText = () => {
  return (
    <div className="comingsoon-text">
      <FormattedMessage
        id="app.comingsoon"
        defaultMessage="The jewelries will be available here soon! Stay tuned!"
      />
    </div>
  );
};

export default ComingSoonText;
