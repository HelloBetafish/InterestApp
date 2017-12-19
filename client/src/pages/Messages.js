import React from "react";
import Navbar from "../components/Navbar";

const ConnectColl = () =>

<div>
<Navbar />

<div className="container-fluid">
<div className="row">
  <div className="col-md-1">
  </div>
  <div class="col-md-2">
    <span className="envelope" id='clickableAwesomeFont'><i className="fa fa-envelope fa-4x " style={{marginLeft:"30px", fontSize: "40px", color: "black", marginTop: "110px"}}></i></span>
     <p id="pb"> 4 New</p>
     <span className="openenvelope" id='clickableAwesomeFont'><i className="fa fa-envelope-open fa-4x " style={{marginLeft:"30px",fontSize: "40px", color: "black"}}></i></span>
     <p id="pb">Read</p>
     <span className="noread" id='clickableAwesomeFont'><i className="fa fa-envelope-square fa-4x " style={{marginLeft:"30px",fontSize: "40px", color:"black"}}></i></span>
     <p id="pb" style={{fontSize: "15px", color: "black"}}>No Read</p>
  </div>

  <div id="computer" class="col-md-6" >
    <div id="messagebox" class="col-md-8">
      <span className="messageicon"><i className="fa fa-envelope fa-4x " style={{ marginLeft:"25px",fontSize: "40px", color:"white"}}></i></span>
      <h2 id="messageppp">Message Box</h2>
      <div id="box">
        <p id="messagep">Keep your messages organized</p>
      </div>
      <div className="col-md-2 messagesButtons">
        <button type="button" id="reply" className="btn btn-danger" style={{marginLeft:"220px", marginTop:"-8px"}}>reply</button>
        <button type="button" id="keep" className="btn btn-warning" style={{marginLeft:"295px", marginTop:"-65px"}}>keep</button>
        <button type="button" id="delete" className="btn btn-light"style={{marginLeft:"370px", marginTop:"-115px"}}>delete</button>
      </div>
    </div>
  </div>
</div>
</div>;
</div>
export default ConnectColl; 