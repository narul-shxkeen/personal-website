import React from "react";
import Landing from "./aboutLanding.jsx";
import Particles from "../../particles.jsx";

function Home(){
    return <><Particles addParticles={false}/>
    <Landing/>
    </>
}

export default Home;