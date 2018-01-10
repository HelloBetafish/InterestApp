import React from "react";
import PropTypes from 'prop-types'
import "./AddContactBtn.css";

const AddContactBtn = props => (
<button id="botones" style={{marginTop:"0px", marginLeft:"50px", marginBottom:"50px"}} type="button" className="btn btn-danger" data-id={props.id} onClick={props.handleClick}>Add to Contacts</button>
);

AddContactBtn.propTypes = {
  handleClick: PropTypes.func.isRequired,
  id: PropTypes.func.isRequired
};

export default AddContactBtn;