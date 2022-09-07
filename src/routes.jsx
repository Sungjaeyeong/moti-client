import { Switch, Route, useHistory } from "react-router-dom";
import Chats from "./pages/Chats";
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

export const pathConst = {
  ROOT: "/",
  POST: "/post",
  CREATE_POST: "/createPost",
  EDIT_POST: "/editPost",
  CHATS: "/chats",
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
  },
  {
    path: pathConst.EDIT_POST,
    component: EditPost,
  },
  {
    path: pathConst.LOGIN,
    component: Login,
  },
  {
    path: pathConst.CHATS,
    component: Chats,
  },
  {
    path: pathConst.MYPAGE,
    component: MyPage,
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

      return <Route exact path={path} key={i} render={() => <Component {...props} />} />;
    })}
  </Switch>
);

export default routes;
