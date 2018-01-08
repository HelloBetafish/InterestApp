import React from "react";
import PropTypes from 'prop-types';
import "./ImgCard.css";

const ImgCard = props => (

  <div className="img-thumbnail zoom">
    <img src={props.photoURL} alt="Profile Pic" width="150" height="150" style={{marginLeft:"45px"}}/>
      <div className="people">
        <p id="texta">{props.full_name}</p> 
        <p id="textb">{props.title}<br/>{props.skills}</p> 
      </div>   
  </div>
);

ImgCard.propTypes = {
  photoURL: PropTypes.string,
  full_name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  skills: PropTypes.string.isRequired
};

export default ImgCard;