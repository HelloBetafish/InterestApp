import React, {Component} from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import "./Navbar.css";


class Navbar extends Component
{

  state = 
  {
    
    IdOfSignedUser: ""
  }

  componentDidMount() 
  {

      this.loadLoggedUsers();
     
  }

  //ReUse: Get Id of logged in user
  loadLoggedUsers = () => 
  {
    
      API.getIdOfLoggedInUser().then(res =>
        
        this.setState({ IdOfSignedUser: res.data[0].IdOfSignedUser }, console.log(res.data[0].IdOfSignedUser) )

        ).catch(err => console.log(err))

  };

  signOut = () => 
  {
    
        
        API.userOffline(this.state.IdOfSignedUser).then(res => this.loadUsers())

        .catch(err => console.log(err));
  };

  
render()
{

    return(
     <nav className="navbar navbar-dark bg-dark data-spy-affix navbar-expand-sm">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/dashboard">
        InterestApp
      </Link>
    </div>
      <ul className="nav navbar-nav">
        <li className = "nav-item"
          className={ 
            window.location.pathname === "/" ||
            window.location.pathname === "/Home"
              ? "active"
              : ""
          }>
        </li>
        <li className ="nav-item" className={window.location.pathname === "/aboutus" ? "active" : ""}>
          <Link to="/aboutus" className="nav-link">About us</Link>
        </li>
        <li className ="nav-item" className={window.location.pathname === "/messages" ? "active" : ""}>
          <Link to="/messages" className="nav-link">Inbox</Link>
        </li>
        <li className ="nav-item" className={window.location.pathname === "/dashboard" ? "active" : ""}>
          <Link to="/dashboard" className="nav-link" >Dashboard</Link>
        </li>
        <li className ="nav-item" className={window.location.pathname === "/publicprofile" ? "active" : ""}>
           <Link to="/publicprofile" className="nav-link">Profile</Link>
        </li>
        <li className = "nav-item" 
          className={window.location.pathname === "/connect&collaborate" ? "active" : ""}>
          <Link to="/connect&collaborate" className="nav-link" >Connect & Collaborate</Link>
        </li>
        <li className = "nav-item" 
          className={window.location.pathname === "/browseideas" ? "active" : ""}>
          <Link to="/browseideas" className="nav-link" >Browse Ideas</Link>
        </li>
        <li className = "nav-item" 
          className={window.location.pathname === "/" ? "active" : ""}>
          <Link to="/" onClick={this.signOut} className="nav-link" >Sign Out</Link>
        </li>
        
      </ul>
      <form className=" form-inline navbar-form navbar-left" action="/action_page.php">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search" name="search"/>
        <button  className="btn btn-outline-success my-2 my-sm-0" type="submit">Search
        </button>
      </div>
    </form>
  </div>
</nav>

);
}
}
export default Navbar;