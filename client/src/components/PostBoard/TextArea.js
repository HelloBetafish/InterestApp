import React from "react";

export const TextArea = props =>
  <div className="form-group">
    <textarea value={props.postBody} name="postBody" onChange={props.handleInputChange} style={{ backgroundColor: "white",marginLeft:"20px", width:"92%"}} type="text" className="form-control" id="formGroupExampleInput" placeholder="" rows="20"/>
  </div>;