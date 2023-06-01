import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Aboutme = () => {
  const [showPage, setShowPage] = useState(true);
  const [typedText1, setTypedText1] = useState("");
  const [typedText2, setTypedText2] = useState("");
  const [typedText3, setTypedText3] = useState("");
  const paragraph1 =
    "   Hello there! My name is Mohamed, and I am a 21-year-old front-end developer originally from Yemen, but currently residing in Germany.";

  const paragraph2 =
    "   My passion lies in the tech industry, and my goal is to create exciting and innovative websites for people to enjoy.";

  const paragraph3 =
    "   As a front-end developer, I am dedicated to crafting beautiful and user-friendly websites that provide an exceptional user experience. I am thrilled to be working in this exciting field and look forward to what the future holds.";

  useEffect(() => {
    let currentIndex1 = 0;
    let currentIndex2 = 0;
    let currentIndex3 = 0;

    const typingInterval1 = setInterval(() => {
      if (currentIndex1 === paragraph1.length) {
        clearInterval(typingInterval1);
      } else {
        setTypedText1((prevText) => prevText + paragraph1[currentIndex1]);
        currentIndex1++;
      }
    }, 30);

    const typingInterval2 = setInterval(() => {
      if (currentIndex2 === paragraph2.length) {
        clearInterval(typingInterval2);
      } else {
        setTypedText2((prevText) => prevText + paragraph2[currentIndex2]);
        currentIndex2++;
      }
    }, 40);

    const typingInterval3 = setInterval(() => {
      if (currentIndex3 === paragraph3.length) {
        clearInterval(typingInterval3);
      } else {
        setTypedText3((prevText) => prevText + paragraph3[currentIndex3]);
        currentIndex3++;
      }
    }, 20);

    return () => {
      clearInterval(typingInterval1);
      clearInterval(typingInterval2);
      clearInterval(typingInterval3);
    };
  }, []);

  const handleClosePage = () => {
    setShowPage(false);
  };

  return (
    <>
      {showPage && (
        <div>
          <div>
            <p className="aboutmep1">{typedText1}</p>
            <br />
            <p className="aboutmep2">{typedText2}</p>
            <br />
            <p className="aboutmep3">{typedText3}</p>
          </div>
          <div className="absolute top-10 left-8 text-xl">
            <p>{"<Skills>"}</p>
          </div>
          <div className="absolute bottom-10 right-12 text-xl">
            <p>{"<Skills/>"}</p>
          </div>
          <div className="my-image">
            <img src="src/assets/img/me.jpg" alt="" />
          </div>
          <Link
            to="/home"
            className="absolute top-8 right-10 text-3xl p-2 hover:text-yellow-900 cursor-pointer"
            onClick={handleClosePage}
          >
            X
          </Link>
        </div>
      )}
    </>
  );
};

export default Aboutme;
