import React,{useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import "./index.css";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import About from "./components/about.jsx";
import Landing from "./components/homeLanding.jsx";
import Projects from "./components/projects.jsx";
import Preloader from './preloader.jsx';
import Blog from './components/blog/blog.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust this time as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      <Router>
      <Navbar />
      <Routes location={location}>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
    </Router>
    </>
  );
}

export default App;