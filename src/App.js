import React, { Component } from "react";
import { Button } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";
import { adminRouter } from "./routes";

// //高阶组件 ，组件为参数的话，参数首字母必须大写
// const testHOC = (WrappedComponent) => {
//   return class HOCComponent extends Component {
//     render() {
//       return (
//         <>
//           <WrappedComponent />
//           <div> 这是高阶组件的内容</div>
//         </>
//       );
//     }
//   };
// };

// @testHOC
class App extends Component {
  render() {
    return (
      <div>
        <div>这是公共部分</div>
        <Switch>
          {adminRouter.map((route) => {
            return (
              <Route
                key={route.pathname}
                path={route.pathname}
                exact={route.exact}
                render={(routerProps) => {
                  return <route.component {...routerProps} />;
                }}
              />
            );
          })}
          <Redirect to={adminRouter[0].pathname} from='/admin' exact />
          <Redirect to='/404' />
        </Switch>
      </div>
    );
  }
}

// export default testHOC(App);
export default App;
