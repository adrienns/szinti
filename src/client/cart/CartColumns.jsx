import React from "react";
import { FormattedMessage } from "react-intl";

class CartColumns extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th className="products-information">
            {" "}
            <FormattedMessage id="app.image" defaultMessage="image" />
          </th>

          <th className="products-information">
            {" "}
            <FormattedMessage id="app.name" defaultMessage="name" />
          </th>
          <th className="products-information">
            {" "}
            <FormattedMessage id="app.details" defaultMessage="details" />{" "}
          </th>

          <th className="products-information">
            {" "}
            <FormattedMessage id="app.quantity" defaultMessage="quantity" />
          </th>
          <th className="products-information">
            {" "}
            <FormattedMessage id="app.price" defaultMessage="price" />
          </th>

          <th className="products-information">
            {" "}
            <FormattedMessage id="app.remove" defaultMessage="remove" />
          </th>
        </tr>
      </thead>
    );
  }
}

export default CartColumns;
