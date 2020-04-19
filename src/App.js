import React, { Component } from "react";
//单个使用，全局配置主题还需要调整 安装 react-app-rewired  customize-cra
// import { Button } from "antd";
// import "antd/dist/antd.css";
import { Button, Spin, Pagination } from "antd";
export default class App extends Component {
  render() {
    return (
      <div>
        <Button loading type='primary'>
          测试下
        </Button>
        <Spin>
          这里利用了 less-loader 的 modifyVars
          来进行主题配置，变量和其他配置方式可以参考 配置主题 文档。修改后重启
          yarn start，如果看到一个绿色的按钮就说明配置成功了。 antd
          内建了深色主题和紧凑主题，你可以参照 使用暗色主题和紧凑主题 进行接入。
          同样，你可以使用 craco 和 craco-antd 来自定义 create-react-app 的
          webpack 配置，类似于 customize-cra。 注意：建议使用最新版本的
          less，或不低于 3.0.1。
        </Spin>

        <Pagination defaultCurrent={1} total={50} />
      </div>
    );
  }
}
