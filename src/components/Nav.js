import React from "react";
import "./Nav.css";
import Pdf from "../assets/Han's Resume.pdf";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <ul class="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li>
          <a class="nav-link" href={Pdf} target="_blank">
            Resume
          </a>
        </li>
        <li>
          <a class="nav-link" href="https://hanwebblog.herokuapp.com/">
            Blogs
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
