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
import withSlideIn from "./transition.jsx";

const SlideInLanding = withSlideIn(Landing);
const SlideInAbout = withSlideIn(About);
const SlideInProjects = withSlideIn(Projects);
const SlideInClusteringApp = withSlideIn(ClusteringApp);
const SlideInDiagnosis = withSlideIn(Diagnosis);
const SlideInPWD = withSlideIn(PWD);
const SlideInSmartSolutions = withSlideIn(SmartSolutions);
const SlideInResume = withSlideIn(Resume);
const SlideInBlog = withSlideIn(Blog);

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
            <Route path="/" element={<SlideInLanding />} />
              <Route path="/about" element={<SlideInAbout />} />
              <Route path="/projects" element={<SlideInProjects />} />
              <Route path="/projects/clusteringApp" element={<SlideInClusteringApp />} />
              <Route path="/projects/diagnosis" element={<SlideInDiagnosis />} />
              <Route path="/projects/C&D_violation" element={<SlideInPWD />} />
              <Route path="/projects/smartsolutions" element={<SlideInSmartSolutions />} />
              <Route path="/resume" element={<SlideInResume />} />
              <Route path="/blog" element={<SlideInBlog />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;