import React, { Component } from "react";

export default class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div className="placeholder">
        <hr />
        <div className="secret-word">
          {this.props.guess ? (
            this.props.word.split("").map((item, index) => {
              if (Object.keys(this.props.myDic).includes(item)) {
                return <span key={index}>{item}</span>;
              } else {
                return <span key={index}>{"-"}</span>;
              }
            })
          ) : (
            <span>{this.props.word}</span>
          )}
        </div>
      </div>
    );
  }
}
