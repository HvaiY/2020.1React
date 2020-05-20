import React, { Component } from "react";
import { Button } from "antd";
import { Route, Switch, Redirect } from "react-router-dom";
import { adminRoute } from "./routes";
import { connect } from "react-redux";

import Frame from "./components/Frame";

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

const mapState = (state) => ({
  isLogin: state.user.isLogin,
  role: state.user.role,
});
// @testHOC
@connect(mapState)
class App extends Component {
  render() {
    return this.props.isLogin ? (
      <Frame>
        <Switch>
          {adminRoute.map((route) => {
            return (
              <Route
                key={route.pathname}
                path={route.pathname}
                exact={route.exact}
                render={(routerProps) => {
                  return route.roles.includes(this.props.role) ? (
                    <route.component {...routerProps} />
                  ) : (
                    <Redirect to="/admin/noauth" />
                  );
                }}
              />
            );
          })}
          <Redirect to={adminRoute[0].pathname} from="/admin" exact />
          <Redirect to="/404" />
        </Switch>
      </Frame>
    ) : (
      // <div>
      //   {/* <div>这是公共部分</div> */}

      // </div>
      <Redirect to="/login" />
    );
  }
}

// export default testHOC(App);
export default App;
