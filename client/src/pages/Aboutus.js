import React from "react";
import Navbar from "../components/Navbar";
import "../style/Aboutus.css";

const AboutUs = () =>

<div>

<div className="background">
<div className="cards">
  <div className="imgBox"><img src="css/images/people4a.jpg" style={{width:"100%",height:"100%"}}/></div>
    <div className="details">
      <div className="content">

       <h3 style={{color:"black"}}>You are a one step <br/><span>to make it real!</span></h3>

      </div>
    </div>  
</div>


<div className="boxy" col-md-12>
 
 <div className="row">





	 <div className="flip">
	   <div className="flip connect" >
	      <div className="front"  ><p >CONNECT</p></div>
	      <div className="back"><p>This is a meeting space to find like-minded creatives. Meet people like you!.</p></div>
	   </div>
	 </div>

	 <div className="flip">
	   <div className="flip collaborate">
	     <div className="front"><p >COLLABORATE</p></div>
	     <div className="back"><p>Pull together your knowledge with their experiences.</p></div>
	   </div>
	 </div>


	 <div className="flip">
	   <div className="flip innovate">
	     <div className="front"><p>INNOVATE</p></div>
	     <div className="back"><p> Share your ideas and see how it resounds with the community.</p></div>
	    </div>
	   </div>
   </div>
 </div>



 </div>



 </div>





		










export default AboutUs; 