## 所有更改见分支

### `npm start`

- js 对象拷贝
  - `const obj=Object.assign({}, oldObj);` 进行浅拷贝，但是深拷贝呢？
  - lodash 可以实现深拷贝 `npm i lodash -S` ,[loadsh](https://www.lodashjs.com/)能做到深拷贝，但是性能不佳，
  - 所以 引入[immustable](https://immutable-js.github.io/immutable-js/) `npm install immutable -S` 高效的深拷贝，注意，后的对象或者数组 修改后是一个新的对象或者数组
- 案例 略 开始懒了（(#`O′)）
