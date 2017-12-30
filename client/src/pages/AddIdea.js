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
                    <div className="img-thumbnail mx-auto"style={{boxShadow: "1px 9px 20px grey"}}>

                      <img src="css/images/guy.jpeg" width="160" height="160" style={{marginLeft: "45px"}}/>
                      <div className="caption">
                        <p id="text">Bruno Smith</p> 
                        <p id="text2">Web Developer <br/> Front and Back end</p>
                      </div>
                      
                    </div>
                       <span id='clickableAwesomeFont'><i className="fa fa-github" aria-hidden="true" style={{color:"#65737e",fontSize: "40px", marginLeft:"20px"}}></i></span>
                      <span id='clickableAwesomeFont'><i className="fa fa-linkedin" aria-hidden="true"style={{color:"#65737e",fontSize: "35px", marginLeft:"20px"}}></i></span>
                      <span id='clickableAwesomeFont'><i className="fa fa-vimeo-square" aria-hidden="true" style={{color:"#65737e",fontSize: "35px", marginLeft:"20px"}}></i></span>
                      <span id='clickableAwesomeFont'><i className="fa fa-twitter" aria-hidden="true" style={{color:"#65737e",fontSize: "35px", marginLeft:"20px"}}></i></span>
                      <span id='clickableAwesomeFont'><i class="fa fa-facebook" aria-hidden="true"style={{color:"#65737e",fontSize: "35px", marginLeft:"20px"}}></i></span>

                  </div>
                 
                      <div className="col-md-6">
                        
                         
                         <p id="text3">Sarah Lee <br/>Hi, I would to know more about your application, I am interested in working with you</p>
                        
                         <p id="text4">Joshua Phils <br/> Hi Bruno, I have been working in a new idea that I would like to share with you. when are you available to speak?</p>
                       
                         <p id="text4">Zac Parker <br/> Hi Bruno, I have been working in a new idea that I would like to share with you. when are you available to speak?</p>
                       
                         <p id="text4">Tarra Sanders <br/> Hi Bruno, I have been working in a new idea that I would like to share with you. when are you available to speak?</p>
                       
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



  <section id="services">
      <div className="container">

        <div className="row">
           


              
                 <div className="col-md-3 ">
                
                   <div className="form-group">
                                          
                        <img src="css/images/health.jpg" alt="..." className="img-thumbnail" style={{width:"100%"}} />
                        <i className="fa fa-thumbs-o-up" aria-hidden="true">6</i>
                        <i className="fa fa-thumbs-o-down" aria-hidden="true" style={{marginLeft:"20px"}}>1</i>
                    
                      <div className="box">
                         <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                      </div>
                      
                   </div>                                                   
                    
                 </div>  


                 <div className="col-md-3 ">
                
                   <div className="form-group">
                                          
                        <img src="css/images/sports.jpg" alt="..." className="img-thumbnail" style={{width:"100%"}} />
                         <i className="fa fa-thumbs-o-up" aria-hidden="true"></i>
                        <i className="fa fa-thumbs-o-down" aria-hidden="true" style={{marginLeft:"20px"}}></i>
                    
                      <div className="box">
                         <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                      </div>
                      
                   </div>                                                   
                    
                 </div>      


                 <div className="col-md-3 ">
                
                   <div className="form-group">
                                          
                        <img src="css/images/books.png" alt="..." className="img-thumbnail" style={{width:"100%"}} />
                    
                      <div className="box">
                         <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                      </div>
                      
                   </div>                                                   
                    
                 </div>      


                   <div className="col-md-3 ">
                
                   <div className="form-group">
                                          
                        <img src="css/images/healthy.jpg" alt="..." className="img-thumbnail" style={{width:"100%"}} />
                    
                      <div className="box">
                         <p>Lorem ipsum donec id elit non mi porta gravida at eget metus.</p>
                      </div>
                      
                   </div>                                                   
                    
                 </div>  



                     

              </div>
            
        </div>

    
</section>
   









             <div className="container">
    <div className="row">
          
     


                  
                
                    <div className="col-md-4">
                        
                         
                         
                   </div>
              

</div>

</div>
</div>

)




  



 

export default AddIdea;