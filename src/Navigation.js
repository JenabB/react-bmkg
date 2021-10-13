import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Dibawah5 from "./pages/Dibawah5";
import Diatas5 from "./pages/Diatas5";
import Home from "./pages/Home";

export default function Navigation() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dibawah5" component={Dibawah5} />
          <Route path="/diatas5" component={Diatas5} />
          <Route path="/tentang" component={About} />
        </Switch>

        <div className="bg-blue-900 rounded-t-3xl bottom-0 fixed flex lg:justify-center justify-evenly text-white w-full p-2">
          <div className="mx-2">
            <Link to="/" className="text-center">
              <h1 className="material-icons md-24 flex justify-center">home</h1>
              <h1>Home</h1>
            </Link>
          </div>

          <div className="mx-2">
            <Link to="/dibawah5">
              <h1 className="material-icons md-24 flex justify-center">
                online_prediction
              </h1>
              <h1> &lt;5 M</h1>
            </Link>
          </div>
          <div className="mx-2">
            <Link to="/diatas5">
              <h1 className="material-icons md-24 flex justify-center">
                sensors
              </h1>
              <h1>&gt;5 M</h1>
            </Link>
          </div>
          <div className="mx-2">
            <Link to="/tentang">
              <h1 className="material-icons md-24 flex justify-center">info</h1>
              <h1>Tentang</h1>
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
}
