import React from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div>
        <div className="grid-container">
      <div className="grid-item text-white flex items-center justify-center">Resturant Map</div>
      <div className="grid-item text-white flex items-center justify-center">Drawing App</div>
      <div className="grid-item text-white flex items-center justify-center">Book Finder</div>
      <div className="grid-item text-white flex items-center justify-center">Currency Convert</div>
      <div className="grid-item text-white flex items-center justify-center">Online Store</div>
      <div className="grid-item text-white flex items-center justify-center">Card Game</div>
    </div>
      <Link
        to="/home"
        className="absolute top-8 right-10 text-3xl p-2 hover:text-yellow-900 cursor-pointer"
      >
        X
      </Link>
      <div className="absolute bottom-10 right-10 text-xl">
        <p>{"<Projects/>"}</p>
      </div>
      <div className="absolute top-10 left-5 text-xl">
        <p>{"<Projects>"}</p>
      </div>
    </div>
  );
};

export default Projects;
