import React, { Component } from "react";
import { Form, Input, Button, Checkbox, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { login } from "../../actions/useraction";

import "./index.less";

//栅格化
// const wrapperCol = {
//   xs: {
//     span: 20,
//     offset: 1,
//   },
//   md: {
//     span: 8,
//     offset: 8,
//   },
// };
const mapState = (state) => ({
  isLoading: state.user.isLoading,
  isLogin: state.user.isLogin,
});

@connect(mapState, { login })
class Login extends Component {
  onFinish = (values) => {
    this.props.login(values);
  };
  render() {
    return this.props.isLogin ? (
      <Redirect to="/admin" />
    ) : (
      <Card title="MyReact 登录" className="demo_Login_class">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={this.onFinish}
          // wrapperCol={wrapperCol}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "请输入用户名",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "请输入密码",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="密码"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox> 记住我 </Checkbox>
            </Form.Item>
            <a href="">忘记密码</a>
          </Form.Item>
          <Form.Item>
            <Button
              loading={this.props.isLoading}
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              登录
            </Button>
            或者 <a href=""> 马上注册 </a>
          </Form.Item>
        </Form>
      </Card>
    );
  }
}

export default Login;
