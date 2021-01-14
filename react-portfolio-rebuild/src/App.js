import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Major Components
import Landing from "pages/landing/Landing";
import Projects from "pages/projects/Projects";
import About from "pages/about/About"

// Style
import "style/index.scss"

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
