import React, { Component } from "react";
import Cart from "./cart";

class Carts extends Component {
  state = {
    counters: [
      { id: 1, value: 6 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button className="reset_btn" onClick={this.handleReset}>
          Reset
        </button>
        {this.state.counters.map((counter) => (
          <Cart
            key={counter.id}
            onDelete={this.handleDelete}
            counter={counter}
            onIncrement={this.handleIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Carts;
