import React, { Component } from "react";
import { Card, Table, Button, Tag } from "antd";

import moment from "moment/moment";
import { getArticles } from "../../requests";
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
      render: () => {
        return (
          <ButtonGroup>
            <Button type='primary' size='small'>
              编辑
            </Button>
            <Button type='danger' size='small'>
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
        console.log(respColumns);
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
        </Card>
      </div>
    );
  }
}
