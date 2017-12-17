import React from "react";
import "./LoginButton.css";

// Destructuring the type, className, children and onClick props, applying them to the button element
const LoginButton = ({ type, className, children, onClick, props }) => (

<button
    onClick={onClick}
    className={`btn btn-${type ? type : "default"} 
                       ${className ? " " + className : ""}`}
  >
    {children}
  </button>
   

);

export default LoginButton;
