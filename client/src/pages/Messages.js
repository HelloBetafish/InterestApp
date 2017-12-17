import React from "react";

const ConnectColl = () =>
<div class="container-fluid">
<div class="row">
  <div class="col-md-1">
  </div>
  <div class="col-md-2">
    <span class="envelope" id='clickableAwesomeFont'><i class="fa fa-envelope fa-4x circle-icon" style={{fontSize: "60px", color: "#e3c721", marginTop: "110px"}}></i></span>
     <p id="pb"> 4 New</p>
     <span class="openenvelope" id='clickableAwesomeFont'><i class="fa fa-envelope-open fa-4x circle-icon" style={{fontSize: "60px", color: "#e3c721"}}></i></span>
     <p id="pb">Read</p>
     <span class="noread" id='clickableAwesomeFont'><i class="fa fa-envelope-square fa-4x circle-icon" style={{fontSize: "60px", color:"#e3c721"}}></i></span>
     <p id="pb" style={{fontSize: "15px", color: "black"}}>No Read</p>
  </div>

  <div id="computer" class="col-md-6" >
    <div id="messagebox" class="col-md-8">
      <span class="messageicon"><i class="fa fa-envelope fa-4x " style={{fontSize: "40px", color:"white"}}></i></span>
      <h2 id="messageppp">Message Box</h2>
      <div id="box">
        <p id="messagep">Keep your messages organized</p>
      </div>
      <div id="buttons" class="col-md-2">
        <button type="button" id="reply" class="btn btn-danger">reply</button>
        <button type="button" id="keep" class="btn btn-warning">keep</button>
        <button type="button" id="delete" class="btn btn-light">delete</button>
      </div>
    </div>
  </div>
</div>
</div>;

export default ConnectColl; 