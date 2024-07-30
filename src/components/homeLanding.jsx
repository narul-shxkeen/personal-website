import React, { useState, useEffect } from "react";
import '../App.css';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Landing() {
  const roles = ['Developer', 'Machine Learner', 'Health Researcher'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isFalling, setIsFalling] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFalling(true);
      setTimeout(() => {
        setCurrentRoleIndex(prevIndex => (prevIndex + 1) % roles.length);
        setIsFalling(false);
      }, 1000); // Duration of the fall-back animation
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 justify-center items-center h-[100vh] w-[100vw]">
      <img className="absolute -z-10 object-cover h-[100vh] w-[100vw]" src="images/home2.jpg" alt="image of raindrops on a leaf with a blurred background" />
      <h1 className="text-7xl text-white poppins-bold z-10">Vaibhav Shokeen</h1>
      <p className="relative text-5xl text-[#b9b9b9] poppins-medium">
        I am a <span className="inline-block w-[450px]">
          <span className={`inline-block ${isFalling ? 'fall-back' : 'appear'}`}>{roles[currentRoleIndex]}</span>
        </span>
      </p>
      <div className="flex rounded-full nav absolute bottom-9">
      <div className="flex gap-4 items-center">
        <a href="mailto:shokeenvaibhav280@gmail.com" className="p-0 m-0">
        <div className="inline-block p-2 hover:text-white hover:bg-black rounded-full">
    <EmailIcon fontSize="large" className="mx-1 my-1 poppins-semibold"/>
  </div>
         </a><a href="https://github.com/narul-shxkeen">
  <div className="inline-block p-2 hover:text-white hover:bg-black rounded-full">
    <GitHubIcon fontSize="large" className="mx-1 my-1 poppins-semibold"/>
  </div>
</a>
        <a href="https://www.linkedin.com/in/vaibhav-shokeen-878275225/">
        <div className="inline-block p-2 hover:text-white hover:bg-black rounded-full">
    <LinkedInIcon fontSize="large" className="mx-1 my-1 poppins-semibold"/>
  </div>
        </a>
        </div>
      </div>
    </div>
  );
}

export default Landing;
