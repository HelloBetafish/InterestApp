import React from "react";
import Navbar from "../components/Navbar";

const CreateAcct = () =>(

<div>
<Navbar />


<div className="container">
<div className="row">

<div id="addphoto" className="col-md-3" style={{marginTop: "78px"}}>
  <img src="css/images/addphoto.png" alt="upload" className="img-thumbnail"/>
</div>



  <div id="backgroundphoto" className="col-md-6" style={{height:"100%", width:"100%", backgroundColor:"gray", marginTop:"80px",marginBottom:"-20px", borderRadius: "5px"}}> 
    <div className="bulbsphoto" >
          <div id="accountbox" style={{height: "60px", width: "93%", borderRadius: "10px", backgroundColor: "#f9bd05", marginTop: "20px",marginLeft: "20px",
     marginBottom: "20px"}}>
            <p id="accounttitle" style={{color:"white", textAlign: "center", fontFamily: "Raleway", fontSize: "25px",
    paddingTop:"14px"}}>CREATE ACCOUNT</p>
          </div>
        <form id="input" style={{marginLeft: "20px", marginRight: "30px", width: "95%"}}>
            <div className="form-group">
              <label class="col-form-label" for="formGroupExampleInput">Username</label>
              <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Username"/>
            </div>
            <div className="form-group">
              <label className="col-form-label" for="formGroupExampleInput2">Password</label>
              <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=" 8 charateres minimun at least one lower case and one upper case"/>
            </div>
              
             
             
             <div className="form-group">
                <label className="col-form-label" for="formGroupExampleInput2">Full Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Full Name"/>
             </div>
             <div className="form-group">
                <label className="col-form-label" for="formGroupExampleInput">Email</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Email"/>
             </div>
             <div className="form-group">
                <label className="col-form-label" for="formGroupExampleInput">Country</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Country"/>
             </div>
             <div className="form-group">
                <label className="col-form-label" for="formGroupExampleInput">Skills</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Skills"/>
             </div>
             <div className="form-group">
                <label className="col-form-label" for="formGroupExampleInput2">Experience</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Experience"/>
             </div>
        </form>
             

         <button id="submitaccount" type="button" className="btn btn-danger" style={{marginLeft: "20px", marginRight: "30px", marginTop: "10px", marginBottom: "30px", width: "95%"}}>submit</button>

    </div>
  </div>
 </div>
 </div>
 </div>
 )







  
  








export default CreateAcct ;