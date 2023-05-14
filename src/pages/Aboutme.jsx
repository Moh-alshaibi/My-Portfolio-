import React, { useState } from "react";
import { Link } from "react-router-dom";

const Aboutme = () => {
  const [showPage, setShowPage] = useState(true);

  const handleClosePage = () => {
    setShowPage(false);
  };

  return (
    <>
      {showPage && (
        <div>
          <div>
            <p className="aboutmep1">
              Hello there! My name is Mohamed, and I am a 21-year-old front-end developer originally
              from Yemen, but currently residing in Germany.
            </p>
            <p className="aboutmep2">
              My passion lies in the tech industry, and my goal is to create
              exciting and innovative websites for people to enjoy.
            </p>
            <p className="aboutmep3">
              As a front-end developer, I am dedicated to crafting beautiful and
              user-friendly websites that provide an exceptional user
              experience. I am thrilled to be working in this exciting field and
              look forward to what the future holds.
            </p>
            <Link
              to="/home"
              className="absolute top-8 right-10 text-3xl p-2 hover:text-yellow-900 cursor-pointer"
              onClick={handleClosePage}
            >
              X
            </Link>
          </div>
          <div className="absolute bottom-10 right-10 text-xl">
            <p>{"<About me/>"}</p>
          </div>
          <div className="absolute top-10 left-5 text-xl">
            <p>{"<About me>"}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Aboutme;
