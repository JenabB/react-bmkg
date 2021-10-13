import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Felt from "./pages/Felt";
import FeltM5 from "./pages/FeltM5";
import Home from "./pages/Home";

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/felt" component={Felt} />
          <Route path="/feltm5" component={FeltM5} />
          <Route path="/about" component={About} />
        </Switch>

        <div className="bg-blue-900 bottom-0 fixed flex lg:justify-center justify-evenly text-white w-full p-2">
          <div className="mx-4">
            <Link to="/" className="text-center">
              <h1 className="material-icons md-24 flex justify-center">home</h1>
              <h1>Home</h1>
            </Link>
          </div>

          <div className="mx-4">
            <Link to="/felt">
              <h1 className="material-icons md-24 flex justify-center">
                online_prediction
              </h1>
              <h1>Felt</h1>
            </Link>
          </div>
          <div className="mx-4">
            <Link to="/feltm5">
              <h1 className="material-icons md-24 flex justify-center">
                sensors
              </h1>
              <h1>M 5+</h1>
            </Link>
          </div>
          <div className="mx-4">
            <Link to="/about">
              <h1 className="material-icons md-24 flex justify-center">info</h1>
              <h1>Tentang</h1>
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
}
