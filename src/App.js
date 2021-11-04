// Import components and pages
import Nav from "./components/Nav";
import Dropdown from "./components/Dropdown";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Footer from "./components/Footer";

import Home from "./pages/Home.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  return (
    <Router>
      <div className="font- Poppins flex justify-center p-0">
        <div className="divide-y-2 divide-milkyWhite sm:w-7/12 w-full">
          <Nav toggle={toggle} />
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
