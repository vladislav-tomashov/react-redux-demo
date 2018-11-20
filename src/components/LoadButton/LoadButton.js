import React, { Component } from "react";
import "./LoadButton.css";

class LoadButton extends Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  onClick = () => {
    console.log("click!");
  };
  render() {
    return <button onClick={this.onClick}> Load rates</button>;
  }
}

export { LoadButton as default };
