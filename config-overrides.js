// module.exports = (config) => {
//     //如果没有使用 customize-cra,就可以在这里对config 进行配置
//   return config;

// };

//使用 customize-cra  npm install customize-cra --save-dev
//node.js
const { override, addDecoratorsLegacy } = require("customize-cra");

module.exports = override(addDecoratorsLegacy());
