import React, { Component } from "react";
import { BlogList } from "./components";

export default class App extends Component {
  render() {
    return <BlogList store={this.props.store} />;
  }
}
