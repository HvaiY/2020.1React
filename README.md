### antd 使用

[官方文档](https://ant.design/docs/react/use-with-create-react-app-cn)

[Antd 组件](https://ant.design/components/pagination-cn/)

- 1、 `npm i antd -S` 即可以使用 antd,但是无法全局使用
- 2、`npm i react-app-rewired customize-cra -D` 安装包使用自定义配置
- 3、配置

  - 修改 package.json

    ```

    /* package.json */
     "scripts": {
     "start": "react-scripts start",
        "start": "react-app-rewired start",
        "build": "react-scripts build",
        "build": "react-app-rewired build",
        "test": "react-scripts test",
        "test": "react-app-rewired test",
     }

    ```

  - 根目录创建 config-overrides.js ,antd 部分代码不支持加载效果 安装 `babel-plugin-import`以修复 需配置
  - 配置 config-overrieds

  ```
   const { override, fixBabelImports } = require("customize-cra");
   module.exports = function override(config, env) {
     // do stuff with the webpack config...
     return config;
   };
   module.exports = override(
     fixBabelImports("import", {
       libraryName: "antd",
       libraryDirectory: "es",
       style: "css",
     })
   );

  ```

- 自定义主题
  修改主题颜色需要用 less 全覆盖功能，那么需要安装 `npm i less less-loader -D`

- 配置 主题颜色为 #F00

```
 const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
fixBabelImports('import', {
  libraryName: 'antd',
  libraryDirectory: 'es',
  style: true,
}),
addLessLoader({
  javascriptEnabled: true,
  modifyVars: { '@primary-color': '#F00' },
}),
);
```
