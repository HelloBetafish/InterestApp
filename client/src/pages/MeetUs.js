import React, {Component} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import "../style/MeetUs.css";

class MeetUs extends Component
{
  render() {
    return(
      <div>
      <Navbar/>
      <h1 className="display-3" align="center" style={{marginTop:"20px"}}>Meet the team!</h1>
      <div className="barmeetus">
       <p className="lead" align="center" style={{color:"white", fontSize:"15px",paddingTop:"15px"}}>Our team has taken time to make this experience meaningful, user firendly and an opportunity to connect with the right team!</p>
        </div>
     
      
      
      <br/>
     <div className=".cd-fixed-bg.cd-bg-2"> 
     

<div id="demo" className="carousel slide" data-ride="carousel" style={{backgroundColor:"#343d46"}}>
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
     <li data-target="#demo" data-slide-to="3"></li>
  </ul>
<div className="carousel-inner">
    <div className="carousel-item active">
      <img id="photous" src="css/images/bethany.jpg" alt="Bethany" width="300" height="330" style={{marginTop:"20px"}}/>
      <div className="carousel-caption">     
         <h5 className="card-title" style={{fontSize:"20px",textAlign:"center",color:"black",marginTop:"-5px"}}>Bethany Pfeister</h5>
          <h6  style={{marginTop:"10px",color:"white"}}> 
          <li >Bethany is a linguistic expert.</li>
          <li>She has worked on all ends of our app</li> 
          <li>Bethany is a french speaker and an amazing human!</li></h6>
      
      </div>   
    </div>


    <div className="carousel-item">    
      <img id="photous" src="css/images/reyna.jpg" alt="Reyna" width="300" height="330"style={{marginTop:"20px"}}/>      
      <div className="carousel-caption">
          <h5 className="card-title" style={{fontSize:"20px",textAlign:"center",color:"black"}}>Reyna Perez</h5>
          <h6  style={{marginTop:"20px",color:"white"}}><li>Reyna is a marathon runner, who loves to travel and speaks italian.</li>
          <li>She speaks Italian, Spanish and English. She is a graphic designer, passionate about art and photography. </li> 
          <li>She has been a front end guru taking care of the design of the project.</li></h6>
      </div>  
    </div>


    <div className="carousel-item">
      <img id="photous" src="css/images/Jesse.jpg" alt="Jesse" width="300" height="350"style={{marginTop:"20px"}}/>
      <div className="carousel-caption">
         <h5 className="card-title" style={{fontSize:"20px",textAlign:"center",color:"black",marginTop:"-30px"}}>Jesse Forte</h5>
          <h6  style={{marginTop:"10px",color:"white"}}><li>Jesse is an author, speaker and worldwide traveler.</li>
          <li> He is passionate about health and wellness.</li>
          <li> He has served as a back end programmer and project manager of the Interest App, <br/>which was his senior thesis in college.</li>
          <li> He is extremely thankful to work with an amazing team who has committed excellence to this app!</li></h6>
      </div>  
    </div>



    <div className="carousel-item">
      <img id="photous" src="css/images/tj3.jpg" alt="Terry" width="300" height="350"style={{marginTop:"20px"}}/>
      <div className="carousel-caption">
         <h5 className="card-title" style={{fontSize:"20px",textAlign:"center",color:"black"}}>Terry Stephens</h5>
          <h6  style={{marginTop:"20px",color:"white"}}><li>TJ is an active runner, lifter and tends to feel great and ready to work after pumping iron. </li>
          <li>TJ has served as our back and front end programmer, taking care of big and little issues from routing,<br/> login information and launching.ted excellence to this app!</li></h6>          
      </div> 
    </div>
  </div>
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>










      </div>
      <Footer/>
      </div>














 






    );
  }
}

export default MeetUs;