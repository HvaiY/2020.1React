import React, { Component } from "react";
import { Artical, Home, Users, ArticalDetail, NotFound } from "./Views";
import { Route, NavLink as Link, Redirect, Switch } from "react-router-dom";
// NavLink 与Link 区别在于 NavLink给标签多加一个class =active

export default class App extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/Home'>首页</Link>
          </li>
          <li>
            <Link to='/Aritcal'>文章</Link>
          </li>
          <li>
            <Link to='/Users'>用户</Link>
          </li>
        </ul>
        <Switch>
          <Route component={Home} path='/Home'></Route>
          <Route component={Users} path='/Users'></Route>
          <Route component={Artical} path='/Aritcal' exact></Route>
          {/* <Route component={ArticalDetail} path='/artical/:id'></Route> */}
          <Route
            render={(props) => {
              return <ArticalDetail {...props} />;
            }}
            path='/artical/:id'></Route>
          <Route component={NotFound} path='/NotFound'></Route>
          {/* 默认跳转 引入 Redirect */}
          <Redirect to='/Home' from='/' exact></Redirect>
          <Redirect to='/NotFound'></Redirect>
          {/* 直接跳转的话好像新版本不需要 Switch组件包裹  */}
        </Switch>
      </div>
    );
  }
}
