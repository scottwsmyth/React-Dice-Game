import React from "react";
import "./Die.css";

class Die extends React.Component {
  constructor() {
    super();
    this.state = { someKey: "someValue" };

  }

  render() {
    return <i style={{ margin: "10px" }} className={`Die fas fa-10x fa-dice-${this.props.number} ${this.props.rolling ? "rolling" : ""}`}></i>;
  }
}

export default Die;
