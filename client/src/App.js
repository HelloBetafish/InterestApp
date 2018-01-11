import React from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ConnectColl from "./pages/ConnectColl";
import Messages from "./pages/Messages";
import PublicProfile from "./pages/PublicProfile";
import CreateAcct from "./pages/CreateAcct";
import BrowseIdeas from "./pages/BrowseIdeas";
import Login from "./pages/Login";
import MeetUs from "./pages/MeetUs";
import NoMatch from "./pages/NoMatch";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";


const App = () => 

  <Router>

    <div>
      
      <Wrapper>
      	<Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/messages" component={Messages} />
        <Route exact path="/connect&collaborate" component={ConnectColl} />
        <Route exact path="/publicprofile" component={PublicProfile} />
        <Route exact path="/browseideas" component={BrowseIdeas} />
        <Route exact path="/createaccount" component={CreateAcct} />
        <Route exact path="/meetus" component={MeetUs} />
        {/* <Route path="/*" component={NoMatch} /> */}
      </Wrapper>
      <Footer />
    </div>
  </Router>
  ;


export default App;