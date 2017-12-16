import React from "react";

const AddIdea = () =>
<div className="container">
  <div className="row">
    <div id="transparentbox" className="col-md-6">
      <div id="surveybox">
        <p id="ideatitle">ADD IDEA</p>
      </div>
      <form id="input">
        <div className="form-group" className="form-control">
          <label className="col-form-label" for="formGroupExampleInput">Idea Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Idea name"/>
        </div>
        <div className="form-group">
          <label className="col-form-label" for="formGroupExampleInput2">Time Frame</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Time Frame"/>
        </div>
         <div className="form-group">
          <label className="col-form-label" for="formGroupExampleInput2">What is your idea?</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
        </div>
        <div className="form-group">
          <label className="col-form-label" for="formGroupExampleInput">Why is a good idea?</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
        </div>
        <div className="form-group">
          <label className="col-form-label" for="formGroupExampleInput2">Another label</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
        </div>
        <div className="form-group">
          <label className="col-form-label" for="formGroupExampleInput">Example label</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
        </div>
        <div className="form-group">
          <label className="col-form-label" for="formGroupExampleInput2">Another label</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
        </div>
        <div className="form-group">
          <label className="col-form-label" for="formGroupExampleInput">Example label</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
        </div>
         <div className="form-group">
          <label className="col-form-label" for="formGroupExampleInput">Example label</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input"/>
        </div>
      </form>
      <button id="submitidea" type="button" className="btn btn-warning">submit</button>
    </div>
  
    <div id= "idea" className="col-md-4">
      <p id="textsubmited">SUBMITTED</p>
    
      <div  pauseOnHover={false}  id="carousel">
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="item active">
              <img src="css/images/healthy.jpg" alt="Los Angeles"/>
            </div>
            <div className="item">
              <img src="css/images/swimming.jpg" alt="Chicago"/>
            </div>
            <div className="item">
              <img src="css/images/darkroom3.jpg" alt="New York"/>
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
          </a>
        </div>

        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="item active">
              <img src="css/images/healthy.jpg" alt="Los Angeles"/>
            </div>
            <div className="item">
              <img src="css/images/swimming.jpg" alt="Chicago"/>
            </div>
            <div className="item">
              <img src="css/images/darkroom3.jpg" alt="New York"/>
            </div>
          </div>
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
;

export default AddIdea ;