import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

class Index extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <App />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
