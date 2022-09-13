import React, { Fragment } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Chats from "./pages/Chats";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Posts from "./pages/post/Posts";
import Post from "./pages/post/Post";
import CreatePost from "./pages/post/CreatePost";
import EditPost from "./pages/post/EditPost";
import SignUp from "./pages/SignUp";
import AuthGuard from "./components/AuthGuard";

export const pathConst = {
  ROOT: "/",
  POST: "/post",
  CreatePost: "/createPost",
  EditPost: "/editPost",
  CHATS: "/chats",
  MYPAGE: "/mypage",
  LOGIN: "/login",
  SIGINUP: "/signup",
};

const routes = [
  {
    path: pathConst.ROOT,
    component: Posts,
  },
  {
    path: pathConst.POST,
    component: Post,
  },
  {
    path: pathConst.CreatePost,
    component: CreatePost,
    guard: AuthGuard,
  },
  {
    path: pathConst.EditPost,
    component: EditPost,
    guard: AuthGuard,
  },
  {
    path: pathConst.LOGIN,
    component: Login,
  },
  {
    path: pathConst.CHATS,
    component: Chats,
    guard: AuthGuard,
  },
  {
    path: pathConst.MYPAGE,
    component: MyPage,
    guard: AuthGuard,
  },
  {
    path: pathConst.SIGINUP,
    component: SignUp,
  },
];

export const renderRoutes = props => (
  <Switch>
    {routes.map((route, i) => {
      const { path, component } = route;
      const Component = component;
      const Guard = route.guard || Fragment;

      return (
        <Route
          exact
          path={path}
          key={i}
          render={() => (
            <Guard>
              <Component {...props} />
            </Guard>
          )}
        />
      );
    })}
  </Switch>
);

export default routes;
