import React from "react";
import PropTypes from 'prop-types';
import "./FileDisplay.css";

export const FileDisplay = props => (

  <ul style={{listStyleType: "none"}}>
    <li><a href={props.fileUrl} id={props.id} target="_blank">{props.fileName}</a>
      <span className="delete-btn" data-id={props.id} onClick={props.handleClick}>
      ✗
      </span>
    </li>
   </ul> 
);

FileDisplay.propTypes = {
  id: PropTypes.string.isRequired,
  fileUrl: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};
