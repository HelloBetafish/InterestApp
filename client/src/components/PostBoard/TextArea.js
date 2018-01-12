import React from "react";

export const TextArea = props =>
  <div className="form-group">
    <textarea maxlength="500" type="text" className="form-control" placeholder="(500 characters maximum)" rows="5" {...props} />
  </div>;