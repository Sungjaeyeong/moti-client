import { renderRoutes } from './routes';
import Header from './components/Header';
import { useAuth } from './context/AuthContext';

function App() {
  const { user } = useAuth();
  const Body = renderRoutes();

  return (
    <div className='App'>
      <Header username={user?.name} />
      {Body}
    </div>
  );
}

export default App;
