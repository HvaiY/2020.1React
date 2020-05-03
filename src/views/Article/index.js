import React, { Component } from "react";
import { Card, Table, Button, Tag, Modal, Typography, message } from "antd";

import moment from "moment/moment";
import { getArticles, deleteArticleById } from "../../requests";
import XLSX from "xlsx";
window.moment = moment;
const { Column, ColumnGroup } = Table;

const ButtonGroup = Button.Group;

const displayColumns = {
  id: "编号",
  title: "文章标题",
  author: "作者",
  amount: "阅读数量",
  createAt: "创建时间",
};

export default class Article extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: [
        // {
        //   key: "1",
        //   title: "胡彦斌",
        //   author: "胡彦斌",
        //   createAt: 312312312,
        //   amount: 123,
        // },
        // {
        //   key: "2",
        //   title: "胡彦猪",
        //   author: "胡彦猪",
        //   createAt: 312312312,
        //   amount: 1234,
        // },
      ],

      columns: [
        {
          title: "文章标题",
          dataIndex: "title",
          key: "title",
        },
        {
          title: "作者",
          dataIndex: "author",
          key: "author",
        },
        {
          title: "创建时间",
          dataIndex: "createAt",
          key: "createAt",
        },
        {
          title: "阅读量",
          dataIndex: "amount",
          key: "amount",
        },
      ],
      total: 0,
      isLoading: false,
      offset: 0,
      pageSize: 10,
      deleteArticleTitle: "",
      isShowArticleModal: false,
      deleteArticleConfirmLoading: false,
      deleteArticleId: null,
    };
  }

  createColumns = (columsKeys) => {
    const columns = columsKeys.map((item) => {
      if (item === "amount") {
        return {
          title: displayColumns[item],
          key: item,
          render: (text, record) => {
            const { amount } = record;
            return <Tag color={amount > 200 ? "red" : "green"}>{amount}</Tag>;
          },
        };
      }
      if (item === "createAt") {
        return {
          title: displayColumns[item],
          key: item,
          render: (text, record) => {
            const { createAt } = record;
            return moment(createAt).format("YYYY年MM月DD日 hh时mm分ss秒");
          },
        };
      }
      return {
        title: displayColumns[item],
        dataIndex: item,
        key: item,
      };
    });
    columns.push({
      title: "操作",
      dataIndex: "options",
      render: (text, record) => {
        return (
          <ButtonGroup>
            <Button type='primary' size='small'>
              编辑
            </Button>
            <Button
              type='danger'
              size='small'
              onClick={this.ShowArticleDeleted.bind(this, record)}>
              删除
            </Button>
          </ButtonGroup>
        );
      },
    });
    return columns;
  };

  onPageChange = (page, pageSize) => {
    this.setState(
      {
        offset: pageSize * (page - 1),
        limited: pageSize,
      },
      () => this.getData()
    );
  };

  onShowSizeChange = (current, size) => {
    this.setState(
      {
        offset: 0,
        limited: size,
      },
      () => this.getData()
    );
  };

  toExcel = () => {
    const data = [Object.keys(this.state.dataSource[0])];
    for (let i = 0; i < this.state.dataSource.length; i++) {
      data.push([
        this.state.dataSource[i].id,
        this.state.dataSource[i].title,
        this.state.dataSource[i].author,
        this.state.dataSource[i].amount,
        moment(this.state.dataSource[i].createAt).format(
          "YYYY年MM月DD日 HH:mm:ss"
        ),
      ]);
    }
    // 常规的操作是 后端提供一个地址，前端直接下载文件即可
    const ws = XLSX.utils.aoa_to_sheet(data);

    /* build new workbook */
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
    XLSX.writeFile(
      wb,
      `articles-${this.state.offset / this.state.limited + 1}-${moment().format(
        "YYYY-MM-DD hhmmss"
      )}.xlsx`
    );
  };

  // ArticleDeleted = (record) => {
  //   Modal.confirm({
  //     title: "删除数据？请谨慎操作",
  //     content: (
  //       <Typography>
  //         确定要删除<span style={{ color: "#F00" }}>{record.title}</span>
  //       </Typography>
  //     ),
  //     okText: "别墨迹，直接删除",
  //     cancelText: <span style={{ color: "#F00" }}>OMG 我我点错了</span>,
  //   });
  // };

  ShowArticleDeleted = (record) => {
    this.setState({
      isShowArticleModal: true,
      deleteArticleTitle: record.title,
      deleteArticleId: record.id,
    });
  };

  ArticleDeleted = () => {
    this.setState({
      deleteArticleConfirmLoading: true,
    });
    deleteArticleById(this.state.deleteArticleId)
      .then((resp) => {
        console.log(resp);
        message.success(resp.data.msg);
        // this.getData();
        this.setState(
          {
            offset: 0,
          },
          this.getData()
        );
      })
      .catch((err) => {
        this.setState({
          deleteArticleConfirmLoading: false,
          isShowArticleModal: false,
        });
      })
      .finally(() => {
        this.setState({
          deleteArticleConfirmLoading: false,
          isShowArticleModal: false,
        });
      });
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({
      isLoading: true,
    });
    getArticles(this.state.pageSize, this.state.limited)
      .then((resp) => {
        // console.log(resp.data.total);
        const respColumns = this.createColumns(Object.keys(resp.data.list[0]));
        const respList = Object.values(resp.data.list);
        // console.log(respColumns);
        this.setState({
          total: resp.data.total,
          dataSource: respList,
          columns: respColumns,
        });
      })
      .catch((err) => {
        //处理错误信息
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  hideDeleteModal = () => {
    this.setState({
      isShowArticleModal: false,
      deleteArticleTitle: "",
      deleteArticleConfireLoading: false,
    });
  };

  render() {
    return (
      <div>
        <Card
          title='文章列表'
          extra={<Button onClick={this.toExcel}>导出Excel</Button>}>
          <Table
            loading={this.state.isLoading}
            rowKey={(record) => record.id}
            dataSource={this.state.dataSource}
            columns={this.state.columns}
            pagination={{
              current: this.state.offset / this.state.limited + 1,
              total: this.state.total,
              hideOnSinglePage: true,
              showQuickJumper: true,
              showSizeChanger: true,
              onChange: this.onPageChange,
              onShowSizeChange: this.onShowSizeChange,
            }}
          />

          <Modal
            title='该操作不可逆，请谨慎'
            visible={this.state.isShowArticleModal}
            onCancel={this.hideDeleteModal}
            confirmLoading={this.state.deleteArticleConfirmLoading}
            onOk={this.ArticleDeleted}>
            <Typography>
              确定要删除
              <span style={{ color: "#f00" }}>
                {this.state.deleteArticleTitle}
              </span>
              吗？
            </Typography>
          </Modal>
        </Card>
      </div>
    );
  }
}
