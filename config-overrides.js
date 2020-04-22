/*
 *@file config-overrides.js
 *@author
 *基于customize和react-app-rewired的定制化配置文件
 */

//引入一些相关的方法
const {
  override,
  addLessLoader,
  fixBabelImports,
  addDecoratorsLegacy,
} = require("customize-cra");
const modifyVars = require("./lessVars");
module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: "./lessVars.js", //直接导入也是可以的 const modifyVars = require("./lessVars");
  }),
  addDecoratorsLegacy(),
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true,
  })
);
