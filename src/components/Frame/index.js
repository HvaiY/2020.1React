import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Dropdown, Avatar, Badge } from "antd";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  DownOutlined,
} from "@ant-design/icons";
import Logo from "./Logo.png";
import "./frame.less";

import { adminRoute } from "../../routes";
import { fetchNotificationByPost } from "../../actions/notifications";
import { logout } from "../../actions/useraction";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const menu = adminRoute.filter((c) => c.isNav === true);

const mapState = (state) => {
  return {
    notification: state.notifications.list.filter(
      (item) => item.hasRead === false
    ).length,
    avatar: state.user.avatar,
    displayName: state.user.displayName,
  };
};

// 组件来自 antd 的layout 布局
@connect(mapState, { fetchNotificationByPost, logout })
@withRouter
class Frame extends Component {
  componentDidMount() {
    this.props.fetchNotificationByPost();
  }

  OnDropdownMenuClick = ({ key }) => {
    if (key === "/logout") {
      this.props.logout();
    } else {
      this.props.history.push(key);
    }
  };

  onMenuCLick = ({ key }) => {
    console.log(key);
    this.props.history.push(key);
  };

  renderDropDown = () => (
    <Menu onClick={this.OnDropdownMenuClick}>
      <Menu.Item key="/admin/notification">
        <Badge dot={Boolean(this.props.notification)}>通知中心 </Badge>
      </Menu.Item>

      <Menu.Item key="/admin/profile">个人设置</Menu.Item>
      <Menu.Item key="/logout">退出登录</Menu.Item>
    </Menu>
  );

  render() {
    console.log(this.props);
    const selectedItemArray = this.props.location.pathname.split("/");
    selectedItemArray.length = 3;
    return (
      <Layout style={{ minHeight: "100%" }}>
        <Header className="demo-header ">
          <div className="demo-logo">
            <img src={Logo} alt="ReactTest" />
          </div>
          <div>
            <Dropdown overlay={this.renderDropDown} trigger={["click"]}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Avatar src={this.props.avatar} />
                <span>
                  欢迎您,{this.props.displayName}
                  <Badge count={this.props.notification} offset={[-5, -8]}>
                    <DownOutlined />
                  </Badge>
                </span>
              </div>
            </Dropdown>
          </div>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={[selectedItemArray.join("/")]}
              onClick={this.onMenuCLick}
              style={{ height: "100%", borderRight: 0 }}
            >
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
          <Layout style={{ padding: "2px" }}>
            <Content
              style={{
                background: "#fff",
                margin: 0,
              }}
            >
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default Frame;
