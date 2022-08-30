import { renderRoutes } from "./routes";
import Header from "./components/Header";

function App() {
  const Body = renderRoutes();

  return (
    <div className="App">
      <Header username={"username"} />
      {Body}
    </div>
  );
}

export default App;
