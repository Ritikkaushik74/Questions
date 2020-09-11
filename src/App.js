import React from "react";
import "./styles.css";
import SortString from "./Component/SortString";
import XOR_even_odd from './Component/XOR_even_odd'
import Navbar from './Component/Navbar'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Clock from "./Component/Clock";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/SortString'>
            <SortString />
          </Route>
          <Route path='/XOR'>
            <XOR_even_odd />
          </Route>
          <Route path='/'>
            <Clock />
          </Route>
        </Switch>

      </div>
    </Router>);
}
