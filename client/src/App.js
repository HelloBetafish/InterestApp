import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Blog from "./pages/Blog";
// import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
    // Navpills code in progress below
    //   <Router>
    //   <div>
    //     <Navpills />
    //     <Route exact path="/" component={Home} />
    //     <Route exact path="/about" component={About} />
    //     <Route exact path="/blog" component={Blog} />
    //     <Route path="/contact" component={Contact} />
    //   </div>
    // </Router>;
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
