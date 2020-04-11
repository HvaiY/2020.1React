import React, { Component } from "react";
import { CounBtn } from "./components/CounBtn";
import { Counter } from "./components/Counter";

class App extends Component {
  render() {
    return (
      <>
        <CounBtn type='Lessen'>-</CounBtn>
        <Counter></Counter>
        <CounBtn type='Add'>+</CounBtn>
      </>
    );
  }
}

export { App };
