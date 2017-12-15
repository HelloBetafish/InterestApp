import React from "react";

const Profile = () =>
<div id="section1">
<div id="photo" class="container">
  <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-3">
      <span id='clickableAwesomeFont'><i class=" fa fa-list" style={{fontSize: "40px", color:"black"}} ></i></span>
      <p id="personal">Personal Info</p>
      <span id='clickableAwesomeFont'><i class=" fa fa-address-book" style={{fontSize: "40px", color:"black"}} ></i></span>
      <p id="contacts">Contacts</p>
      <span id='clickableAwesomeFont'><p id="cuatro" style={{fontSize: "40px", fontWeight: "bold", marginLeft: "20px"}}>4</p></span>
      <p id="textmessage" style={{fontSize: "15px", color: "black"}}>Messages</p>

    </div>
    <div class="col-md-4">
      <div class="thumbnail">

        <img src="css/images/guy.jpeg" width="220" height="220"/>
        <div class="caption">
          <p id="text">Bruno Smith</p> 
          <p id="text2">Web Developer <br/> Front and Back end <br/> ICE CREAM APPLICATION </p>
        </div>

      </div>
    </div>

    <div class="col-md-1"></div>
    <div class="col-md-3">
      <button type="button" class="btn btn-danger">Recent Activity</button>
      <button type="button" class="btn btn-danger">Portfolios link</button> 
    </div>
  </div>
</div>


<section id="services">
 <div class="container">

  <div class="row">
    <div class="col-sm-12">

      <div class="service row">   
        <div class="col-md-4 ">
          <div class="searchprofile">
            <span id='clickableAwesomeFont'><i class="fa fa-search fa-4x circle-icon" style={{fontSize: "40px", color:"red"}}></i></span>

            <h2 id="connect">Connect or Collaborate</h2>
            <p id="connectp">Connect with people who are looking for ideas <br/><br/>Find ideas you like and collarate with them
            </p> 
          </div>
        </div>
        <div class="col-md-4">
          <div id="messageprofile">
            <span id='clickableAwesomeFont'><i class="fa fa-envelope fa-4x circle-icon" style={{fontSize: "40px", color:"red"}}></i></span>
            <h2 id="message">Message Box</h2>
            <p id="messagep">Keep your messages organized</p>
          </div>
        </div>
        <div class="col-md-4 ">
          <div id="ideasprofile">
            <span id='clickableAwesomeFont'><i class="fa fa-lightbulb-o fa-4x circle-icon" style={{fontSize: "40px", color:"red"}}></i></span>
            <h2 id="ideas">Add and Keep Ideas</h2>
            <p id="ideasp">Add as many ideas you have <br/>
             See how many ideas you have submitted, keep, updated or delete them
           </p>
         </div>
       </div>
     </div>
   </div>
 </div>

</div>
</section>
</div>


export default Profile; 