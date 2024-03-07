import React from "react";
import pic from "../assets/projects/workImg.jpeg";
const work = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className="max-w-[1000px] mx-auto pt-[165px]">
          <div className="">
            <h3 className="  text-4xl font-bold inline border-b-4 border-pink-600">
              Projects
            </h3>
            <p className="py-4 text-2xl">Check out my recent projects ~</p>
          </div>
        </div>
        <div className="flex flex-row mt-6">
          <img
            src={pic}
            alt="projects"
            name="project"
            className="h-[280px] rounded-[21px] mx-auto"
          ></img>

          <img
            src={pic}
            alt="projects"
            name="project"
            className="h-[280px] rounded-[21px] mx-auto"
          ></img>
          <img
            src={pic}
            alt="projects"
            name="project"
            className="h-[280px] rounded-[21px] mx-auto"
          ></img>
        </div>
      </div>
    </>
  );
};

export default work;
