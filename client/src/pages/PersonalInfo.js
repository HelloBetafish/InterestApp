import React from "react";
import Navbar from "../components/Navbar";
import "../style/connectColl.css";

const AddIdea = () =>(


<div>
<Navbar />


<div id="section1">
          <div id="photo" className="container">
              <div className="row">
              
              
              <div className="col-md-3">
                    <div className="img-thumbnail mx-auto"style={{boxShadow: "1px 9px 20px grey",marginTop:"40px"}}>

                      <img src="css/images/guy.jpeg" width="160" height="160" style={{marginLeft: "45px"}}/>
                      <div className="caption">
                        <p id="text">Bruno Smith</p> 
                        <p id="text2">Web Developer <br/> Front and Back end</p>
                      </div>
                      
                    </div>
                       <span id='clickableAwesomeFont'><i className="fa fa-github" aria-hidden="true" style={{color:"#65737e",fontSize: "40px",marginTop:"20px", marginLeft:"10px"}}></i></span>
                      <span id='clickableAwesomeFont'><i className="fa fa-linkedin" aria-hidden="true"style={{color:"#65737e",fontSize: "35px", marginLeft:"20px"}}></i></span>
                      <span id='clickableAwesomeFont'><i className="fa fa-vimeo-square" aria-hidden="true" style={{color:"#65737e",fontSize: "35px", marginLeft:"20px"}}></i></span>
                      <span id='clickableAwesomeFont'><i className="fa fa-twitter" aria-hidden="true" style={{color:"#65737e",fontSize: "35px", marginLeft:"20px"}}></i></span>
                      <span id='clickableAwesomeFont'><i class="fa fa-facebook" aria-hidden="true"style={{color:"#65737e",fontSize: "35px", marginLeft:"20px"}}></i></span>

                  </div>
                 
                      <div className="col-md-6">
                        <div className="backgroundbox">
                        
                         
                           <p id="text3">Sarah Lee <br/>Hi, I would to know more about your application, I am interested in working with you</p>
                          
                           <p id="text4">Joshua Phils <br/> Hi Bruno, I have been working in a new idea that I would like to share with you. when are you available to speak?</p>
                         
                           <p id="text4">Zac Parker <br/> Hi Bruno, I have been working in a new idea that I would like to share with you. when are you available to speak?</p>
                         
                           <p id="text4">Tarra Sanders <br/> Ey Bruno, I have been working in a new idea that I would like to share with you. when are you available to speak?</p>

                          <div className="form-group">
                         <input style={{ backgroundColor: "white",marginLeft:"20px", width:"92%"}} type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
                         </div>
                          <button type="button" id="keep" className="btn btn-warning" style={{marginLeft:"425px", marginTop:"5px"}}>post</button>
                         



                        </div>
                         
                      </div>

                  

                  <div className="col-md-3">
                     <div className="boardann"></div>
                     <div className="boardann"></div>
                     <div className="boardann"></div>
                     <div className="boardann"></div>
                  </div>

                </div>
          </div>
</div>




      <div className="container">
         <div id="addedtitle">
            <h5 style={{fontSize:"20px",color:"white"}}>Added Ideas</h5>
         </div>

         <hr/>
            
      
         <div className="row" id="boxbox">
         
               
                   <div className="form-group" className="col-md-3 ">
                                          
                        <img src="css/images/darkroom3.jpg" alt="..." className="img-thumbnail" style={{width:"100%"}} />
                       
                      <div className="box">
                         <p style={{fontSize:"11px"}}>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                           <span className="thumbsup" id='clickableAwesomeFont'><i className="fa fa-thumbs-up" aria-hidden="true">6</i></span>
                           <span className="thumbsdown" id='clickableAwesomeFont'><i className="fa fa-thumbs-down" aria-hidden="true" style={{marginLeft:"20px"}}>1</i></span>
                      </div>
                      
                   </div>                                                   
                    
                 


                
                
                   <div className="form-group" className="col-md-3 ">
                                          
                        <img src="css/images/sports.jpg" alt="..." className="img-thumbnail" style={{width:"100%"}} />
                        
                      <div className="thumbs-component thumbs thumbs-horizontal animated unrated"style={{color:"black"}}>
                         <div className="nf-svg-button-wrapper thumb-container thumb-up-container"style={{color:"black"}}>
                          <a role="link" data-rating="2" tabindex="0" className="nf-svg-button simpleround" style={{color:"black"}}></a>
                         </div>
                      </div>

                      <div className="box">
                        <p style={{fontSize:"11px"}}>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                        <i className="fa fa-thumbs-up" aria-hidden="true">7</i>
                        <i className="fa fa-thumbs-down" aria-hidden="true" style={{marginLeft:"20px"}}></i>
                      </div>
                      
                   </div>                                                   
                    
                 


                
                   <div className="form-group" className="col-md-3 ">
                                          
                        <img src="css/images/books.png" alt="..." className="img-thumbnail" style={{width:"100%"}} />
                    
                      <div className="box">
                        <p style={{fontSize:"11px"}}>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                        <span className="thumbsup" id='clickableAwesomeFont'><i className="fa fa-thumbs-up" aria-hidden="true">5</i></span>
                        <span className="thumbsdown" id='clickableAwesomeFont'><i className="fa fa-thumbs-down" aria-hidden="true" style={{marginLeft:"20px"}}>2</i></span>
                      </div>
                      
                   </div>                                                   
                    
                


                 
                
                   <div className="form-group" className="col-md-3 ">
                                          
                        <img src="css/images/healthy.jpg" alt="..." className="img-thumbnail" style={{width:"100%"}} />
                    
                      <div className="box">
                        <p style={{fontSize:"11px"}}>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                        <span className="thumbsup" id='clickableAwesomeFont'><i className="fa fa-thumbs-up" aria-hidden="true">11</i></span>
                           <span className="thumbsdown" id='clickableAwesomeFont'><i className="fa fa-thumbs-down" aria-hidden="true" style={{marginLeft:"20px"}}>1</i></span>
                      </div>
                      
                   </div>                                                   
                    

              </div> 
               <hr/>      

              </div>
            
       
          
    

   









             <div className="container">
    <div className="row">
          
     


                  
                
                    <div className="col-md-4">
                        
                         
                         
                   </div>
              

</div>

</div>
</div>

)




  



 

export default AddIdea;