import React from "react";
import Nav from "./components/Nav";

const App = () => {
  return (
    <div>
      <Nav />
      <div className="flex justify-center mt-64 ml-28">
        <img src="./src/assets/img/me.png" alt="" className="" />
        <div>
          <p className="ml-12 mt-4">Hey!</p>
          <p className="ml-12 mt-4 w-96 ">My name is <span className="text-red-900">Mohamed</span> and I'm a web developer who specializes in designing and building web applications and websites.</p>
        </div>
      </div>
    </div>
  );
};

export default App;
