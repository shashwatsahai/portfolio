import React from "react";
import {Maincontainer, Contact, Navbar, Projects} from "./Components";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Switch>
          <Route exact path="/"><Redirect to="/home" /> </Route>
          <Route path="/projects" exact component={Projects} />
          <Route path="/home" exact component={Maincontainer} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
