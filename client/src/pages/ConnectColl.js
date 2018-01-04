import React from "react";
import Navbar from "../components/Navbar";
import "../style/connectColl.css";



const ConnectColl = () =>(

<div>
  <Navbar />
  
<div className="cd-fixed-bg cd-bg-1">

<div id="section1">
 <div id="photo" className="container">

<div className="row">
  <div  className="col-md-12">

   <h1 id="titleconnections" className="bounceInUp" style={{marginTop:"50px"}}>Connect or Collaborate</h1> 
  </div>
</div>






      <div className="radiobuttons">
        <label style={{color:"white"}}>
          <input type="radio" className="option-input radio" name="example"  / >
          Tech
        </label>
        <label>
          <input type="radio" className="option-input radio" name="example" />
          Art
        </label>
        <label>
          <input type="radio" className="option-input radio" name="example" />
          Science
        </label>
         <label>
          <input type="radio" className="option-input radio" name="example" />
          Entertainment
        </label>
         <label>
          <input type="radio" className="option-input radio" name="example" />
          Entrepreneurship
        </label>
        <button style={{marginTop:"-10px"}} type="button" className="btn btn-outline-danger">search</button>
      </div>







  <div className="row">
   
    <div className="col-md-3 zoom">


                <div className="img-thumbnail">
                      <img src="css/images/bethany.jpg" width="150" height="150" style={{marginLeft:"45px"}}/>
                    <div className="people">
                        <p id="texta">Bethany</p> 
                        <p id="textb">Web Developer <br/> Front and Back end <br/> MEETUP APPLICATION </p> 
                      
                    </div>   
                </div>
                <button style={{marginTop:"-20px", marginLeft:"50px"}} type="button" className="btn btn-outline-danger">Add to Contacts</button>
      
    </div>
    <div className="col-md-3 zoom">
            

             
                <div className="img-thumbnail">
                      <img src="css/images/tj.jpg" width="150" height="150" style={{marginLeft:"45px"}}/>
                    <div className="people">
                        <p id="texta">TJ</p> 
                        <p id="textb">Web Developer <br/> Front and Back end <br/> MEETUP APPLICATION </p>
                    </div>   
                </div>
                <button style={{marginTop:"-20px", marginLeft:"50px"}} type="button" className="btn btn-outline-danger">Add to Contacts</button>
              

    </div>

     <div className="col-md-3 zoom">
            

             
                <div className="img-thumbnail">
                      <img src="css/images/john.jpg" width="150" height="150" style={{marginLeft:"45px"}}/>
                    <div className="people">
                        <p id="texta">John</p> 
                        <p id="textb">Web Developer <br/> Front and Back end <br/> MEETUP APPLICATION </p>
                    </div>   
                </div>
                <button style={{marginTop:"-20px", marginLeft:"50px"}} type="button" className="btn btn-outline-danger">Add to Contacts</button>
              

    </div>

  
    <div className="col-md-3 zoom">
            

             
                <div className="img-thumbnail">
                      <img src="css/images/Jesse1.jpg" width="150" height="150" style={{marginLeft:"45px"}}/>
                    <div className="people">
                        <p id="texta">Jesse</p> 
                        <p id="textb">Web Developer <br/> Front and Back end <br/> MEETUP APPLICATION </p>
                    </div>   
                </div>
                <button style={{marginTop:"-20px", marginLeft:"50px"}} type="button" className="btn btn-outline-danger">Add to Contacts</button>
              

    </div>
  </div>
</div>


<div id="photo" className="container">
  <div className="row">
   
    <div className="col-md-3 zoom">


                <div className="img-thumbnail">
                      <img src="css/images/reyna2.jpg" width="150" height="150" style={{marginLeft:"45px"}}/>
                    <div className="people">
                        <p id="texta">Reyna</p> 
                        <p id="textb">Web Developer <br/> Front and Back end <br/> MEETUP APPLICATION </p>
                    </div>   
                </div>
                <button style={{marginTop:"-20px", marginLeft:"50px"}} type="button" className="btn btn-outline-danger">Add to Contacts</button>
          
      
    </div>
    <div className="col-md-3 zoom">
            

             
                <div className="img-thumbnail">
                      <img src="css/images/Emma.jpg" width="150" height="150" style={{marginLeft:"45px"}}/>
                    <div className="people">
                        <p id="texta">Emma</p> 
                        <p id="textb">Web Developer <br/> Front and Back end <br/> MEETUP APPLICATION </p>
                    </div>   
                </div>
                <button style={{marginTop:"-20px", marginLeft:"50px"}} type="button" className="btn btn-outline-danger">Add to Contacts</button>
              

    </div>

     <div className="col-md-3 zoom">
            

             
                <div className="img-thumbnail">
                      <img src="css/images/tim.jpg" width="150" height="150" style={{marginLeft:"45px"}}/>
                    <div className="people">
                        <p id="texta">Tim</p> 
                        <p id="textb">Web Developer <br/> Front and Back end <br/> MEETUP APPLICATION </p>
                    </div>   
                </div>
                <button style={{marginTop:"-20px", marginLeft:"50px"}} type="button" className="btn btn-outline-danger">Add to Contacts</button>
              

    </div>

  
    <div className="col-md-3 zoom">
            

             
                <div className="img-thumbnail">
                      <img src="css/images/zac.jpg" width="150" height="150" style={{marginLeft:"45px"}}/>
                    <div className="people">
                        <p id="texta">Zac</p> 
                        <p id="textb">Web Developer <br/> Front and Back end <br/> MEETUP APPLICATION </p>
                    </div>   
                </div>
                <button style={{marginTop:"-20px", marginLeft:"50px"}} type="button" className="btn btn-outline-danger">Add to Contacts</button>
              

    </div>
  </div>
</div>


<section id="services">
 <div className="container">

  
</div>
</section>
</div>
</div>
</div>



)



export default ConnectColl;