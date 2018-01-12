import React from "react";
import PropTypes from 'prop-types';

const LinksURL = props => (
  <div>
  <a href={props.GithubUrl} target="_blank"> 
    <span id='clickableAwesomeFont'>
      <i className="fa fa-github" aria-hidden="true" style={{color:"#65737e", fontSize: "40px", marginTop:"20px", marginLeft:"20px"}}>
      </i>
    </span>
  </a>
  <a href={props.LinkedInUrl} target="_blank"> 
    <span id='clickableAwesomeFont'>
      <i className="fa fa-linkedin" aria-hidden="true"style={{color:"#65737e",fontSize: "35px", marginLeft:"20px"}}>
      </i>
    </span>
  </a>
  <a href={props.VimeoUrl} target="_blank"> 
    <span id='clickableAwesomeFont'>
      <i className="fa fa-vimeo-square" aria-hidden="true" style={{color:"#65737e",fontSize: "35px", marginLeft:"20px"}}>
        </i>
    </span>
  </a>
  <a href={props.TwitterUrl} target="_blank"> 
    <span id='clickableAwesomeFont'>
      <i className="fa fa-twitter" aria-hidden="true" style={{color:"#65737e",fontSize: "35px", marginLeft:"20px"}}>
      </i>
    </span>
  </a>
  <a href={props.FacebookUrl} target="_blank"> 
    <span id='clickableAwesomeFont'>
      <i class="fa fa-facebook" aria-hidden="true" style={{color:"#65737e",fontSize: "35px", marginLeft:"20px"}}>
      </i>
    </span>
  </a>
  </div>
);


LinksURL.propTypes = {
  GithubUrl: PropTypes.string,
  LinkedInUrl: PropTypes.string,
  VimeoUrl: PropTypes.string,
  TwitterUrl: PropTypes.string,
  FacebookUrl: PropTypes.string
};

export default LinksURL;