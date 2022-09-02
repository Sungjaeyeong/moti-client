import { Switch, Route, useHistory } from "react-router-dom";
import Chats from "./pages/Chats";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";
import Posts from "./pages/post/Posts";
import Post from "./pages/post/Post";
import CreatePost from "./pages/post/CreatePost";
import EditPost from "./pages/post/EditPost";
import SignUp from "./pages/SignUp";

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
  },
  {
    path: pathConst.EditPost,
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
