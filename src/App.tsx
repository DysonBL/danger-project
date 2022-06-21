import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Hero from "./Components/Hero/Hero";
import WhatsNew from './Components/WhatsNew/WhatsNew';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/whats" element={<WhatsNew/>} />



        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
