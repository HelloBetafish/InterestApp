import React from "react";
import Navbar from "../components/Navbar";

const Profile = () =>

<div>
<Navbar />


<div id="section1">
<div id="photo" className="container">
  <div className="row">
    <div className="col-md-1"></div>
    <div className="col-md-3">
      <span id='clickableAwesomeFont'><i className=" fa fa-list" style={{fontSize: "40px", color:"black"}} ></i></span>
      <p id="personal">Personal Info</p>
      <span id='clickableAwesomeFont'><i className=" fa fa-address-book" style={{fontSize: "40px", color:"black"}} ></i></span>
      <p id="contacts">Contacts</p>
      <span id='clickableAwesomeFont'><p id="cuatro" style={{fontSize: "40px", fontWeight: "bold", marginLeft: "20px"}}>4</p></span>
      <p id="textmessage" style={{fontSize: "15px", color: "black"}}>Messages</p>

    </div>
    <div className="col-md-4">
      <div className="img-thumbnail mx-auto">

        <img src="css/images/guy.jpeg" width="110" height="110" style={{marginLeft: "80px"}}/>
        <div className="caption">
          <p id="text">Bruno Smith</p> 
          <p id="text2">Web Developer <br/> Front and Back end <br/> ICE CREAM APPLICATION </p>
        </div>

      </div>
    </div>

    <div className="col-md-1"></div>
    <div className="col-md-3">
      <button id="btn1" type="button" className="btn btn-danger">Recent Activity</button>
      <button type="button" className="btn btn-danger">Portfolios link</button> 
    </div>
  </div>
</div>


<section id="services">
 <div className="container">

  <div className="row">
    <div className="col-sm-12">

      <div className="service row">   
        <div className="col-md-4 ">
          <div className="searchprofile" >
            <span id='clickableAwesomeFont'><i className="fa fa-search fa-4x circle-icon" style={{fontSize: "40px", color:"red"}}></i></span>

            <h2 id="connect">Connect or Collaborate</h2>
            <p id="connectp">Connect with people who are looking for ideas <br/><br/>Find ideas you like and collarate with them
            </p> 
          </div>
        </div>
        <div className="col-md-4">
          <div id="messageprofile">
            <span id='clickableAwesomeFont'><i className="fa fa-envelope fa-4x circle-icon" style={{fontSize: "40px", color:"red"}}></i></span>
            <h2 id="message">Message Box</h2>
            <p id="messagep">Keep your messages organized</p>
          </div>
        </div>
        <div className="col-md-4 ">
          <div id="ideasprofile">
            <span id='clickableAwesomeFont'><i className="fa fa-lightbulb-o fa-4x circle-icon" style={{fontSize: "40px", color:"red"}}></i></span>
            <h2 id="ideas">Add and Keep Ideas</h2>
            <p id="ideasp">Add as many ideas you have <br/>
             See how many ideas you have submitted, keep, update or delete them
           </p>
         </div>
       </div>
     </div>
   </div>
 </div>

</div>
</section>
</div>

</div>


export default Profile; 