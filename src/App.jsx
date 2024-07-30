import React from "react";
import "./index.css";
import Navbar from "./components/navbar.jsx";
import About from "./components/about.jsx";
import Landing from "./components/homeLanding.jsx"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


function App(){
 return <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/about" element={<About/>}/>
      </Routes>
      </Router>
}

export default App;