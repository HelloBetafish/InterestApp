import React from "react";
import Navbar from "../components/Navbar";

const AddIdea = () =>


<div>
<Navbar />

<div className="container">


<div id="section1">
<div id="photo" className="container">

  <div className="row">
    <div className="col-md-2">
   </div>
<div className="container" className="col-md-6">

        <div id="surveybox" style={{height: "60px", width: "110%", borderRadius: "10px", backgroundColor: "#e3c721", marginTop: "20px", marginLeft: "-20px",
     marginBottom: "20px"}}>
           <p id="ideatitle" style={{color:"white", textAlign: "center", fontFamily: "Raleway", fontSize: "25px",
    paddingTop:"14px"}}>ADD IDEA</p>
        </div>

    
<div style={{height:"400px",width:"110%",overflow:"auto",backgroundColor:"gray", marginTop:"20px", color:"white",scrollbarBaseColor:"gold", marginLeft:"-20px",fontFamily:"sans-serif",padding:"10px"}}>

         <form id="input" style={{width:"93%", marginLeft:"20px",marginBottom:"40px"}}>

             <div className="formName-group">
                 <label className="col-form-label" for="formGroupExampleInput2">Idea's Name</label>
                 <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Idea's Name"/>
               </div>
            
            <div className="form-group" >
                 <label class="col-form-label" for="formGroupExampleInput2">Time Frame</label>
                 <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Time Frame"/>
               </div>
               <div className="form-group">
                 <label className="col-form-label" for="formGroupExampleInput">What is your idea?</label>
                 <input type="text" className="form-control" id="formGroupExampleInput" placeholder="What is your idea?"/>
               </div>
                
               <div className="form-group">
                 <label className="col-form-label" for="formGroupExampleInput">Why is a good idea?</label>
                 <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
               </div>
              
               <div class="form-group">
                 <label class="col-form-label" for="formGroupExampleInput">Example label</label>
                 <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
               </div>
               <div class="form-group">
                 <label class="col-form-label" for="formGroupExampleInput2">Another label</label>
                 <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
               </div>
               <div className="form-group">
                 <label className="col-form-label" for="formGroupExampleInput">Example label</label>
                 <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
               </div>
               <div class="form-group">
                 <label class="col-form-label" for="formGroupExampleInput2">Another label</label>
                 <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
               </div>
               <div className="form-group">
                 <label className="col-form-label" for="formGroupExampleInput">Example label</label>
                 <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
               </div>
              
             </form>
</div>
 <div>
         <button id="submitidea" type="button" className="btn btn-danger" style={{marginTop:"20px",width:"110%", marginLeft:"-20px", marginBottom:"40px"}}>submit</button>
         </div>
</div>




    
    



    <div className="col-md-4">
    
      <div className="ideaphoto">
      <img style={{width:"90%",marginTop:"90px", marginLeft:"30px"}}  src="css/images/littleIdea.jpg" alt="upload" className="img-thumbnail"/>
      
     <p style={{marginBottom:"5px", marginTop:"-75px", marginLeft:"220px",fontSize:"20px", color:"orange"}} >SUBMITED</p>
      <div className="carousel" >
         <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                       <img className="d-block img-fluid"  style={{width:"90%",marginLeft:"30px"}} src="css/images/books.png" alt="First slide"/>
                    </div>
                  <div className="carousel-item">
                       <img class="d-block img-fluid" style={{width:"90%",marginLeft:"30px"}} src="css/images/kids.jpg" alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                      <img className="d-block img-fluid" style={{width:"90%",marginLeft:"30px"}} src="css/images/darkroom3.jpg" alt="Third slide"/>
                    </div>
                  </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                </div>
         </div>
         
      </div>
     
   </div>

</div>;
</div>

</div>


<section id="services">
 <div className="container">

  

</div>
</section>
</div>
</div>


    
        
  







export default AddIdea;