import React, { useState } from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  const [showPage, setShowPage] = useState(true);

  const handleClosePage = () => {
    setShowPage(false);
  };

  const Grid = () => {
    const colors = [
      "#C49F73",
      "#B88E6E",
      "#8C593D",
      "#563829",
      "#DDDDDD",
      "#C49F73",
      "#B88E6E",
      "#8C593D",
      "#DDDDDD",
      "#DDDDDD",
      "#C49F73",
      "#B88E6E",
      "#DDDDDD",
      "#DDDDDD",
      "#DDDDDD",
      "#C49F73",
      "#B88E6E",
      "#DDDDDD",
      "#DDDDDD",
      "#DDDDDD",
      "#C49F73",
      "#B88E6E",
      "#DDDDDD",
      "#DDDDDD",
      "#DDDDDD",
    ];

    return (
      <div className="grid-container-exp">
        {colors.map((color, index) => (
          <div
            key={index}
            className="grid-item-exp"
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    );
  };

  return (
    <>
      {showPage && (
        <div>
          <div>
            <Link
              to="/home"
              className="absolute top-8 right-10 text-3xl p-2 hover:text-yellow-900 cursor-pointer"
              onClick={handleClosePage}
            >
              X
            </Link>
          </div>
          <div className="absolute bottom-10 right-10 text-xl">
            <p>{"<Experience/>"}</p>
          </div>
          <div className="absolute top-10 left-5 text-xl">
            <p>{"<Experience>"}</p>
          </div>
          <div className="writing-container-exp">
            <p className="writing-text-exp">HTML.</p>
            <p className="writing-text-exp">CSS.</p>
            <p className="writing-text-exp">JAVASCRIPT.</p>
            <p className="writing-text-exp">REACTJS.</p>
            <p className="writing-text-exp">TAILWINDCSS.</p>
          </div>
          <Grid />
        </div>
      )}
    </>
  );
};

export default Experience;
