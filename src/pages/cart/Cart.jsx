import React, { Component } from "react";
import "./cart.css";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../../product_context";
import CartList from "./CartList";
import CartTotals from "./CartTotals";

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cart_container">
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <div className="cart-container">
                  <table className="cart-table">
                    <CartColumns />
                    <CartList value={value} />
                    <CartTotals value={value} />
                  </table>
                </div>
              );
            } else {
              return <EmptyCart />;
            }
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default Cart;
// class Carts extends Component {
//   state = {
//     counters: [
//       { id: 1, value: 6 },
//       { id: 2, value: 0 },
//       { id: 3, value: 0 },
//       { id: 4, value: 0 },
//     ],
//   };

//   handleDelete = (counterId) => {
//     const counters = this.state.counters.filter(
//       (counter) => counter.id !== counterId
//     );
//     this.setState({ counters });
//   };

//   handleIncrement = (counter) => {
//     const counters = [...this.state.counters];
//     const index = counters.indexOf(counter);
//     counters[index] = { ...counter };
//     counters[index].value++;
//     this.setState({ counters });
//   };

//   handleReset = () => {
//     const counters = this.state.counters.map((counter) => {
//       counter.value = 0;
//       return counter;
//     });
//     this.setState({ counters });
//   };

//   render() {
//     return (
//       <div>
//         <button className="reset_btn" onClick={this.handleReset}>
//           Reset
//         </button>
//         {this.state.counters.map((counter) => (
//           <Cart
//             key={counter.id}
//             onDelete={this.handleDelete}
//             counter={counter}
//             onIncrement={this.handleIncrement}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// export default Carts;
