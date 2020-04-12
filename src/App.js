import React, { Component } from "react";
import WithCopyright from "./withCopyright";
// npm install react-app-rewired --save-dev
class App extends Component {
  render() {
    return <div>App</div>;
  }
}

export default WithCopyright(App);
