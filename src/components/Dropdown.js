import React from "react";
import Pdf from "../assets/Han's Resume.pdf";
import { Link } from "react-router-dom";
const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-3 text-center items-center text-lightGrey text-xl"
          : "hidden"
      }
      onClick={toggle}
    >
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <a className="hover:text-milkyWhite" href={Pdf} target="_blank">
          Resume
        </a>
    </div>
  );
};

export default Dropdown;
