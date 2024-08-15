import React from 'react';

const Resume = () => {
  return (<div className="py-28">
    <div className="bg-white h-auto w-[70vw] mx-auto rounded-xl p-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-[#574B60] mb-2">Vaibhav Shokeen</h1>
          <p className="text-[#80a8bd] text-xl">Software Engineer | Machine Learning Specialist | Consultant</p>
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#574B60] mb-4">Summary</h2>
          <p className="text-[#574B60]">
            Experienced software engineer with expertise in machine learning and consulting. 
            Passionate about delivering innovative solutions to the unattended problems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#574B60] mb-4">Skills</h2>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-medium text-[#80a8bd] mb-2">Software Engineering</h3>
              <ul className="list-disc list-inside text-[#574B60]">
                <li>Python, Java, JavaScript, React</li>
                <li>RESTful APIs, GraphQL</li>
                <li>Docker, Kubernetes</li>
                <li>CI/CD, Git</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium text-[#80a8bd] mb-2">Machine Learning</h3>
              <ul className="list-disc list-inside text-[#574B60]">
                <li>TensorFlow, PyTorch, scikit-learn</li>
                <li>Deep Learning, Neural Networks</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#574B60] mb-4">Experience</h2>
          <div className="mb-4">
            <h3 className="text-lg font-medium text-[#80a8bd]">Senior Software Engineer | TechCorp</h3>
            <p className="text-[#574B60] italic">2019 - Present</p>
            <ul className="list-disc list-inside text-[#574B60] mt-2">
              <li>Led development of machine learning-powered recommendation system</li>
              <li>Implemented scalable microservices architecture</li>
              <li>Provided technical consulting to enterprise clients</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-[#80a8bd]">Machine Learning Engineer | AI Innovations</h3>
            <p className="text-[#574B60] italic">2016 - 2019</p>
            <ul className="list-disc list-inside text-[#574B60] mt-2">
              <li>Developed and deployed computer vision models for autonomous vehicles</li>
              <li>Optimized machine learning pipelines for production environments</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-[#574B60] mb-4">Education</h2>
          <div>
            <h3 className="text-lg font-medium text-[#80a8bd]">BSc. (Hons) in Computer Science | Ashoka University</h3>
            <p className="text-[#574B60] italic">2022-2025</p>
          </div>
        </section>
      </div>
    </div>
    </div>
  );
};

export default Resume;