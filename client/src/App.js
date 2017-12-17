import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import ConnectColl from "./pages/ConnectColl";
import Messages from "./pages/Messages";
import Navbar from "./components/Navbar";
<<<<<<< HEAD

 import Login from "./pages/Login";
=======
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Login from "./components/Login";
>>>>>>> 190553e6b4c7a3aeca5a6f0986b2d174af21c4ae

// const App = () => <Login/>;
//<Route exact path="/" component={Profile} />

const App = () => 
  <Router>
    <div>
<<<<<<< HEAD
     <Navbar />
    <Route exact path="/" component={Login} />
     
        
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/connect&collaborate" component={ConnectColl} />
=======
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={Profile} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/connect&collaborate" component={ConnectColl} />
        <Route exact path="/addidea" component={AddIdea} />
        <Route exact path="/createaccount" component={CreateAcct} />
      </Wrapper>
      <Footer />
>>>>>>> 190553e6b4c7a3aeca5a6f0986b2d174af21c4ae
    </div>
  </Router>;


export default App;