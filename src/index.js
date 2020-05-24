import React from "react";
import { render } from "react-dom";
import App from "./App";

const state = { name: "aa", code: "cc" };
const newState = Object.assign({}, state);
console.log(state, newState);

render(<App />, document.querySelector("#root"));
