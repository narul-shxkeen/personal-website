import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Landing(){
 return <div className="h-auto w-[100vw] mb-20 flex flex-col md:grid md:grid-cols-4 md:grid-rows-5 md:justify-items-center justify-center gap-4 items-center pt-20 md:px-20 md:pt-24 px-6">
  {/* <div className="md:bg-white md:col-span-1 md:row-span-2 h-auto md:h-[100%] w-full flex justify-center items-center rounded-xl"> 
 <img src="images/eye.jpg" alt="image of software engineer Vaibhav Shokeen standing on a bridge" className="h-full w-full rounded-xl object-cover"/></div> 
  */}

 <div className="bg-white md:col-span-3 md:row-span-2 h-[100%] w-full flex md:py-0 pl-4 items-center rounded-xl">
    <h1 className="poppins-bold text-2xl md:text-4xl text-[#b9b9b9] leading-relaxed">Hey there!<br/> I am <br className="md:hidden"/><span className="text-4xl md:text-6xl text-[#80a8bd] poppins-bold">Vaibhav Shokeen</span></h1>
    </div>
  <div className="grid grid-cols-2 grid-rows-2 justify-items-center items-center bg-white col-span-1 row-span-2 gap-6 relative rounded-xl h-full w-full">
        <a href="mailto:shokeenvaibhav280@gmail.com" title="Mail Me" className="p-2 rounded-full m-0 hover:text-white hover:bg-black">
         <EmailIcon fontSize="large"/>
         </a>
         <a href="https://github.com/narul-shxkeen" title="Github" className="hover:text-white p-2 rounded-full hover:bg-black"><GitHubIcon fontSize="large"/></a>
        <a href="https://www.linkedin.com/in/vaibhav-shokeen-878275225/" title="LinkedIn" className="hover:text-white p-2 rounded-full hover:bg-black"><LinkedInIcon fontSize="large"/></a>
        <a href="https://www.goodreads.com/user/show/152177285-vaibhav-shokeen" title="Goodreads" className="group p-2 rounded-full hover:bg-black">
    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="45" height="45" viewBox="0 0 30 30" className="fill-current text-black group-hover:text-white">
        <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 14.873047 8 C 17.192047 8 18.337891 9.4667969 18.337891 9.4667969 L 18.337891 8.2167969 L 20.189453 8.2167969 L 20.189453 16.714844 C 20.189453 18.097844 20.403453 22 15.064453 22 C 9.8924531 22 10.236328 19.180906 10.236328 18.878906 L 12.148438 19.095703 C 12.408437 20.322703 13.452453 20.65625 15.064453 20.65625 C 18.365453 20.65625 18.169922 18.150328 18.169922 16.736328 C 18.169922 16.736328 17.096078 18.015625 14.955078 18.015625 C 12.814078 18.015625 9.8105469 16.922672 9.8105469 13.013672 C 9.8105469 9.3576719 12.554047 8 14.873047 8 z M 15.089844 9.3652344 C 12.925844 9.3652344 11.847656 10.997719 11.847656 13.011719 C 11.847656 15.025719 12.824844 16.658203 15.089844 16.658203 C 17.354844 16.658203 18.330078 15.025719 18.330078 13.011719 C 18.330078 10.997719 17.253844 9.3652344 15.089844 9.3652344 z"></path>
    </svg>
</a>
        </div>

    <div className="bg-white col-span-4 row-span-3 h-auto w-full flex  flex-col gap-3 px-4 py-8 rounded-xl">
        <h3 className="text-[#b9b9b9] poppins-semibold text-2xl md:text-4xl pb-0 mb-0">About Me</h3>
        <p className="poppins-regular text-base text-[#574B60] mt-4">   
        I am an aspiring <span className="poppins-semibold">Computational Physicist</span> currently enrolled in Ashoka University’s Class of 2025.
        <br/><br/>
My past experiences span healthcare, air pollution, and teaching, among other areas. My technical skills include web development, computer vision, machine learning, data analysis, and scientific communication. I am passionate about leveraging these skills to address real-world problems that can greatly benefit from recent technological advancements and a technical perspective.
<br/><br/>
I also try to actively read in whatever free time I get, with Dostoyevsky and Camus being my current favorites. Additionally, I am a member of the university’s 10-meter pistol shooting team.
           </p>
         
    </div>
 </div>
}

export default Landing;