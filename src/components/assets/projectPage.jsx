import React from "react";

function Projects(props) {
  // Function to render the SVG icon
  const renderIcon = (svgContent) => {
    if (!svgContent) return null;
    return (
      <div className="w-auto h-auto flex items-center justify-center">
        <div 
          className="w-full h-full"
          dangerouslySetInnerHTML={{ __html: svgContent }} 
        />
      </div>
    );
  };
  const paragraphs = props.text.split('\n');

  return (
    <div className="py-28">
      <div className="mx-6 rounded-xl px-6 py-20 grid grid-cols-1 md:grid-cols-5 bg-white gap-x-9 gap-y-12">
        <div className="flex flex-col items-start gap-6 col-span-1 md:col-span-3 row-span-2 w-auto justify-start">
          <h1 className="poppins-semibold text-3xl md:text-6xl text-center md:text-left">
            {props.title}
          </h1>
          <p className="poppins-light md:text-xl text-lg">{props.subtitle}</p>
          <hr className="border-1 border-black w-[100%] md:w-[109%] md:relative md:right-6 z-0"/>
        </div>
        <div className="col-span-1 md:col-span-2 flex bg-[#80a8bd] shadow-md md:z-20 shadow-stone-700 rounded-xl px-4 py-4 w-full md:w-2/5 hover:bg-gray-700 transition group duration-300 hover:text-white">
          {props.links && (
            <div className="flex flex-col w-full justify-start items-start">
              <h1 className="poppins-semibold text-lg md:text-xl col-span-1 row-span-2 text-center pl-2 underline underline-offset-4 group-hover:decoration-teal-400 transition duration-300">
                Links
              </h1>
              <div className="mt-3 flex flex-col gap-3 justify-between w-full">
                {props.links.map((link, index) => (
                  <div key={index} className="">
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:bg-[#80a8bd] hover:text-white transition duration-300 ease-in px-2 py-1 rounded-lg"
                    >
                      {link.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
       
        <div className="col-span-1 md:col-span-5 flex flex-col">
          {props.technologies && (
            <div className="flex flex-col gap-3 w-full justify-start items-start">
              <h1 className="poppins-semibold text-lg md:text-xl col-span-1 row-span-2 text-center">
                Frameworks Used
              </h1>
              <div className="flex flex-wrap justify-start w-full gap-6">
                {props.technologies.map((tech, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <a
                      href={tech.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center"
                    >
                      {renderIcon(tech.icon)}
                      <span className="text-sm poppins-light md:text-base mt-1">{tech.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="col-span-1 md:col-span-5">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="poppins-regular text-sm md:text-base mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
