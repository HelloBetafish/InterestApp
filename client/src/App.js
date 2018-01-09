import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Profile from "./pages/Profile";
import UserProfile from "./pages/UserProfile";
import ConnectColl from "./pages/ConnectColl";
import Messages from "./pages/Messages";
import PersonalInfo from "./pages/PersonalInfo";
import CreateAcct from "./pages/CreateAcct";
import Login from "./pages/Login";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


const App = () => 

  <Router>

    <div>
      
      <Wrapper>
      	<Route exact path="/" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/connect&collaborate" component={ConnectColl} />
        <Route exact path="/personalinfo" component={PersonalInfo} />
        <Route exact path="/createaccount" component={CreateAcct} />
      </Wrapper>
      <Footer />
    </div>
  </Router>
  ;


export default App;