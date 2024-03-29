import React, { Fragment } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import Chats from "./pages/chat/Chats";
import CreateChat from "./pages/chat/CreateChat";
import Chat from "./pages/chat/Chat";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Posts from "./pages/post/Posts";
import Post from "./pages/post/Post";
import CreatePost from "./pages/post/CreatePost";
import EditPost from "./pages/post/EditPost";
import SignUp from "./pages/SignUp";
import TeamList from "./pages/team/TeamList";
import Team from "./pages/team/Team";
import CreateTeam from "./pages/team/CreateTeam";
import AuthGuard from "./components/AuthGuard";

export const pathConst = {
  ROOT: "/",
  POST: "/post",
  CREATE_POST: "/createPost",
  EDIT_POST: "/editPost",
  CHATS: "/chats",
  CREATE_CHAT: "/createChat",
  CHAT: "/chat",
  MYPAGE: "/mypage",
  LOGIN: "/login",
  SIGINUP: "/signup",
  TEAM_LIST: "/teamList",
  TEAM: "team",
  CREATE_TEAM: "/createTeam",
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
    path: pathConst.CREATE_POST,
    component: CreatePost,
    guard: AuthGuard,
  },
  {
    path: pathConst.EDIT_POST,
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
    path: pathConst.CREATE_CHAT,
    component: CreateChat,
  },
  {
    path: pathConst.CHAT,
    component: Chat,
  },
  {
    path: pathConst.CREATE_TEAM,
    component: CreateTeam,
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
  {
    path: pathConst.TEAM_LIST,
    component: TeamList,
  },
  {
    path: pathConst.TEAM,
    component: Team,
  },
  {
    path: pathConst.CREATE_TEAM,
    component: CreateTeam,
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
