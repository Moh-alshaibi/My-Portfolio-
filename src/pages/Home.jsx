import React, { useRef } from "react";
import Nav from "../components/Nav";
import Aboutme from "../components/Blackfolder";
import Contact from "../components/Yellowfolder";
import Experience from "../components/Brownfolder";
import Projects from "../components/Greenfolder";

const Home = () => {
  const aboutMeRef = useRef(null);
  const handleDiscoverClick = () => {
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Nav handleDiscoverClick={handleDiscoverClick} />
      <div className="flex justify-center mt-64 ml-12">
        
          <div>
            <p className="ml-96 text-2xl">Hey!</p>
            <p className="ml-96 mt-8 w-6/12">
              My name is <span className="text-red-900">Mohamed</span> and I'm a
              web developer who specializes in designing and building web
              applications and websites.
            </p>
            <p className="ml-96 mt-8 w-7/12 text-lg">
              These files offer a unique and exciting{" "}
              <span className="text-blue-900">opportunity</span> to explore my
              work, where you can learn more about my{" "}
              <span className="text-green-600">skills</span> and{" "}
              <span className="text-yellow-600">talents</span>.
            </p>
          </div>
        
      </div>
      <div className="mt-96" ref={aboutMeRef}>
        <Aboutme />
        <Contact />
        <Experience />
        <Projects />
      </div>
      <footer className="flex justify-center pt-38 text-sm p-14 bg-neutral-900 text-white">
        <div>
          <p className="p-2 hover:text-red-300">
            Copyright © 2023 Mohamed Al-Shaibi
          </p>
          <div className="social-links cursor-pointer">
            <div id="twitter" className="social-btn flex-center cursor-pointer">
              <img className="cursor-pointer" src="/src/assets/img/gmail.png" alt="" />
              <span className="cursor-pointer">E-mail me!</span>
            </div>
            <div className="social-links cursor-pointer">
            <div id="twitter" className="social-btn flex-center cursor-pointer">
              <img className="cursor-pointer" src="" alt="" />
              <span className="cursor-pointer">Lets Connect!</span>
            </div>
            <div className="social-links cursor-pointer">
            <div id="twitter" className="social-btn flex-center cursor-pointer">
              <img className="cursor-pointer" src="" alt="" />
              <span className="cursor-pointer">My Github!</span>
            </div>
            </div>
          </div>
        </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
