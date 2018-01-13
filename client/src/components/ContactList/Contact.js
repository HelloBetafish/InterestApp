import React from "react";
import PropTypes from 'prop-types';

export const Contact = props => 
  <a href={props.full_name} alt={props.full_name} onClick={() => props.onClick(props.id)}>
    <img src={props.photo} width="30" height="30" style={{marginLeft:"30px"}}/>
    <p style={{marginLeft:"90px", marginTop:"-20px"}}>{props.full_name} - {props.title}</p>
  </a>;

Contact.propTypes = {
  full_name: PropTypes.string,
  photo: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func
};