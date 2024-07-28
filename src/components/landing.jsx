import React from "react";

function Landing(){
 return <div className="h-[120vh] w-[100vw] mb-[100vh] grid grid-cols-4 grid-rows-5 justify-items-center justify-center gap-4 items-center px-20 pt-24">
 <div className="bg-white col-span-1 row-span-2 h-[100%] w-full flex justify-center items-center rounded-xl">
    <img src="images/squarePfp.jpeg" alt="image of software engineer Vaibhav Shokeen standing on a bridge" className="h-full w-full rounded-xl object-cover"/></div>
 <div className="bg-white col-span-3 row-span-2 h-[100%] w-full flex pl-4 items-center rounded-xl">
    <h1 className="poppins-bold text-4xl text-[#574B60] leading-relaxed">Hey there!<br/> I am <span className="text-gradient text-6xl">Vaibhav Shokeen</span>.</h1>
    </div>
    <div className="bg-white col-span-4 row-span-3 h-[100%] w-full flex  flex-col gap-3 px-4 py-8 rounded-xl">
        <h3 className="text-[#b9b9b9] poppins-semibold text-3xl pb-0 mb-0">About Me</h3>
        <p className="poppins-regular text-base text-[#574B60] mt-4">
            I am an aspiring <span className="poppins-semibold">Computational Physicist</span> currently enrolled in Ashoka University batch of 2026.<br/><br/> My past experiences have been in areas related to healthcare, air pollution, teaching, web development, and machine learning to name a few.
           <br/><br/> I also try to actively read in whatever free time I get, Dostoyevsky and Camus being my current favourites. I am part of the university team as 10-meter Pistol Shooter.
        </p>
    </div>
 </div>
}

export default Landing;