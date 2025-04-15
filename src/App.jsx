import Homepage from "./components/Homepage/Homepage.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "./components/SplashScreen";
import SignUp from "./components/SignUp/SignUp.jsx";
import Login from "./components/Login/Login.jsx";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/loading" element={<SplashScreen />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;