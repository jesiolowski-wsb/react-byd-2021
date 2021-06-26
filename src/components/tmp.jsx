import React, { Component } from "react";

class Testowy extends Component {
  state = {
    xxx: "costam",
  };
  render() {
    return <div onClick={this.handleClick}>...</div>;
  }

  handleClick() {
    this.setState({ xxx: "costam innego" });
  }
}
export default Testowy;
