import React from "react";
import Entries from "./blog.jsx"

function Blog(){
return <div className=" flex flex-col pt-28 gap-10">
    <div>
    <h1 className="poppins-semibold text-2xl md:text-4xl text-center text-[#C7E5FF]">Blog Entries</h1>
    <p className="mt-4 poppins-medium text-lg sm:text-xl text-center px-2 text-[#F6F6F6]">Welcome to where I let out some of my thoughts.</p>
    </div>
    <hr className="border-dotted border-t-[10px] border-x-0 border-b-0 mx-[44vw] md:mx-[47.5vw] border-[#F6F6F6]"/>
    <div>
    <Entries />
    </div>
</div>
}

export default Blog;