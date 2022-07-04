import React, { Component } from "react";

export default class Keyboard extends Component {
  constructor() {
    super();
    this.state = {
      disable: false,
    };
  }
  render() {
    return (
      <div
        className="keyboard"
        style={{ pointerEvents: this.props.disableKeyboard }}
      >
        {"abcdefghijklmnopqrstuvwxyz".split("").map((letter, index) => {
          if (this.props.selectedButtons.includes(letter)) {
            this.state.disable = true;
          } else {
            this.state.disable = false;
          }
          return (
            <button
              className={this.state.disable ? "selected-box" : "letter-box"}
              key={index}
              onClick={() => this.props.selectLetter(letter)}
              disabled={this.state.disable}
            >
              {letter}
            </button>
          );
        })}
      </div>
    );
  }
}
