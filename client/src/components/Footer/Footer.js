import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () =>
<div className="footer">
  <div className='container'>
    <div className='row'>
      <div className='col-md-6'>
        <p className="text-left">InterestApp , Gilbert AZ  </p>
      </div>
      <div className='col-md-6'>
        <p className="text-right">Privacy | Android App | help | <Link to="/meetus">contact us</Link></p>
      </div>
    </div>
  </div>
</div>
;

export default Footer;