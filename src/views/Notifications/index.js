import React, { Component } from "react";
import { Card, Button, List, Avatar, Badge, Spin } from "antd";
import { connect } from "react-redux";

import {
  markNotificationAsReadById,
  markNotificationAsUnReadById,
  markNotificationAsRead,
} from "../../actions/notifications";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const initState = (state) => {
  const { list, isLoading } = state.notifications;
  return { list, isLoading };
};

@connect(initState, {
  markNotificationAsReadById,
  markNotificationAsUnReadById,
  markNotificationAsRead,
})
class Notification extends Component {
  render() {
    console.log(this.props);
    return (
      <Spin spinning={this.props.isLoading}>
        <Card
          title="通知中心"
          extra={
            <Button
              disabled={this.props.list.every((item) => item.hasRead === true)}
              onClick={this.props.markNotificationAsRead}
            >
              全部标记为已读
            </Button>
          }
        >
          <List
            itemLayout="horizontal"
            dataSource={this.props.list}
            renderItem={(item) => (
              <List.Item
                extra={
                  item.hasRead ? (
                    <Button
                      onClick={this.props.markNotificationAsUnReadById.bind(
                        this,
                        item.id
                      )}
                    >
                      标记为未读
                    </Button>
                  ) : (
                    <Button
                      onClick={this.props.markNotificationAsReadById.bind(
                        this,
                        item.id
                      )}
                    >
                      标记为已读
                    </Button>
                  )
                }
              >
                <List.Item.Meta
                  title={<Badge dot={!item.hasRead}>{item.title}</Badge>}
                  description={item.desc}
                />
              </List.Item>
            )}
          />
        </Card>
      </Spin>
    );
  }
}

export default Notification;
