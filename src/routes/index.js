import {
  Dashboard,
  Login,
  NotFound,
  Settings,
  ArticleList,
  ArticleEdit,
  Notification
} from "../views";
import {
  DashboardOutlined,
  SettingOutlined,
  OrderedListOutlined,
} from '@ant-design/icons';

export const mainRoute = [{
    pathname: "/Login",
    component: Login,
  },
  {
    pathname: "/404",
    component: NotFound,
  },
];

export const adminRoute = [{
    pathname: "/admin/dashboard",
    component: Dashboard,
    title: "仪表盘",
    isNav: true,
    icon: DashboardOutlined
  },
  {
    pathname: "/admin/settings",
    component: Settings,
    title: "设置",
    isNav: true,
    icon: SettingOutlined
  },
  {
    pathname: "/admin/article",
    component: ArticleList,
    exact: true,
    title: "文章列表",
    isNav: true,
    icon: OrderedListOutlined
  },
  {
    pathname: "/admin/article/edit/:id",
    component: ArticleEdit,
    title: "文章编辑",
  },
  {
    pathname: "/admin/notification",
    component: Notification,
    title: "通知中心",
  },
];