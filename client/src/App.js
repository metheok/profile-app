import React from "react";
import "./App.css";
import Signup from "./Components/Signup/signup";
import Login from "./Components/Login/login";
import useAuth from "./Hooks/useAuth";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

function App() {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return (
    <Router>
      {" "}
      <div className="App ">
        <Routes>
          <Route exact path="/" element={<div>home</div>}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
