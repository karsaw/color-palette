import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../components/Menu";
import ColorBlock from "../components/ColorBlock";
import BasicColors from "../assets/colors/basic-colors";
import { Container, Col, Row, Form } from "react-bootstrap";

class Basic extends React.Component {
  constructor() {
    super();
    this.state = {
      hex: true,
      rgb: false,
      rgba: false
    };
  }

  handleChange = e => {
    console.log(e.target.value);
    if (e.target.value === "hex") {
      this.setState({
        hex: true,
        rgb: false,
        rgba: false
      });
    }
    if (e.target.value === "rgb") {
      this.setState({
        hex: false,
        rgb: true,
        rgba: false
      });
    }
    if (e.target.value === "rgba") {
      this.setState({
        hex: false,
        rgb: false,
        rgba: true
      });
    }
  };
  render() {
    let basicColors = BasicColors.getBasicColors().map(item => (
      <Col sm={2} id="container">
        {this.state.hex ? (
          <ColorBlock color={item.name} type={item.hex} />
        ) : null}
        {this.state.rgb ? (
          <ColorBlock color={item.name} type={item.rgb} />
        ) : null}
        {this.state.rgba ? (
          <ColorBlock color={item.name} type={item.rgba} />
        ) : null}
      </Col>
    ));

    return (
      <Container fluid="true" id="container">
        <Menu></Menu>
        <Container fluid="true">
          <Row>
            <Col sm={3}>
              <Form>
                {["radio"].map(type => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      label="HEX"
                      type={type}
                      id={`inline-${type}-1`}
                      checked={this.state.hex}
                      onClick={this.handleChange}
                      value="hex"
                      readOnly
                    />
                    <Form.Check
                      inline
                      label="RGB"
                      type={type}
                      id={`inline-${type}-2`}
                      checked={this.state.rgb}
                      onClick={this.handleChange}
                      value="rgb"
                      readOnly
                    />
                    <Form.Check
                      inline
                      label="RGBA"
                      type={type}
                      id={`inline-${type}-3`}
                      checked={this.state.rgba}
                      onClick={this.handleChange}
                      value="rgba"
                      readOnly
                    />
                  </div>
                ))}
              </Form>
            </Col>
          </Row>
          <Row>{basicColors}</Row>
        </Container>
      </Container>
    );
  }
}

export default Basic;
