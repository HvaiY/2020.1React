import React, { Component, createRef } from "react";
import { Card, Row, Col } from "antd";
import echarts from "echarts";

import { getArticleAmount } from "../../requests";
import "./dashboard.less";

export default class DashBoard extends Component {
  constructor() {
    // console.log(echarts);
    super();
    this.articleChart = createRef();
  }

  initChart = () => {
    const articleChartInstance = echarts.init(this.articleChart.current);
    getArticleAmount().then((resp) => {
      console.log(resp);
      const option = {
        xAxis: {
          type: "category",
          data: resp.data.amount.map((t) => {
            return t.weekday;
          }),
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: resp.data.amount.map((t) => {
              return t.mount;
            }),
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(220, 220, 220, 0.8)",
            },
          },
        ],
      };

      articleChartInstance.setOption(option);
    });
  };

  componentDidMount() {
    this.initChart();
  }

  render() {
    return (
      <>
        <Card title="概况" bordered={false}>
          <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div
                className="col-gutter-box"
                style={{ backgroundColor: "#FF69B4" }}
              >
                col-6
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div
                className="col-gutter-box"
                style={{ backgroundColor: "#1E90FF" }}
              >
                col-6
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div
                className="col-gutter-box"
                style={{ backgroundColor: "#FFF8DC" }}
              >
                col-6
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
              <div
                className="col-gutter-box"
                style={{ backgroundColor: "	#FFD700" }}
              >
                col-6
              </div>
            </Col>
          </Row>
        </Card>
        <Card title="最近浏览量">
          <div ref={this.articleChart} style={{ height: "400px" }}></div>
        </Card>
      </>
    );
  }
}
