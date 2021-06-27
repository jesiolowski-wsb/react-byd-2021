import React, {Component} from "react";

class Counter extends Component {
  render() {
    console.log("[counter] - rendered");
    return (
      <>
        <span className={this.getClassNames()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          increment
        </button>
        <button
          className="btn btn-sm m-2 btn-danger"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          delete
        </button>
      </>
    );
  }

  getClassNames() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value > 0 ? value : "zero";
  }
}

export default Counter;
