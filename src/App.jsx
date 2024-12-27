import LoggedRoutes from "./routes/logged";
import PublicRoutes from "./routes/public";

function App() {
  const storedUser = sessionStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;

  return user ? <LoggedRoutes /> : <PublicRoutes />;
}

export default App;
