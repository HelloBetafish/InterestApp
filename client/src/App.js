import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import ConnectColl from "./pages/ConnectColl";
import Messages from "./pages/Messages";
import Navbar from "./components/Navbar";
// import Login from "./components/Login";

// const App = () => <Login/>;

const App = () => 
  <Router>
    <div>
      <Navbar />
                                                                                                                                                          
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/connect&collaborate" component={ConnectColl} />

    </div>
  </Router>;


export default App;