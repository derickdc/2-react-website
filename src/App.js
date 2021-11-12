import Home from "./components/Home";
import Register from "./components/Register";
import About from "./components/About";
import Login from "./components/Login";
import Head from "./components/Head";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Head />
        <Nav />
            <Switch>
              <Route exact path="/"><Home /></Route>
              <Route path="/about"><About /></Route>
              <Route path="/register"><Register /></Route>
              <Route path="/login"><Login /></Route>
            </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App;
