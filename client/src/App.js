import React from "react";
import "./App.css";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Dashboard from "./Components/Dashboard/Dashboard";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./Contexts/AuthContext";

function App() {
  return (
    <Router>
      {" "}
      <div className="App ">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
const appComponent = () => {
  return <AuthProvider children={<App />}></AuthProvider>;
};
export default appComponent;
