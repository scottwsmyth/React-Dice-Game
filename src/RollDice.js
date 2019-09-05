import React from "react";
import Die from "./Die";

class RollDice extends React.Component {
  constructor() {
    super();
    this.state = {
      num1: "one",
      num2: "one",
      rolling: false
    };
    this.getNum = this.getNum.bind(this);
  }

  getNum() {

    let arr = ["one", "two", "three", "four", "five", "six"];

    let randomNum1 = Math.floor(Math.random() * 6);
    let randomNum2 = Math.floor(Math.random() * 6);

    this.setState({ num1: arr[randomNum1] });
    this.setState({ num2: arr[randomNum2] });
    this.setState({ rolling: true });

    const that = this;

    setTimeout(function () {
      that.setState({ rolling: false });
    }, 1000);

  }


  render() {
    return (
      <div style={{ textAlign: "center", display: "inline-block" }}>
        <Die number={this.state.num1} rolling={this.state.rolling} />
        <Die number={this.state.num2} rolling={this.state.rolling} />
        <button disabled={this.state.rolling} onClick={this.getNum} style={{ display: "Block", margin: "0 auto" }}>{this.state.rolling ? "Rolling..." : "Roll!"}</button>
      </div>

    );
  }
}

export default RollDice;
