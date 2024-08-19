import React from 'react';
import Particles from '../../particles';

const Resume = () => {
  return (
    <div className="py-28">
      <Particles addParticles={false}/>
      <div className="bg-white h-auto w-[70vw] mx-auto rounded-xl p-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-[#574B60] mb-2">Vaibhav Shokeen</h1>
            <p className="text-[#80a8bd] text-xl">Software Engineer | Machine Learning Specialist | Consultant</p>
          </header>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#574B60] mb-4">Summary</h2>
            <p className="text-[#574B60]">
              21-year-old student pursuing B.Sc (Hons) in Computer Science with a minor in Physics at Ashoka University. 
              Passionate about machine learning, software development, and delivering innovative solutions in healthcare and other sectors. 
              Experienced in AI development, data analysis, and web development, with a proven track record of impactful projects.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#574B60] mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-medium text-[#80a8bd] mb-2">Technical Proficiency</h3>
                <ul className="list-disc list-inside text-[#574B60]">
                  <li>Web Development, JavaScript, C++, Python</li>
                  <li>Machine Learning, Software Development</li>
                  <li>Data Analysis, AI Model Development</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#80a8bd] mb-2">Project Management</h3>
                <ul className="list-disc list-inside text-[#574B60]">
                  <li>Strategic Planning</li>
                  <li>Stakeholder Engagement</li>
                  <li>Collaboration and Team Leadership</li>
                </ul>
              </div>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#574B60] mb-4">Research Projects</h2>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-[#80a8bd]">Diagnostic of Schistosomiases Infection in Urine</h3>
              <p className="text-[#574B60] italic">Jan 2024 - Present</p>
              <ul className="list-disc list-inside text-[#574B60] mt-2">
                <li>Collaborated with Stanford PhDs to develop an AI model using Yolo, reducing diagnostic costs by 97.86%.</li>
                <li>Implemented a system with 95%+ accuracy, significant improvement over existing methods.</li>
                <li>Received a $10,000 research grant to conduct a pilot project in Senegal, Africa.</li>
              </ul>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#574B60] mb-4">Experience</h2>
            <div className="mb-4">
              <h3 className="text-lg font-medium text-[#80a8bd]">Data and Analytics Intern | The Convergence Foundation (A-PAG)</h3>
              <p className="text-[#574B60] italic">Jul 2024 - Aug 2024</p>
              <ul className="list-disc list-inside text-[#574B60] mt-2">
                <li>Developed AI models for air pollution reduction strategy in Delhi, aimed to reduce pollution by 27% in one year.</li>
                <li>Collaborated with municipal corporations to establish waste collection centers across the city.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-medium text-[#80a8bd]">Research Intern | Koita Centre for Digital Health, IIT Bombay</h3>
              <p className="text-[#574B60] italic">Jun 2024 - Present</p>
              <ul className="list-disc list-inside text-[#574B60] mt-2">
                <li>Analyzed ICU medical records to develop a prediction model, increasing accuracy by 30%.</li>
                <li>Developed AI models to predict patient mortality and length of stay in ICUs with ~70% accuracy.</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-medium text-[#80a8bd]">Teaching Assistant | Lodha Genius Programme</h3>
              <p className="text-[#574B60] italic">May 2023 - Jun 2024</p>
              <ul className="list-disc list-inside text-[#574B60] mt-2">
                <li>Assisted with chemistry lectures for a course by Stanford Professor Manu Prakash.</li>
                <li>Led sessions on microscopy, chemistry, and physics for over 200 students.</li>
              </ul>
            </div>
          </section>

          

          <section>
            <h2 className="text-2xl font-semibold text-[#574B60] mb-4">Education</h2>
            <div>
              <h3 className="text-lg font-medium text-[#80a8bd]">B.Sc (Hons) in Computer Science, Minor in Physics | Ashoka University</h3>
              <p className="text-[#574B60] italic">2022 - 2025</p>
              <p className="text-[#574B60]">CGPA: 3.52/4</p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-[#574B60] mb-4">Awards and Accomplishments</h2>
            <div>
              <h3 className="text-lg font-medium text-[#80a8bd]">Dean's List | Ashoka University</h3>
              <p className="text-[#574B60] italic">Monsoon 2022 and Monsoon 2024</p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-[#80a8bd]">SAT | College Board</h3>
              <p className="text-[#574B60] italic">Score: 1450/1600</p>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-[#80a8bd]">Shooting: 10M Pistol</h3>
              <ul className="list-disc list-inside text-[#574B60]">
                <li>Part of the college shooting team, represented at the All India University Shooting Competition.</li>
                <li>Won 3+ gold medals in inter-university and open tournaments.</li>
              </ul>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-[#574B60] mb-4">Volunteer Experience</h2>
            <div>
              <h3 className="text-lg font-medium text-[#80a8bd]">Volunteer | Ashoka Alumni Relations Office</h3>
              <p className="text-[#574B60] italic">Mar 2023 - Apr 2023</p>
              <ul className="list-disc list-inside text-[#574B60]">
                <li>Volunteered in a fundraising campaign for the financial aid program, raising 70K+ in two weeks.</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-[#80a8bd]">Volunteer | Royal Society of Chemistry</h3>
              <p className="text-[#574B60] italic">Jan 2023</p>
              <ul className="list-disc list-inside text-[#574B60]">
                <li>Assisted in organizing the Yusuf Hamied Chemistry Camp, providing hands-on lab experience to 64 students.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
