import { Route, Routes } from "react-router-dom";
import routes from "./routes/routes";

function App() {
  return (
    <div>
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} key={route.id} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
