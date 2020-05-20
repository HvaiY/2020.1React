import Loadable from "react-loadable";
// import Loadable from "./loadableCustomer"; // 自定义 loadable 即可得知实现原理，
import {
  Loading
} from "../components";
// import Dashboard from "./Dashboard";
// import Login from "./Login";
// import NotFound from "./NotFound";
// import Settings from "./Settings";
// import ArticleList from "./Article";
// import ArticleEdit from "./Article/Edit";

// 下面是懒加载组件使用
const Dashboard = Loadable({
  loader: () => import("./Dashboard"),
  loading: Loading,
});
const Login = Loadable({
  loader: () => import("./Login"),
  loading: Loading,
});
const NotFound = Loadable({
  loader: () => import("./NotFound"),
  loading: Loading,
});
const Settings = Loadable({
  loader: () => import("./Settings"),
  loading: Loading,
});
const ArticleList = Loadable({
  loader: () => import("./Article"),
  loading: Loading,
});
const ArticleEdit = Loadable({
  loader: () => import("./Article/Edit"),
  loading: Loading,
});
const Notification = Loadable({
  loader: () => import("./Notifications"),
  loading: Loading,
});
const NoAuth = Loadable({
  loader: () => import("./NoAuth"),
  loading: Loading,
});
const Profile = Loadable({
  loader: () => import("./Profile"),
  loading: Loading,
});
export {
  Dashboard,
  Login,
  NotFound,
  Settings,
  ArticleList,
  ArticleEdit,
  Notification,
  NoAuth,
  Profile
};