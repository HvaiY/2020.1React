import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { default as ArticalDetail } from "./ArticalDetail";

export default class Artical extends Component {
  render() {
    return (
      <div>
        <Route component={ArticalDetail} path='/artical/:id' />
        <Link to='/artical/1?from=artical'>文章一</Link>
        <Link
          to={{
            pathname: "/artical/2",
            state: {
              from: "artical",
            },
          }}>
          文章二
        </Link>
      </div>
    );
  }
}
