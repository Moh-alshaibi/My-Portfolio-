import React, { useState } from "react";
import { Link } from "react-router-dom";

const Experience = () => {
  const [showPage, setShowPage] = useState(true);

  const handleClosePage = () => {
    setShowPage(false);
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
        </div>
      )}
    </>
  );
};

export default Experience;
