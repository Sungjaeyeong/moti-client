import { Switch, Route, useHistory } from 'react-router-dom';
import Chats from './pages/Chats';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Posts from './pages/Posts';
import SignUp from './pages/SignUp';

export const pathConst = {
  ROOT: '/',
  CHATS: '/chats',
  MYPAGE: '/mypage',
  LOGIN: '/login',
  SIGINUP: '/signup',
};

const routes = [
  {
    path: pathConst.ROOT,
    component: Posts,
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

export const renderRoutes = () => (
  <Switch>
    {routes.map((route, i) => {
      const { path, component } = route;
      const Component = component;

      return (
        <Route
          exact
          path={path}
          key={i}
          render={props => <Component {...props} />}
        />
      );
    })}
  </Switch>
);

export default routes;
