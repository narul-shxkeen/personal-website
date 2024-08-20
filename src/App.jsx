import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./index.css";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import About from "./components/about/about.jsx";
import Landing from "./components/home/homelanding.jsx";
import Projects from "./components/projects/projects.jsx";
import Resume from "./components/resume/resume.jsx";
import ClusteringApp from "./components/projects/myProjects/clusteringApp.jsx";
import Diagnosis from "./components/projects/myProjects/diagnosis.jsx";
import PWD from "./components/projects/myProjects/pwd.jsx";
import SmartSolutions from "./components/projects/myProjects/smartSolutions.jsx";
import Preloader from './preloader.jsx';
import Blog from './components/blog/blogPage.jsx';

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
           {/* Add the ParticleBackground component */}
          <div className="content">
            <Navbar />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/clusteringApp" element={<ClusteringApp />} />
              <Route path="/projects/diagnosis" element={<Diagnosis />} />
              <Route path="/projects/C&D_violation" element={<PWD />} />
              <Route path="/projects/smartsolutions" element={<SmartSolutions />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;