import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import FireBase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";
import Mongo from "../assets/mongo.png";

const Skills = () => {
  return (
    <>
      <div className="w-full h-[700px] bg-[#0a192f] text-gray-300">
        <div className="ml-[250px]">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4 text-2xl">
            // These are the technologies I've worked with ~
          </p>
        </div>
        <div className="max-w-[1000px] mx-auto mt-[100px] ">
          <div className="py-4">
            <p className="text-2xl font-bold ">HTML</p>
            <button className="w-[95%] py-1 rounded-md bg-pink-800 font-mono font-bold text-[21px]">
              95%
            </button>
          </div>
          <div className="py-4">
            <p className="text-2xl font-bold ">CSS</p>
            <button className="w-[85%] py-1 rounded-md bg-pink-800 font-mono font-bold text-[21px]">
              85%
            </button>
          </div>
          <div className="py-4">
            <p className="text-2xl font-bold ">Javascript</p>
            <button className="w-[87%] py-1 rounded-md bg-pink-800 font-mono font-bold text-[21px]">
              87%
            </button>
          </div>
          <div className="py-4">
            <p className="text-2xl font-bold ">ReactJS</p>
            <button className="w-[75%] py-1 rounded-md bg-pink-800 font-mono font-bold text-[21px]">
              75%
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
