import React from "react";
import checkmark from "../images/greencheckmark.png";

const SuccessfulPaymentPage = () => {
  return (
    <div>
      <img
        src={checkmark}
        className="framed_picture"
        alt="Successful payment image"
      />
    </div>
  );
};

export default SuccessfulPaymentPage;
