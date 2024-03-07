import "./App.css";
import {
  BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './screens/homepage/home';
import Signup from "./screens/signup/sign_up";
import Login from "./screens/login/login_screen";

function App() {
  return (
    // <Home></Home>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
