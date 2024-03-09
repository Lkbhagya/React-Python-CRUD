import React, { } from "react";
import "./App.css";

import Home from "./components/Home";
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Adduser from "./components/Adduser";
import Edit from "./components/Edit";


function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Adduser" element={<Adduser/>}/> 
            <Route exact path="/Edit/:id" element={<Edit/>}/>    
          </Routes>
        </Router>
    </div>
  );
}

export default App;
