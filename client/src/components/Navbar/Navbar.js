import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = props =>
 <nav className="navbar navbar-dark bg-dark data-spy-affix navbar-expand-sm">
  <div className="container-fluid">
    <div className="navbar-header">
      <Link className="navbar-brand" to="/">
        InterestApp
      </Link>
    </div>
      <ul className="nav navbar-nav">
        <li className = "nav-item"
          className={ 
            window.location.pathname === "/" ||
            window.location.pathname === "/login"
              ? "active"
              : ""
          }>
      
        
        </li>
        <li className ="nav-item" className={window.location.pathname === "/dashboard" ? "active" : ""}>
          <Link to="/dashboard" className="nav-link" >Dashboard</Link>
        </li>
        <li className = "nav-item" 
          className={window.location.pathname === "/connect&collaborate" ? "active" : ""}>
          <Link to="/connect&collaborate" className="nav-link" >Connect & Collaborate</Link>
        </li>
        <li className ="nav-item" className={window.location.pathname === "/messages" ? "active" : ""}>
          <Link to="/messages" className="nav-link">Message Box</Link>
        </li>
        <li className ="nav-item" className={window.location.pathname === "/publicprofile" ? "active" : ""}>
           <Link to="/publicprofile" className="nav-link">Profile</Link>
       </li>
         <li className ="nav-item" className={window.location.pathname === "/createaccount" ? "active" : ""}>
         <Link to="/createaccount" className="nav-link">Create Account</Link>
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
</nav>;
export default Navbar;