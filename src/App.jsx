import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import About from "./components/about/about.jsx";
import Landing from "./components/homeLanding.jsx";
import Projects from "./components/projects/projects.jsx";
import ClusteringApp from "./components/projects/myProjects/clusteringApp.jsx";
import Diagnosis from "./components/projects/myProjects/diagnosis.jsx";
import Preloader from './preloader.jsx';
import Blog from './components/blog/blogPage.jsx';
import ParticleBackground from './particles.jsx'; // Import the new component

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <ParticleBackground id="particles"/> {/* Add the ParticleBackground component */}
          <div className="content">
            <Navbar />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/clusteringApp" element={<ClusteringApp />} />
              <Route path="/projects/diagnosis" element={<Diagnosis />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;