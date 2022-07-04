import React, { Component } from "react";
import { images } from "./images";

export default class Image extends Component {
  render() {
    return (
      <div className="image-container">
        <img src={images[this.props.guess].img} alt="tree" />
      </div>
    );
  }
}
