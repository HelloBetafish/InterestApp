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
    <span className="envelope" id='clickableAwesomeFont'><i className="fa fa-envelope fa-4x " style={{marginLeft:"50px", fontSize: "40px", color: "black", marginTop: "170px"}}></i></span>
     <p id="pb"> 4 New</p>
     <span className="openenvelope" id='clickableAwesomeFont'><i className="fa fa-envelope-open fa-4x " style={{marginLeft:"30px",fontSize: "40px", color: "black"}}></i></span>
     <p id="pb">Read</p>
     <span className="noread" id='clickableAwesomeFont'><i className="fa fa-envelope-square fa-4x " style={{marginLeft:"30px",fontSize: "40px", color:"black"}}></i></span>
     <p id="pb" style={{marginLeft:"100px",fontSize: "15px", color: "black"}}>No Read</p>
  </div>

      <div id="computer" class="col-md-6" >
        <div id="messagebox" class="col-md-8">
          <span className="messageicon"><i className="fa fa-envelope fa-4x " style={{ marginLeft:"-15px",fontSize: "40px", color:"white"}}></i></span>
          <h2 id="messageppp">Message Box</h2>
          <div id="box">
            <p id="messagep">Keep your messages organized</p>
          </div>
          <div className="col-md-2 messagesButtons">
            <button type="button" id="reply" className="btn btn-danger"data-toggle="modal" data-target="#exampleModal" style={{marginLeft:"220px", marginTop:"-8px"}}>reply</button>
            <button type="button" id="keep" className="btn btn-warning" style={{marginLeft:"295px", marginTop:"-65px"}}>keep</button>
            <button type="button" id="delete" className="btn btn-light"style={{marginLeft:"370px", marginTop:"-115px"}}>delete</button>
          </div>
        </div>

          <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content"style={{backgroundColor:" #65737e"}}>
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel"style={{fontSize:"20px",color:"white",marginLeft:"40%"}}>Reply</h5>

                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body" style={{backgroundColor:" white"}}>
                                              <form id="input" style={{width:"93%", marginLeft:"20px",marginBottom:"40px"}}>

                                             <div className="formName-group">
                                               <label className="col-form-label" for="formGroupExampleInput2"style={{color:"#65737e"}}>to</label>
                                               <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
                                             </div>
                                          
                                          
                                             <div className="form-group">
                                               <label className="col-form-label" for="formGroupExampleInput" style={{color:"#65737e"}}>cc</label>
                                               <input type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
                                             </div>
                                              
                                               <div className="formName-group">
                                               <label className="col-form-label" for="formGroupExampleInput2"style={{color:"#65737e"}}>subject</label>
                                               <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=""/>
                                             </div>
                                          
                                             <div className="form-group">
                                               <label for="exampleFormControlTextarea1"style={{color:"#65737e"}}></label>
                                               <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                             </div>
                                             <div className="form-group">

                                             <a href="attach" alt="attach">
                                             <p alt="attach"> attach</p>
                                            </a>
                                              
                                             </div>
                                             
                                            

                                            </form>
                                          
                                        </div>
                                        <div className="modal-footer" style={{backgroundColor:" white"}}>
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Discard</button>
                                            <button type="button" className="btn btn-danger">send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
      </div>
    </div>

</div>;
</div>
export default ConnectColl; 