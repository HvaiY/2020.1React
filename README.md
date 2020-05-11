### 重新开始配置 react-app

- 1.  `npm i react-app-rewired customize-cra -D`
  - 创建 config-overrides.js 定制化配置
- 2. 添加 less less-loader `npm i less less-loader -S`
- 3. 安装 `npm i antd -S`，`npm i babel-plugin-import -D`
  - 配置 babel-plugin-import
- 4. 高阶组件使用，配置装饰器模式 (customize-cra) overried 配置 addDecoratorsLegacy(),
  - 额外安装 `pm i @babel/plugin-proposal-decorators -D` 之后使用@高阶组件即可
- 5. 安装路由加上基本项目结构 `npm i react-router-dom -S`
  - 基本路由配置 设置默认/精准匹配找到不跳转到 404 /admin 后面找不到也精准匹配
  - 路由配置好之后 ，发现所有的地址的都加载好了，比较费资源，这时候需要懒加载
- 6. 懒加载 `npm i react-loadable -S`及使用
- 7. Frame 组件 Layout 基本使用
- 8. Tables 组件 及 mock 数据 ，请求数据 `npm i axios -D`（创建请求获取 mock 数据）
  - moment 时间格式化插件 下载 `npm i moment -S`
- 9. Table pagination 配置 执行分页
- 10. 导出 excel 插件 `npm i xlsx -S` 只能导出加载的数据，真实场景应该直接由后端返回文件直接下载
  - 简单编辑页面(antd form)
- 11. 富文本编辑器 [wangeditor](https://www.kancloud.cn/wangfupeng/wangeditor3/335769) 使用 `npm install wangeditor -S`
