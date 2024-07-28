import React from "react";
import "./index.css";
import Navbar from "./components/navbar.jsx";
import Landing from "./components/landing.jsx";
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App(){
 return <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Landing/>}/>
      </Routes>
      </Router>
}

export default App;