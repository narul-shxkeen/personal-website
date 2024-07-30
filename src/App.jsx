import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./index.css";
import Navbar from "./components/navbar.jsx";
import About from "./components/about.jsx";
import Landing from "./components/homeLanding.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedRoutes />
    </Router>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="slide" timeout={3000}>
        <Routes location={location}>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;
