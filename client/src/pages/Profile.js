import React from "react";
import Navbar from "../components/Navbar";
import "../style/connectColl.css";

const Profile = () =>

<div>
<Navbar />


<div id="section1">
          <div id="photo" className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-1">
                <div tabindex="1" className="box1">
                <span id='clickableAwesomeFont'><i className=" fa fa-list" style={{fontSize: "40px", color:"black"}} ></i></span>
                <p id="personal">Personal Info</p>
                </div>
                <div tabindex="2"className="box2">
                <span id='clickableAwesomeFont'><i className=" fa fa-address-book" style={{fontSize: "40px", color:"black"}} ></i></span>
                <p id="contacts">Contacts</p>
                </div>
              </div>
              <div className="col-md-2">
                <div tabindex="3"className="box3">
                <span id='clickableAwesomeFont'><p id="cuatro" style={{fontSize: "30px", fontWeight: "bold", marginLeft: "30px",paddingTop:"30px"}}>4</p></span>
                <p id="textmessage" >Messages</p>
                </div>
                <div tabindex="4"className="box4">
                <span id='clickableAwesomeFont'><p id="cuatro" style={{fontSize: "30px", fontWeight: "bold",  marginLeft: "25px",paddingTop:"26px"}}>11</p></span>
                <p id="textinvitation" >Invitations</p>
                </div>
              </div>
                
              <div className="col-md-4">
                <div className="img-thumbnail mx-auto"style={{boxShadow: "1px 9px 20px grey"}}>

                  <img src="css/images/guy.jpeg" width="200" height="200" style={{marginLeft: "70px"}}/>
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
                    <div className="searchprofile" style={{boxShadow: "9px 9px 20px grey"}}>
                      <span id='clickableAwesomeFont'><i className="fa fa-search fa-4x circle-icon" style={{fontSize: "40px", color:"red"}}></i></span>

                      <h2 id="connect">Connect or Collaborate</h2>
                      <p id="connectp">Connect with people who are looking for ideas <br/><br/>Find ideas you like and collarate with them
                      </p> 
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div id="messageprofile"style={{boxShadow: "9px 9px 20px grey"}}>
                      <span id='clickableAwesomeFont'><i className="fa fa-envelope fa-4x circle-icon" style={{fontSize: "40px", color:"red"}}></i></span>
                      <h2 id="message">Message Box</h2>
                      <p id="messagep">Keep your messages organized</p>
                    </div>
                  </div>
                  <div className="col-md-4 ">
                    <div id="ideasprofile"style={{boxShadow: "9px 9px 20px grey"}}>
                      <span id='clickableAwesomeFont'><i className="fa fa-lightbulb-o fa-4x circle-icon" data-toggle="modal" data-target="#exampleModal" style={{fontSize: "40px", color:"red"}}></i></span>
                      <h2 id="ideas">Add and Keep Ideas</h2>
                      <p id="ideasp">Add as many ideas you have <br/>
                       See how many ideas you have submitted, keep, update or delete them
                      </p>

                    

                            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content"style={{backgroundColor:" #e3c721"}}>
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel"style={{marginLeft:"40%"}}>ADD IDEA</h5>

                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body" style={{backgroundColor:" white"}}>
                                              <form id="input" style={{width:"93%", marginLeft:"20px",marginBottom:"40px"}}>

                                             <div className="formName-group">
                                               <label className="col-form-label" for="formGroupExampleInput2"style={{color:"#65737e"}}>Idea's Name</label>
                                               <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
                                             </div>
                                          
                                          
                                             <div className="form-group">
                                               <label className="col-form-label" for="formGroupExampleInput" style={{color:"#65737e"}}>What is your idea?</label>
                                               <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
                                             </div>
                                              
                                             <div className="form-group">
                                               <label for="exampleFormControlTextarea1"style={{color:"#65737e"}}>Why is a good idea?</label>
                                               <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                             </div>
                                             <div className="form-group">
                                             
                                              
                                              <img src="css/images/health.jpg" alt="..." className="img-thumbnail" style={{width:"100%"}} />
                                              <button id="addideaphoto" type="button" className="btn btn-secondary" style={{marginLeft:"0px",marginTop:"-10px"}}>add photo</button>

                                           
                                             </div>
                                             
                                            

                                            </form>
                                          
                                        </div>
                                        <div className="modal-footer" style={{backgroundColor:" white"}}>
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-danger">save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                                    

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