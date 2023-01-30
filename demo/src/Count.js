import React, { Component } from "react";

export default class Count extends Component {
  componentDidUpdate(prevprops) {
    if (prevprops.number !== this.props.number) {
      console.log("componet update");
    }
  }

  render() {
    return (
      <div>
        <h3>LifeCycle -: {this.props.number}</h3>
      </div>
    );
  }
}
