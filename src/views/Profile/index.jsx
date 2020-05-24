import React, { Component } from "react";
import { Card, Upload, Spin } from "antd";
import axios from "axios";
import { connect } from "react-redux";
import { changeAvatar } from "../../actions/useraction";

const stateMap = (state) => {
  return {
    avatar: state.user.avatar,
  };
};
@connect(stateMap, { changeAvatar })
class Profile extends Component {
  state = {
    avatarUrl: "",
    isUploading: false,
  };
  handleUploadAvatar = ({ file }) => {
    this.setState({
      isUploading: true,
    });
    //贴图doc  http://www.tietuku.com/doc
    const data = new FormData();
    data.append(
      "Token",
      "815835856668fc45650b5487d18dbdddc9624f9d:_5VZJ3ZPlbY1gVJXmHh_UMYFnhQ=:eyJkZWFkbGluZSI6MTU5MDE1Njk0MiwiYWN0aW9uIjoiZ2V0IiwidWlkIjoiNzE5NTU3IiwiYWlkIjoiMTY5MTE3MyIsImZyb20iOiJmaWxlIn0="
    );
    data.append("file", file);
    axios
      .post("http://up.imgapi.com/", data)
      .then((resp) => {
        if (resp.status === 200) {
          this.setState({
            isUploading: false,
          });
          this.props.changeAvatar(resp.data.linkurl);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <Card title="个人设置" bordered={false}>
        {/* avatar 上传可以使用antd 的案例，这里自定义使用 */}
        <Upload
          // 是否显示上传的列表 默认true
          showUploadList={false}
          customRequest={this.handleUploadAvatar}
        >
          <Spin spinning={this.state.isUploading}>
            {this.props.avatar ? (
              <img
                src={this.props.avatar}
                style={{ width: 80, height: 80 }}
                alt="头像"
              />
            ) : (
              <span
                style={{
                  border: "1px dashed red",
                  width: 80,
                  height: 80,
                  display: "block",
                }}
              >
                上传头像
              </span>
            )}
          </Spin>
        </Upload>
      </Card>
    );
  }
}

export default Profile;
