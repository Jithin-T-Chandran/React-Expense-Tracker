import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import SignUp from "./Components/Forms/SignUp";
import Login from "./Components/Forms/Login";

// import Dashboard from "./Components/Pages/Dashboard";
// import About from "./Components/Pages/About";
// import Home from "./Components/Pages/Home";
// import ContactUs from "./Components/Forms/ContactUs";
function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} /> 
      {/* <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/contactus" element={<ContactUs/>} /> */}
    </Routes>
  </Router>
  );
}

export default App;
