import React from "react";
import Navbar from "./Components/Navbar";
import Maincontainer from "./Components/Maincontainer";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/home" exact component={Maincontainer} />
          <Route path="/contact" exact component={null} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
