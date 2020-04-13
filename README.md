### `npm start`

## Redux 使用

- 引入 Redux 包 `npm i redux -S`
- 创建 reducers
  - 创建 reducer(是个方法) 对动作的实现和数据的初始化，
  - reducer 可以有多个，使用 redux 中的 combineReducers 合并导出
    最终给到 Store 使用
- 创建 store `createStore(创建的reducer)`方法执行后就是 store
  - 组件中直接将 store 以 props 的方式传下去至对应的组件对数据进行处理(组件中 store.dispatch 来执行 reducer，并且组件挂载时可以调用 store.subscribe()进行监听)
- 创建动作 action ，导出动作的定义，动作是一个方法以传入参数 ，

### 可以查看 react-principle.html js 了解原理

### react-redux

- `npm install --save react-redux`

#### 完成步骤

- 1、 创建 reducers
- 2、 合并 reducers
- 3、 createStore
- 4、 Provider store={store}
- 5、 connect(mapStateToProps,{...actionCreators})(你的组件)
- 6、 actionCreators
- 7、 修改 reducers

## 异步 action

- 1、由于 action 返回的是一个对象，为能让 actionCreator 异步返回一个对象，借助中间件 react-thunk `npm i redux-thunk -S`
- 2、store 中加入中间件 thunk
