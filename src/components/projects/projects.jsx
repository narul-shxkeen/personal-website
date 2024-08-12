import React from "react";
import ProjectCard from "../assets/projectCard";

function Projects() {

return <div className="pt-20"> <div className="bg-slate-50 flex flex-col md:mt-28 mx-4 md:mx-4 rounded-xl py-4 md:py-8 px-4 gap-6">
<h1 className="poppins-semibold text-2xl md:text-4xl text-center">Projects</h1>
<div className="grid grid-cols-1 md:grid-cols-3">
<ProjectCard
  // link="https://example.com/project"
  link="/projects/clusteringApp"
  image="/images/projectImages/cluster.png"
  title="Clustering App"
  description="Created an app to identify clusters of instances"
/>
</div>
</div>
</div>
};

export default Projects;