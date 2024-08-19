import React from "react";
import ProjectCard from "../assets/projectCard";
import Particles from "../../particles.jsx"

function Projects() {

return <div className="pt-20"><Particles addParticles={false}/> <div className="bg-slate-50 flex flex-col md:mt-28 mx-4 md:mx-4 rounded-xl py-10 mb-10 md:py-8 px-4 gap-6">
<h1 className="poppins-bold text-2xl md:text-4xl text-center text-[#7BA2B6]">Projects</h1>
<div className="grid grid-cols-1 md:grid-cols-3 w-full justify-items-center items-center gap-10">
<ProjectCard
  // link="https://example.com/project"
  link="/projects/diagnosis"
  image="/images/projectImages/diagnosisThumbnail.png"
  title="Rapid Diagnosis Tool"
  description="Created a software to perform automated urine based diagnosis"
/>
<ProjectCard
  // link="https://example.com/project"
  link="/projects/C&D_violation"
  image="/images/projectImages/PWD.jpg"
  title="C&D Violation Detection"
  description="A model to detect violations of construction and demolition norms"
/>
<ProjectCard
  // link="https://example.com/project"
  link="/projects/clusteringApp"
  image="/images/projectImages/cluster.png"
  title="Clustering App"
  description="Created an app to identify clusters of instances"
/>
<ProjectCard
  // link="https://example.com/project"
  link="/projects/smartsolutions"
  image="/images/projectImages/smarSolutions.png"
  title="Smart Solutions Website"
  description="Created website for a printing company"
/>
</div>
</div>
</div>
};

export default Projects;