import React from "react";

class CartColumns extends React.Component {
  render() {
    return (
      <thead>
        <tr>
          <th className="products-information">image</th>

          <th className="products-information">product</th>
          <th className="products-information">details </th>

          <th className="products-information">quantity</th>
          <th className="products-information">price</th>

          <th className="products-information">remove</th>
        </tr>
      </thead>
    );
  }
}

export default CartColumns;
