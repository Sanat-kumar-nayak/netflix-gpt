import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 p-1.5">
      <img src={IMG_CDN + posterPath} alt="" />
    </div>
  );
};

export default MovieCard;
