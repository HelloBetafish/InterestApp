import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import ConnectColl from "./pages/ConnectColl";
import Messages from "./pages/Messages";
//import Navbar from "./components/Navbar";

import AddIdea from "./pages/AddIdea";
import CreateAcct from "./pages/CreateAcct";

 import Login from "./pages/Login";

import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";



// const App = () => <Login/>;
//<Route exact path="/" component={Profile} />


const App = () => 

  <Router>

    <div>
      
      <Wrapper>
      	<Route exact path="/" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/connect&collaborate" component={ConnectColl} />
         <Route exact path="/addidea" component={AddIdea} />
        <Route exact path="/createaccount" component={CreateAcct} />
       

      </Wrapper>
      <Footer />

    </div>
   
  </Router>;


export default App;