import React, {Component} from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onDelete, onReset, onIncrement, counters } = this.props;

    return (
      <>
        <button className="btn btn-primary" onClick={onReset}>
          Reset
        </button>
        {counters.map((c) => (
          <Counter
            counter={c}
            key={c.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
          />
        ))}
      </>
    );
  }
}

export default Counters;
