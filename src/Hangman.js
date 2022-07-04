import React, { Component } from "react";
import Image from "./Image";
import Keyboard from "./Keyboard";
import Word from "./Word";
import { words } from "./words";

export default class HangmanApp extends Component {
  constructor() {
    super();
    this.selectLetter = this.selectLetter.bind(this);
    this.state = {
      word: "",
      words: words,
      wordSet: {},
      letter: "",
      myDic: {},
      guess: 5,
      selectedButtons: [],
      status: "",
    };
  }
  selectLetter(letter) {
    this.setState({ letter: letter });
    if (this.state.word.split("").includes(letter)) {
      this.state.myDic[letter] = true;
      if (Object.keys(this.state.myDic).length === this.state.wordSet.size) {
        this.state.status = "You won!";
      }
    } else {
      this.state.guess = this.state.guess
        ? this.state.guess - 1
        : (this.state.guess = 0);
      if (this.state.guess === 0) {
        this.state.status = "You lost!";
      }
    }
    this.setState({ selectedButtons: [...this.state.selectedButtons, letter] });
  }
  componentDidMount() {
    const newWord =
      this.state.words[Math.floor(Math.random() * this.state.words.length)];
    const newSet = new Set(newWord);
    this.setState({ word: newWord, wordSet: newSet });
    console.log(newSet);
  }
  render() {
    return (
      <main>
        <Image guess={this.state.guess} />
        <span>
          {this.state.status
            ? this.state.status
            : `${this.state.guess} guess left!`}
        </span>
        <Word
          word={this.state.word}
          letter={this.state.letter}
          myDic={this.state.myDic}
          guess={this.state.guess}
        />
        <Keyboard
          selectLetter={this.selectLetter}
          selectedButtons={this.state.selectedButtons}
          disableKeyboard={this.state.status ? "none" : ""}
        />
      </main>
    );
  }
}
