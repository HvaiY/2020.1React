import {
  Dashboard,
  Login,
  NotFound,
  Settings,
  ArticleList,
  ArticleEdit,
  Notification,
  NoAuth
} from "../views";
import {
  DashboardOutlined,
  SettingOutlined,
  OrderedListOutlined,
} from '@ant-design/icons';

export const mainRoute = [{
    pathname: "/Login",
    component: Login,
    roles: ['001', '002', '003']
  },
  {
    pathname: "/404",
    component: NotFound,
    roles: ['001', '002', '003']
  },
];

export const adminRoute = [{
    pathname: "/admin/dashboard",
    component: Dashboard,
    title: "仪表盘",
    isNav: true,
    icon: DashboardOutlined,
    roles: ['001', '002', '003']
  },
  {
    pathname: "/admin/settings",
    component: Settings,
    title: "设置",
    isNav: true,
    icon: SettingOutlined,
    roles: ['001']
  },
  {
    pathname: "/admin/article",
    component: ArticleList,
    exact: true,
    title: "文章列表",
    isNav: true,
    icon: OrderedListOutlined,
    roles: ['002', '003']
  },
  {
    pathname: "/admin/article/edit/:id",
    component: ArticleEdit,
    title: "文章编辑",
    roles: ['002', '003']
  },
  {
    pathname: "/admin/notification",
    component: Notification,
    title: "通知中心",
    roles: ['001', '002', '003']
  },
  {
    pathname: "/admin/noauth",
    component: NoAuth,
    title: "未授权",
    roles: ['001', '002', '003']
  },
];