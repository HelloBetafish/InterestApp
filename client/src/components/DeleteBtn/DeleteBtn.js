import React from "react";
import PropTypes from 'prop-types'
import "./DeleteBtn.css";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <span className="delete-btn" data-id={props.id} onClick={props.handleClick}>
    ✗
  </span>
);

export default DeleteBtn;