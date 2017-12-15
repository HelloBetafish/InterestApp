import React from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import "./Textfields.css";

//NOTE: list-group-item adds white div background therefore
//      change to list-group.
export const Textfields = props => (


	
   
      
        
<div>
        	
  <div className="form-group">
    <h4> Email address </h4>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </input>
   
  </div>
  <div className="form-group">
    <h4> Password </h4>
    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password">
    </input>
  </div>
  
  <button type="submit" className="btn btn-primary signBtn float-right">Sign-up</button>
  <button type="submit" className="btn btn-primary loginBtn float-right">Login</button>


</div>
        
    

   




);

