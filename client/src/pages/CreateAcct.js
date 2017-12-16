import React from "react";

const CreateAcct = () =>
<div className="container">
  <div className="row">
    <div id="addphoto" className="col-md-3">
      <img src="css/images/addphoto.png" alt="..." className="img-thumbnail"/>
    </div>
    <div id="transparentbox2" className="col-md-6">
      <div id="accountbox">
        <p id="accounttitle">CREATE ACCOUNT</p>
      </div>
      <form id="input">
        <div className="form-group" className="form-control">
          <label className="col-form-label" for="formGroupExampleInput">Username</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="input"/>
        </div>
        <div className="form-group">
          <label className="col-form-label" for="formGroupExampleInput2">Password</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder=" 8 charateres minimun at least one lower case and one upper case"/>
        </div>
        <div className="form-group">
          <label className="col-form-label" for="formGroupExampleInput2">Full Name</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="input"/>
        </div>
        <div className="form-group">
          <label className="col-form-label" for="formGroupExampleInput">Email</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="input"/>
        </div>
        <div className="form-group">
          <label className="col-form-label" for="formGroupExampleInput2">Country</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="input"/>
        </div>
        <div className="form-group">
          <label className="col-form-label" for="formGroupExampleInput">Skills</label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="input"/>
        </div>
        <div className="form-group">
          <label className="col-form-label" for="formGroupExampleInput2">Experience</label>
          <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="input"/>
        </div>
        <button id="submitaccount" type="button" className="btn btn-danger">submit</button>
      </form>
    </div>
  </div>
</div>
;

export default CreateAcct ;