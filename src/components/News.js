import React from "react";
import Alt from "./Alt.png";
export default function News(props) {
  return (
    <div
      className={` lg:h-[38%] m-[2%] flex items-center flex-col lg:w-[19%] shadow-sm shadow-gray-900 rounded-md h-[50vh] w-[90%] md:w-[29%] md:h-[40vh] sm:w-[45%] sm:h-[40vh] ${
        props.darkMode ? "bg-gray-800 text-gray-400" : "bg-blue-300 text-white"
      }`}
    >
      <div className="h-[45%] mt-[5%] w-[90%] ">
        <img
          src={props.url ? props.url : Alt}
          alt="/"
          className="h-[100%] w-[100%]"
        ></img>
        <div className="h-[75%] mt-[5%] w-[100%]  ">
          {props.description
            ? props.description?.slice(0, 120) ?? ""
            : "Click on the more button to read this news"}
          ....
        </div>
        <button
          className={`h-[20%] w-[25%]  underline rounded-sm ml-[75%]  shadow-sm  text-sm flex justify-center items-center ${
            props.darkMode ? "shadow-gray-900" : ""
          }`}
        >
          <a
            href={props.link}
            className="h-[100%] w-[100%]"
            rel="noreferrer"
            target="_blank"
          >
            More
          </a>
        </button>
      </div>
    </div>
  );
}
