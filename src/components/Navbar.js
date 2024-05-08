import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [drop, setDrop] = useState(false);
  function toggle() {
    setDrop((x) => !x);
    if (drop1 === true) {
      setDrop1((x) => !x);
    }
  }
  const [drop1, setDrop1] = useState(false);
  function toggle2() {
    setDrop1((x) => !x);
    if (drop === true) {
      setDrop((x) => !x);
    }
  }
  const styles = {
    fontFamily: "'Balsamiq Sans', cursive",
  };

  return (
    <div
      className={`lg:h-[9%] h-[8vh] sm:h-[7vh] md:h-[8vh] w-[100%] flex items-center shadow-sm shadow-black ${
        props.darkMode ? "bg-slate-800" : "bg-blue-500"
      }`}
    >
      <div className="h-[70%]   flex items-center w-[28%] sm:w-[15%] md:w-[12%] lg:w-[18%] rounded-md ">
        <div
          style={styles}
          className={`lg:text-2xl  ml-[2%] w-[100%] ${
            props.darkMode ? "text-gray-300" : "text-white"
          }  `}
        >
          Nasty News
        </div>
      </div>
      <div className=" h-[30%] w-[20%]  sm:w-[9%]  lg:ml-0 ml-[2%] lg:text-base text-sm lg:w-[6%]   ">
        <button
          onClick={toggle}
          className={`font-md flex hover:    ${
            props.darkMode ? "text-gray-500" : "text-white"
          } `}
        >
          Category <div className="text-[60%] mt-[2%]">&#9660;</div>
        </button>
        {drop && (
          <div className="h-full w-[90%]  text-gray-500 flex space-x-[10%] items-center">
            <button
              onClick={props.click4}
              className={`hover:text-white    w-[90%]      bg-opacity-50`}
              to="//Science"
            >
              Science
            </button>
            <button
              onClick={props.click3}
              className={`hover:text-white    w-[90%]      bg-opacity-50`}
              to="Health"
            >
              Health
            </button>
            <button
              onClick={props.click2}
              className={`hover:text-white    w-[90%]      bg-opacity-50`}
              to="Business"
            >
              Business
            </button>
            <button
              onClick={props.click1}
              className={`hover:text-white    w-[90%]      bg-opacity-50`}
              to="Sports"
            >
              Sports
            </button>
          </div>
        )}
      </div>
      <div className=" h-[30%] w-[17%] ml-[3%] lg:ml-[4%] lg:w-[10%]   lg:text-base text-sm   ">
        <button
          onClick={toggle2}
          className={`font-md flex hover:    ${
            props.darkMode ? "text-gray-500" : "text-white"
          } `}
        >
          Country <div className="text-[60%] mt-[2%]">&#9660;</div>
        </button>
        {drop1 && (
          <div className=" w-[90%]  text-gray-500 flex space-x-[3%] items-center">
            <Link
              className={`hover:text-white    w-[90%]      bg-opacity-50`}
              to="Nasty-News"
            >
              India
            </Link>
            <Link
              className={`hover:text-white    w-[90%]      bg-opacity-50`}
              to="USA"
            >
              USA
            </Link>
            <Link
              className={`hover:text-white    w-[90%]      bg-opacity-50`}
              to="Canada"
            >
              Canada
            </Link>

            <Link
              className={`hover:text-white    w-[90%]      bg-opacity-50`}
              to="UnitedKingdom"
            >
              UK
            </Link>
          </div>
        )}
      </div>
      <div className=" lg:text-base  text-white md:ml-[42%] md:w-[16%] sm:w-[20%] flex flex-col justify-center items-center w-[25%%] ml-[10%] sm:ml-[37%] lg:w-[15%]  lg:ml-[54%] text-xs  ">
        {props.darkMode ? "Dark Mode" : "Light Mode"}

        <label className="switch">
          <input type="checkbox" onClick={() => props.changeMode()} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}
