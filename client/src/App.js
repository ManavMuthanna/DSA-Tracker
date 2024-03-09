import "./App.css";
import { Navigate, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/homepage/home";
import Signup from "./screens/signup/sign_up";
import Login from "./screens/login/login_screen";
import Team from "./screens/team/team_screen";

function App() {
  const isAuthenticated = () => {
    // Check if the token is present in local storage or any other authentication logic
    const token = localStorage.getItem("token");
    return token !== null;
  };

  const PrivateRoute = ({ element, path }) => {
    return isAuthenticated() ? (
      element
    ) : (
      <Navigate replace to="/" state={{ from: path }} />
    );
  };

  return (
    // <Home></Home>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={<PrivateRoute element={<Home />} path="/home" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/team"
          element={<PrivateRoute element={<Team />} path="/team" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
