//Layout
import HeaderOnly from "../components/Layout/HeaderOnly";

//Page
import Home from "./../pages/Home/index";
import Following from "./../pages/Following/index";
import Profile from "./../pages/Profile/index";
import Upload from "./../pages/Upload";
import Search from "../pages/Search";
import { Fragment } from "react";

//Public routes
export const publicRoutes = [
  { path: "/home", component: Home },
  { path: "/following", component: Following },
  { path: "/profile", component: Profile },
  { path: "/upload", component: Upload, layout: HeaderOnly },
  { path: "/search", component: Search, layout: Fragment },
];

export const privateRoutes = [];
