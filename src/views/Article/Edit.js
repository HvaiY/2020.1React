/** @format */

import React, { Component, createRef } from "react";
import { UserOutlined, FileMarkdownTwoTone } from "@ant-design/icons";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Card,
  DatePicker,
  message,
  Spin,
} from "antd";
import { getArticleById, saveArticle } from "../../requests";
import moment from "moment";
import E from "wangeditor";
import "./edit.less";

console.log("edit");
// console.log(DatePicker);
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};

const validateMessages = {
  required: "${label}是必填的!",
  types: {
    email: "${label}不是一个有效邮件地址!",
    number: "${label}不是数字!",
  },
  number: {
    range: "${label}必须在 ${min} - ${max} 之间",
  },
  string: {
    range: "${label}必须在 ${min} - ${max} 之间",
  },
};

export default class Edit extends Component {
  constructor() {
    super();
    this.editorRef = createRef();
    this.formRef = createRef();
    this.state = {
      isLoading: false,
    };
  }

  initEditor = () => {
    const currentEditor = this.editorRef.current;
    console.log(currentEditor);
    this.editor = new E(this.editorRef.current);
    this.editor.customConfig.onchange = (html) => {
      console.log(html);
      this.formRef.current.setFieldsValue({
        content: html,
      });
    };
    this.editor.create();
  };

  handleSubmit = (values) => {
    values.createAt = moment(values.createAt).valueOf();
    this.setState({ isLoading: true });
    saveArticle(this.props.match.params.id, values)
      .then((resp) => {
        if (resp.code === 200) {
          message.success("保存成功");
          this.props.history.push("/admin/article");
        }
      })
      .catch((err) => {
        message.err(err);
      })
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  componentDidMount() {
    this.initEditor();
    // console.log(this.props);
    this.setState({
      isLoading: true,
    });
    getArticleById(this.props.match.params.id)
      .then((resp) => {
        const { id, ...data } = resp.data;
        data.createAt = moment(data.createAt);
        this.formRef.current.setFieldsValue(data);
        this.editor.txt.html(data.content);
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  }

  render() {
    return (
      <Spin size="large" spinning={this.state.isLoading}>
        <Card
          title="编辑文章"
          extra={<Button onClick={this.props.history.goBack}>取消</Button>}
        >
          <Form
            {...layout}
            name="nest-messages"
            ref={this.formRef}
            onFinish={this.handleSubmit}
            validateMessages={validateMessages}
          >
            <Form.Item
              name={["title"]}
              label="标题"
              rules={[{ required: true }]}
            >
              <Input prefix={<FileMarkdownTwoTone />} placeholder="标题内容" />
            </Form.Item>
            <Form.Item
              name={["author"]}
              label="作者"
              rules={[{ min: 0, max: 20 }]}
            >
              <Input prefix={<UserOutlined />} placeholder="作者名称" />
            </Form.Item>
            <Form.Item
              name={["amount"]}
              label="阅读量"
              rules={[{ type: "number", min: 0, max: 99999999999 }]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label="发布时间"
              name="createAt"
              rules={[{ required: true, message: "请选择时间!" }]}
            >
              <DatePicker showTime placeholder="请选择时间" />
            </Form.Item>

            <Form.Item name={["content"]} label="文章内容">
              <div ref={this.editorRef} className="editor-style"></div>
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 22 }}>
              <Button type="primary" htmlType="submit">
                保存
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Spin>
    );
  }
}
