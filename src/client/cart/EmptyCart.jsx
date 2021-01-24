import React from "react";
import { FormattedMessage } from "react-intl";

export default function EmptyCart() {
  return (
    <div className="empty-class-container">
      <h2>
        <FormattedMessage
          id="app.yourshoppingcartisempty"
          defaultMessage="Your Shopping Cart is empty"
        />
      </h2>
    </div>
  );
}
