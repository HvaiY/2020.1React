## 高阶组件

### 让 cra(create-react-app)支持@装饰器写法

1、不管你是需要配置什么，我们最好的方式是使用`react-app-rewired` 这个包来对 cra 创建的项目进行轻微的配置调整
2、安装好之后，在`package.json`里把`scripts`里面的`react-scripts`替换成`react-app-rewired`
3、在根目录下创建一个`config-overrides.js`

```
 module.exports = (config) => {
      //如果没有使用 customize-cra,就可以在这里对config 进行配置
    return config;

  };
```

4、当然想要配置更加方便，可以在安装 customize-cra,然后把 config-overrides.js 改成这样

```
//使用 customize-cra  npm install customize-cra --save-dev
//node.js
const { override, addDecoratorsLegacy } = require("customize-cra");

module.exports = override(
    addDecoratorsLegacy()
    );
```

5、[customize-cra ](https://www.npmjs.com/package/customize-cra#with-webpack)地址

### `npm start`
