import React, {Component} from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

class MeetUs extends Component
{
  render() {
    return(
      <div>
      <Navbar />
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3" align="center">Meet the team!</h1>
          <p className="lead" align="center">Our team has taken time to make this experience meaningful, user firendly and an opportunity to connect with the right team!</p>
        </div>
      </div>
      
      <br/>
      
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img className="d-block img-fluid" src="css/images/bethany.jpg" alt="First slide" align="center" style={{width:"150px", height:"200px"}}/>
          <h5 className="card-title" align="center">Bethany Pfeister</h5>
          <h6 align="margin-left" style={{width:"10px"}}> <li>Bethany is a linguistic expert.</li>
          <li>She has worked on all ends of our app</li> 
          <li>Bethany is a french speaker and an amazing human!</li></h6>
      
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="css/images/reyna.jpg" alt="Second slide" align="center" style={{width:"150px", height:"200px"}}/>
            <h5 className="card-title" align="center">Reyna Perez</h5>
          <h6 align="margin-left" style={{width:"10px"}}><li>Reyna is a marathon runner, who loves to travel and speaks italian.</li>
          <li>She speaks Italian, Spanish and English. She passionate about art and photography. </li> 
          <li>She has been a front end guru taking care of the design of the project.</li></h6>
          </div>
           <div className="carousel-item">
            <img className="d-block img-fluid" src="css/images/jesse.jpg" alt="Fourth slide" align="center" style={{width:"150px", height:"200px"}}/>
            <h5 className="card-title" align="center">Jesse Forte</h5>
          <h6 align="margin-left" style={{width:"10px"}}><li>Jesse is an author, speaker and worldwide traveler.</li>
          <li> He is passionate about health and wellness.</li>
          <li> He has served as a back end programmer and project manager of the Interest App, which was his senior thesis in college.</li>
          <li> He is extremely thankful to work with an amazing team who has committed excellence to this app!</li></h6>
          </div>
          <div className="carousel-item">
            <img className="d-block img-fluid" src="css/images/tj.jpg" alt="Third slide" align="center" style={{width:"150px", height:"200px"}}/>
            <h5 className="card-title" align="center">Terry Stephens</h5>
          <h6 align="margin-left" style={{width:"10px"}}><li>TJ is an active runner, lifter and tends to feel great and ready to work after pumping iron. </li>
          <li>TJ has served as our back and front end programmer, taking care of big and little issues from routing, login information and launching.ted excellence to this app!</li></h6>
          
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
    );
  }
}

export default MeetUs;