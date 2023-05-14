import React, { useRef } from "react";
import Nav from "../components/Nav";
import Aboutme from "../components/Blackfolder";
import Contact from "../components/Yellowfolder";
import Experience from "../components/Brownfolder";
import Projects from "../components/Lightfolder";

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
            My name is <span className="text-yellow-900">Mohamed</span> and I'm
            a web developer who specializes in designing and building web
            applications and websites.
          </p>
          <p className="ml-96 mt-8 w-7/12 text-lg">
            These files offer a unique and exciting{" "}
            <span className="text-yellow-800">opportunity</span> to explore my
            work, where you can learn more about my{" "}
            <span className="text-yellow-700">skills</span> and{" "}
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
          <p className="p-2 text-white bg-gradient-to-r from-yellow-600 via-yellow-700 to-yellow-800 bg-clip-text transition-colors duration-200 hover:text-transparent hover:bg-gradient-to-r hover:from-yellow-600 hover:via-yellow-700 hover:to-yellow-800">
            Copyright © 2023 Mohamed Al-Shaibi
          </p>
          <div className="social-links">
            <div id="twitter" className="social-btn flex-center">
              <a href="mailto:moh.55286@gmail.com">
                <img
                  className="cursor-pointer"
                  src="src/assets/img/gmail.png"
                  alt="Gmail"
                />
              </a>
              <span className="cursor-pointer hover:underline">
                <a href="mailto:moh.55286@gmail.com">E-mail me!</a>
              </span>
            </div>
            <div className="social-links">
              <div id="linkedin" className="social-btn flex-center">
                <a
                  href="https://www.linkedin.com/in/mohammed-al-shaibi-b0212822b/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="cursor-pointer"
                    src="src/assets/img/Linkedin_2.png"
                    alt="LinkedIn"
                  />
                </a>
                <span className="cursor-pointer hover:underline">
                  <a
                    href="https://www.linkedin.com/in/mohammed-al-shaibi-b0212822b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Let's Connect!
                  </a>
                </span>
              </div>
              <div id="github" className="social-btn flex-center">
                <a
                  href="https://github.com/Moh-alshaibi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="cursor-pointer"
                    src="src/assets/img/githublogo_2.png"
                    alt="GitHub"
                  />
                </a>
                <span className="cursor-pointer hover:underline">
                  <a
                    href="https://github.com/Moh-alshaibi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    My GitHub!
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;

