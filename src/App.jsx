import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import "./index.css";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import About from "./components/about.jsx";
import Landing from "./components/homeLanding.jsx";
// import Projects from "./components/projects.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<About />} />
          </Routes>
    </Router>
  );
}

export default App;