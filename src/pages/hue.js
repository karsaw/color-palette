import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "../components/Menu";
import ColorBlock from "../components/ColorBlock";
import HSL from "../assets/colors/hsl";
import '../../node_modules/font-awesome/css/font-awesome.min.css'; 
import {
  Container,
  Col,
  Row,
  Form,
  Popover,
  OverlayTrigger,
  Button
} from "react-bootstrap";
import { SketchPicker } from "react-color";

class Hue extends React.Component {
  constructor() {
    super();
    this.state = {
      hex: true,
      rgb: false,
      rgba: false,
      selectedColor: "#FF0000"
    };
  }

  handleChangeComplete = color => {
    this.setState({ selectedColor: color.hex });
  };

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
    var basicColors = HSL.hexToHsl(this.state.selectedColor, 5).map(item => (
      <Col sm={2} id="container">
        {this.state.hex ? (
          <ColorBlock color={item.name} type={item.hex} />
        ) : null}
        {this.state.rgb ? (
          <ColorBlock color={item.name} type={HSL.hexToRGB(item.hex)} />
        ) : null}
        {this.state.rgba ? (
          <ColorBlock color={item.name} type={HSL.hexToRGBA(item.hex)} />
        ) : null}
      </Col>
    ));

    const popover = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Color Picker</Popover.Title>
        <Popover.Content>
          <SketchPicker
            color={this.state.selectedColor}
            disableAlpha={true}
            onChangeComplete={this.handleChangeComplete}
          />
        </Popover.Content>
      </Popover>
    );

    return (
      <Container fluid="true" id="container">
        <Menu></Menu>
        <Container fluid="true">
          <Row id="sub-menu">
            <Col sm={2}>
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
            <Col sm={2}>
              {this.state.selectedColor === "#ffffff" ? (
                <p
                  style={{
                    background: this.state.selectedColor,
                    color: "#000000",
                    border:"1px solid black",
                    padding: "5px"
                  }}
                >
                  {this.state.selectedColor}&nbsp;&nbsp;
                  <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
              >
                <Button variant="dark" id="btn-right"><i className="fa fa-pencil"></i></Button>
              </OverlayTrigger>
                </p>
              ) : (
                <p
                  style={{
                    background: this.state.selectedColor,
                    color: "#ffffff",
                    padding: "5px"
                  }}
                >
                  {this.state.selectedColor}&nbsp;&nbsp;
                  <OverlayTrigger
                trigger="click"
                placement="bottom"
                overlay={popover}
              >
                <Button variant="dark" id="btn-right"><i className="fa fa-pencil"/></Button>
              </OverlayTrigger>
                </p>
              )}
              
            </Col>
            <Col sm={4}>
              
            </Col>
          </Row>
          <Row>{basicColors}</Row>
        </Container>
      </Container>
    );
  }
}

export default Hue;
