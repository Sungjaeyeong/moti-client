import { Switch, Route, useHistory } from 'react-router-dom';
import Header from './components/Header';
import Chats from './pages/Chats';
import Login from './pages/Login';
import MyPage from './pages/MyPage';
import Posts from './pages/Posts';

function App() {
  const history = useHistory();

  return (
    <div className='App'>
      <Header username={'username'} />
      <Switch>
        (
        <>
          <Route exact path='/'>
            <Posts />
          </Route>
          <Route exact path='/chats'>
            <Chats />
          </Route>
          <Route exact path='/mypage'>
            <MyPage />
          </Route>
          <Route exact path='/login'>
            <Login />
          </Route>
        </>
        )
      </Switch>
    </div>
  );
}

export default App;
