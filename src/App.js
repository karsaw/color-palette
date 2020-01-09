import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter as Router, Route, BrowserRouter } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Basic from "./pages/basic.js";
import Material from "./pages/material.js";
import Hue from "./pages/hue.js";
import history from "./history/history.js";

function App() {
  return (
    <CookiesProvider>
      <Router history={history}>
        <BrowserRouter basepath="/#">
          <Route path="/" exact component={Basic} />
          <Route path="/material-color" exact component={Material} />
          <Route path="/hue" exact component={Hue} />
        </BrowserRouter>
      </Router>
    </CookiesProvider>
  );
}

export default App;
