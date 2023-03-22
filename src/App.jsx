import React from "react";
import Nav from "./components/Nav";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <Nav />
      <div className="flex justify-center mt-64 ml-28">
        <img src="./src/assets/img/me.png" alt="" className="" />
        <div>
          <p className="ml-12 mt-4">Hey!</p>
          <p className="ml-12 mt-4 w-96 ">
            My name is <span className="text-red-900">Mohamed</span> and I'm a
            web developer who specializes in designing and building web
            applications and websites.
          </p>
        </div>
      </div>
      <div className="mt-96">
        <Aboutme />
        <Contact />
        <Experience />
        <Projects />
      </div>
      <div>
        <footer>
          <p className="mt-96 flex justify-center bottom-0 text-sm p-28 bg-neutral-900 text-white">Copyright © 2023 Mohamed Al-Shaibi</p>
        </footer>
      </div>
    </div>
  );
};

export default App;
