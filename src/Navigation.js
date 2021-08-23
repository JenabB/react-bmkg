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

        <div className="bg-blue-900 bottom-0 fixed flex justify-evenly text-white w-full p-2">
          <div>
            <Link to="/" className="text-center">
              <h1 className="material-icons md-24 flex justify-center">home</h1>
              <h1>Home</h1>
            </Link>
          </div>
          <div>
            <Link to="/weather">
              <h1 className="material-icons md-24 flex justify-center">
                cloud
              </h1>
              <h1>Weather</h1>
            </Link>
          </div>
          <div>
            <Link to="/felt">
              <h1 className="material-icons md-24 flex justify-center">
                online_prediction
              </h1>
              <h1>Felt</h1>
            </Link>
          </div>
          <div>
            <Link to="/about">
              <h1 className="material-icons md-24 flex justify-center">info</h1>
              <h1>About</h1>
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
}
