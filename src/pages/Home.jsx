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
          <div className="social-links">
            <div id="twitter" className="social-btn flex-center">
              <img src="/src/assets/img/gmail.png" alt="" />
              <span>E-mail me!</span>
            </div>
            <div id="linkedin" className="social-btn flex-center">
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
              </svg>
              <span>Let's connect!</span>
            </div>
            <div id="github" className="social-btn flex-center">
              <svg
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
              <span>My Github!</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
