import "./App.css";

// Import components and pages
import Nav from "./components/Nav";
import Home from "./pages/HomePage/Home";
import Projects from "./pages/ProjectsPage/Projects";
import About from "./pages/AboutPage/About";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </Switch>
        <hr />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
