import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { withRouter } from "react-router-dom";
import zhCN from "antd/es/locale/zh_CN";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import Logo from "./Logo.png";
import "./frame.less";

import { adminRoute } from "../../routes";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const menu = adminRoute.filter((c) => c.isNav === true);
// 组件来自 antd 的layout 布局
@withRouter
class Frame extends Component {
  onMenuCLick = ({ key }) => {
    console.log(key);
    this.props.history.push(key);
  };
  render() {
    console.log(this.props);
    return (
      <Layout style={{ minHeight: "100%" }} locale={zhCN}>
        <Header className='header demo-header '>
          <div className='demo-logo'>
            <img src={Logo} alt='ReactTest' />
          </div>
        </Header>
        <Layout>
          <Sider width={200} className='site-layout-background'>
            <Menu
              mode='inline'
              defaultSelectedKeys={[this.props.location.pathname]}
              onClick={this.onMenuCLick}
              style={{ height: "100%", borderRight: 0 }}>
              {menu.map((r) => {
                return (
                  <Menu.Item key={r.pathname}>
                    <r.icon />
                    {r.title}
                  </Menu.Item>
                );
              })}
            </Menu>
          </Sider>
          <Layout style={{ padding: "5px" }}>
            <Content
              style={{
                background: "#fff",
                margin: 0,
              }}>
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Frame;
