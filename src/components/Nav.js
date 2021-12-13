import React from "react";
import Pdf from "../assets/Han's Resume.pdf";
import { Link } from "react-router-dom";

const Nav = ({toggle}) => {
  return (
    <nav
      className="lg:mt-20 flex flex-row-reverse lg:justify-center items-center h-16 relative shadow-sm"
      role="navigation"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-4 cursor-pointer md:hidden"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        onClick={toggle}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
      <div className="pr-8 md:block hidden text-lightGrey text-2xl">
        <Link className="p-4 hover:text-milkyWhite" to="/">
          Home
        </Link>
        <Link className="p-4 hover:text-milkyWhite" to="/projects">
          Projects
        </Link>
        <Link className="p-4 hover:text-milkyWhite" to="/about">
          About
        </Link>
        <a className="p-4 hover:text-milkyWhite" href={Pdf} target="_blank">
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Nav;
