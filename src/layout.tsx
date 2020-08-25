import { homePage } from "./common/loadableModule";

export const publicRoutes = [
  {
    component: homePage,
    exact: true,
    path: "/",
  },
];
