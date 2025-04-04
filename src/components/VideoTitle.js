import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-56 px-24 absolute bg-gradient-to-r from-black w-screen text-white aspect-video ">
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">
          <FontAwesomeIcon icon={faPlay} beat />
          <span> play</span>
        </button>
        <button className="bg-gray-500 text-white p-4 px-10 text-xl bg-opacity-70 rounded-lg ml-3">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
