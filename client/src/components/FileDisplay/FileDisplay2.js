import React from "react";
import PropTypes from 'prop-types';
import "./FileDisplay.css";

export const FileDisplay2 = props => (

  <ul style={{listStyleType: "none"}}>
    <li><a href={props.fileUrl} id={props.id} target="_blank">{props.fileName}</a>
    </li>
   </ul> 
);

FileDisplay2.propTypes = {
  id: PropTypes.string.isRequired,
  fileUrl: PropTypes.string.isRequired,
  fileName: PropTypes.string.isRequired,
};

