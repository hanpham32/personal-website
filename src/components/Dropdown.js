import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({isOpen, toggle}) => {
    return(
        <div className={isOpen ? "grid grid-rows-3 text-center items-center text-lightGrey" : "hidden"} onClick={toggle}>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Dropdown;