import config from "../config";
import EmptyLayout from "../layout/EmptyLayout";
import HomePage from "../pages/Home";

const publicRoutes = [
  {
    path: config.routes.root,
    component: HomePage,
    layout: EmptyLayout,
    title: "Home Page",
  },
];

const privateRoutes = [
  // {
  //   path: config.routes.dashboard,
  //   component: HomePage,
  //   layout: EmptyLayout,
  //   title: "Title",
  //   roles: ["STAFF", "MANAGER"],
  // },
];

export { publicRoutes, privateRoutes };
