import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <>
      <div className="w-full h-screen bg-[#0a192f]">
        {/* Text Area. */}
        <div className="max-w-[1000px] mx-auto h-full flex justify-center flex-col ">
          <h3 className="text-pink-600">Hi, my name is</h3>
          <h2 className="text-7xl font-bold text-[#ccd6f6]">Ahon Moai</h2>
          <h3 className="text-[#8892b0] font-bold text-6xl mt-1">
            I'm a Full Stack Web Developer.
          </h3>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I’m a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive full-stack web applications.
          </p>
          <div>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
