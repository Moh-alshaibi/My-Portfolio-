import React from "react";

const Nav = ({ handleDiscoverClick }) => {
  return (
    <div className="flex flex-row justify-end mr-24">
      <nav className="mt-10 max-w-screen-lg">
        <ul className="flex flex-row justify-end">
          <li className="bg-neutral-900 text-white font-bold py-2 px-4 rounded-md mr-4 cursor-pointer text-sm" onClick={handleDiscoverClick}>
            Discover
          </li>
          <li className="bg-neutral-900 text-white font-bold py-2 px-4 rounded-md cursor-not-allowed text-sm">
            Resume
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
