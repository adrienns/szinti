/* <span className={this.getNewColor()}>{this.formatCount()} </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="delete_button"
        >
          Delete
        </button>
      </div>
    );
  }

  getNewColor() {
    let classes = "";
    classes += this.props.counter.value === 0 ? "circle" : "yellow";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Cart; */
