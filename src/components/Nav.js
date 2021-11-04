import React from "react";
import Pdf from "../assets/Han's Resume.pdf";
import { Link } from "react-router-dom";
import { Navbar, Container, Dropdown } from "react-bootstrap";

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

    // <div className="text-lightGrey text-2xl mt-20 mb-4">
    //   <ul class="flex justify-center text-lightGrey list-none m-0 p-0">
    //     <li className="mx-4">
    //       <Link to="/" className="hover:underline focus:no-underline">
    //         Home
    //       </Link>
    //     </li>
    //     <li className="mx-4">
    //       <Link to="/projects" className="hover:underline focus:no-underline">
    //         Projects
    //       </Link>
    //     </li>
    //     <li className="mx-4">
    //       <Link to="/about" className="hover:underline focus:no-underline">
    //         About
    //       </Link>
    //     </li>
    //     <li className="mx-4">
    //       <a className="hover:underline focus:no-underline" href={Pdf} target="_blank">
    //         Resume
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
};

export default Nav;
