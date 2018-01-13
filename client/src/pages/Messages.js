import React from "react";
import Navbar from "../components/Navbar";
import "../style/connectColl.css";
import Footer from "../components/Footer";

const Messages = () =>

<div>
<Navbar />





   




<div className="col-md-12">

    <div className="col-md-2">
    <div style={{marginBottom:"30px",marginLeft:"50px",marginTop:"100px",height:"750px",width:"100%",overflow:"auto",backgroundColor:"#343d46",color:"white",scrollbarBaseColor:"gold",fontFamily:"sans-serif",padding:"10px"}}>
     <img src="css/images/bethany.jpg" width="70" height="70" style={{marginBottom:"10px",marginTop:"15px", borderRadius:"50px",marginLeft:"70px"}}/>
             <p style={{fontSize:"14px",marginLeft:"50px",color: "white"}}>Bethany Pfeister</p>
             <img src="css/images/tj3.jpg" width="70" height="70" style={{marginTop:"20px",marginLeft:"70px",borderRadius:"50px"}}/>
             <p style={{fontSize:"14px",marginBotton:"30px",marginLeft:"60px",color: "white"}}>Terry Stephens</p>
             <img src="css/images/jesse.jpg" width="70" height="70" style={{marginTop:"25px",marginLeft:"70px",borderRadius:"50px"}}/>
             <p style={{fontSize:"14px",marginBotton:"30px",marginLeft:"60px",color: "white"}}>Jesse Forte</p>
             <img src="css/images/Emma.jpg" width="70" height="70" style={{marginTop:"25px",marginLeft:"70px",borderRadius:"50px"}}/>
             <p style={{fontSize:"14px",marginBotton:"30px",marginLeft:"60px",color: "white"}}>Emma Sander</p>
             <img src="css/images/john.jpg" width="70" height="70" style={{marginTop:"25px",marginLeft:"70px",borderRadius:"50px"}}/>
             <p style={{fontSize:"14px",marginBotton:"30px",marginLeft:"60px",color: "white"}}>John Brungs</p>
             <img src="css/images/zac.jpg" width="70" height="70" style={{marginTop:"25px",marginLeft:"70px",borderRadius:"50px"}}/>
             <p style={{fontSize:"14px",marginBotton:"30px",marginLeft:"60px",color: "white"}}>Zac Johnson</p>
             <img src="css/images/reyna2.jpg" width="70" height="70" style={{marginTop:"25px",marginLeft:"70px",borderRadius:"50px"}}/>
             <p style={{fontSize:"14px",marginBotton:"30px",marginLeft:"60px",color: "white"}}>Reyna Perez</p>

    </div>
      




    </div>
    


     
     
      <div id="computer" className="col-md-6"style={{marginTop:"-720px",marginLeft:"30%"}}>
       
        <div id="messagebox" className="col-md-12">
            <div style={{marginTop:"20px",height:"465px",width:"100%",overflow:"auto",backgroundColor:"white",color:"white",scrollbarBaseColor:"gold",fontFamily:"sans-serif",padding:"10px"}}>
                  <img src="css/images/Emma.jpg" width="70" height="70" style={{marginBottom:"10px",marginTop:"15px", borderRadius:"50px",marginLeft:"70px"}}/>
                 <p style={{fontSize:"14px",marginLeft:"50px",color: "black"}}>Emma Sanders - January 1st,2018 03:00pm <br/> Hi Reyna how are you? I really like your  ice cream app I would like to know more about it </p>
                 <img src="css/images/reyna2.jpg" width="70" height="70" style={{marginTop:"20px",marginLeft:"70px",borderRadius:"50px"}}/>
                 <p style={{fontSize:"14px",marginBotton:"30px",marginLeft:"60px",color: "black"}}>January 1st,2018 03:250pm <br/>Hi Emma, nice to hear you like my application, what would you like to know about it?</p>
                 <img src="css/images/Emma.jpg" width="70" height="70" style={{marginTop:"25px",marginLeft:"70px",borderRadius:"50px"}}/>
                 <p style={{fontSize:"14px",marginBotton:"30px",marginLeft:"60px",color: "black"}}>Emma Sanders - January 1st,2017 04:00pm <br/>I would like to know if you would like assistance in building it I have experience with back end, I would like to know more about who will be your target because I also my family have icecream stores that I am sure they will be interested</p>
                 <img src="css/images/reyna2.jpg" width="70" height="70" style={{marginTop:"25px",marginLeft:"70px",borderRadius:"50px"}}/>
                 <p style={{fontSize:"14px",marginBotton:"30px",marginLeft:"60px",color: "black"}}>January 2nd, 2018<br/>I am interested in small business with not need to add more functions, I am looking for 2 more people to be part of my team. Where are you located, do you have a portfolios?</p>
                 <img src="css/images/Emma.jpg" width="70" height="70" style={{marginTop:"25px",marginLeft:"70px",borderRadius:"50px"}}/>
                 <p style={{fontSize:"14px",marginBotton:"30px",marginLeft:"60px",color: "black"}}>Emma Sanders</p>
                 <img src="css/images/reyna2.jpg" width="70" height="70" style={{marginTop:"25px",marginLeft:"70px",borderRadius:"50px"}}/>
                 <p style={{fontSize:"14px",marginBotton:"30px",marginLeft:"60px",color: "black"}}></p>
                 <img src="css/images/Emma.jpg" width="70" height="70" style={{marginTop:"25px",marginLeft:"70px",borderRadius:"50px"}}/>
                 <p style={{fontSize:"14px",marginBotton:"30px",marginLeft:"60px",color: "black"}}>Emma Sanders</p>

             </div>
      
        
         
        
          <div id="box1"> 
            <div className="form-group">

          
            <textarea className="form-control" id="exampleTextarea" rows="3" style={{height:"40%"}}>


            </textarea>
          </div>
          </div>
          <div className="col-md-2 messagesButtons">
            <span id='clickableAwesomeFont'><i className="fa fa-upload" aria-hidden="true"style={{marginLeft:"80px", fontSize: "30px", color: "black", marginTop: "30px"}} ></i></span>
            <button type="button" id="reply" className="btn btn-danger"data-toggle="modal" data-target="#exampleModal" style={{marginLeft:"160px", marginTop:"-38px"}}>reply</button>
            <button type="button" id="delete" className="btn btn-light"style={{marginLeft:"230px", marginTop:"-80px"}}>delete</button>
          </div>
      
         
        </div>

             
          </div>
    
    
   

  </div>;
  <Footer />
</div>

export default Messages; 