import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Felt from "./pages/Felt";
import Home from "./pages/Home";
import Weather from "./pages/Weather";

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/weather" component={Weather} />
          <Route path="/felt" component={Felt} />
          <Route path="/about" component={About} />
        </Switch>

        <ul className="bg-blue-900 bottom-0 fixed flex justify-evenly text-white w-full p-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
          <li>
            <Link to="/felt">Felt</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </Router>
  );
}
