import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class ColorBlock extends React.Component {
  constructor() {
    super();
    this.state = {
      message: null
    };
  }

  componentDidUpdate() {
    setTimeout(() => this.setState({ message: null }), 1500);
  }

  handleCopy = text => {
    navigator.clipboard.writeText(this.props.type);
    this.setState({ message: "COPIED" });
  };

  render() {
    return (
      <div
        className="color-box"
        onClick={this.handleCopy}
        style={{ background: this.props.type }}
      >
        <p className="color-box-text">
          {this.state.message != null ? this.state.message : this.props.type}
        </p>
      </div>
    );
  }
}
export default ColorBlock;
