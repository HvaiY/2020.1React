import React, { Component } from "react";
import { connect } from "react-redux";
import BlogItem from "./BlogItem";

import { featchBlogList } from "../../actions/blog";

class BlogList extends Component {
  componentDidMount() {
    this.props.featchBlogList();
  }
  render() {
    console.log(this.props);
    const { list, isLoading, message } = this.props;
    const hasError = Boolean(message);
    console.log(hasError);
    return isLoading ? (
      <div>loading...</div>
    ) : hasError ? (
      <div>{message}</div>
    ) : (
      <ul>
        {list.map((blog) => {
          return <BlogItem key={blog.id} {...blog} />;
        })}
      </ul>
    );
  }
}

const mapState = (state) => ({
  list: state.blog.list,
  isLoading: state.blog.isLoading,
  message: state.blog.message,
});
export default connect(mapState, { featchBlogList })(BlogList);
