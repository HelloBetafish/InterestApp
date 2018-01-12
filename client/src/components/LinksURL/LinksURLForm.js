import React from "react";
import PropTypes from 'prop-types';

export const LinksURLForm = props => (

  <form id="LinksUrl" className="form-inline" style={{display:"none"}}>
    <ul className="list-group list-group-flush">

      <li className="list-group-item">
        <label className="sr-only" for="inlineFormGithub">Github</label>
        <div className="input-group">
          <span id='clickableAwesomeFont'><i className="fa fa-github" aria-hidden="true" style={{color:"#65737e",fontSize: "40px",marginTop:"20px", marginRight:"10px"}}></i></span>
          <input type="text" name="GithubUrl" value={props.GithubUrl} className="form-control" id="inlineFormGithub" onChange={props.handleInputChange} placeholder={props.UserGithubUrl}/>
        </div>
        <button type="submit" onClick={props.addLinkG} className="btn btn-danger btn-sm" style={{marginTop:"5px", float: "right"}}>Save</button>
      </li>

      <li className="list-group-item">
        <label className="sr-only" for="inlineFormLinkedIn">LinkedIn</label>
        <div className="input-group">
        <span id='clickableAwesomeFont'><i className="fa fa-linkedin" aria-hidden="true"style={{color:"#65737e",fontSize: "35px", marginRight:"10px"}}></i></span>
          <input type="text" name="LinkedInUrl" value={props.LinkedInUrl} className="form-control" id="inlineFormLinkedIn" onChange={props.handleInputChange} placeholder={props.UserLinkedInUrl}/>
        </div>
        <button type="submit" onClick={props.addLinkL} className="btn btn-danger btn-sm" style={{marginTop:"5px", float: "right"}}>Save</button>
      </li>

      <li className="list-group-item">
        <label className="sr-only" for="inlineFormVimeo">Vimeo</label>
        <div className="input-group">
        <span id='clickableAwesomeFont'><i className="fa fa-vimeo-square" aria-hidden="true" style={{color:"#65737e",fontSize: "35px", marginRight:"10px"}}></i></span>
          <input type="text" name="VimeoUrl" value={props.VimeoUrl} className="form-control" id="inlineFormVimeo" onChange={props.handleInputChange} placeholder={props.UserVimeoUrl}/>
        </div>
        <button type="submit" onClick={props.addLinkV} className="btn btn-danger btn-sm" style={{marginTop:"5px", float: "right"}}>Save</button>
      </li>

      <li className="list-group-item">
        <label className="sr-only" for="inlineFormTwitter">Twitter</label>
        <div className="input-group">
        <span id='clickableAwesomeFont'>
          <i className="fa fa-twitter" aria-hidden="true" style={{color:"#65737e",fontSize: "35px", marginRight:"10px"}}></i></span>
          <input type="text" name="TwitterUrl" value={props.TwitterUrl} className="form-control" id="inlineFormTwitter" onChange={props.handleInputChange} placeholder={props.UserTwitterUrl}/>
        </div>
        <button type="submit" onClick={props.addLinkT} className="btn btn-danger btn-sm" style={{marginTop:"5px", float: "right"}}>Save</button>
      </li>

      <li className="list-group-item">
        <label className="sr-only" for="inlineFormFacebook">Facebook</label>
        <div className="input-group">
        <span id='clickableAwesomeFont'><i className="fa fa-facebook" aria-hidden="true"style={{color:"#65737e",fontSize: "35px", marginRight:"10px"}}></i></span>
          <input type="text" name="FacebookUrl" value={props.FacebookUrl} className="form-control" id="inlineFormFacebook" onChange={props.handleInputChange} placeholder={props.UserFacebookUrl}/>
        </div>
        <button type="submit" onClick={props.addLinkF} className="btn btn-danger btn-sm" style={{marginTop:"5px", float: "right"}}>Save</button>
      </li>
    </ul>
  </form>);

  LinksURLForm.propTypes = {
    GithubUrl: PropTypes.string,
    LinkedInUrl: PropTypes.string,
    VimeoUrl: PropTypes.string,
    TwitterUrl: PropTypes.string,
    FacebookUrl: PropTypes.string,
    UserGithubUrl: PropTypes.string,
    UserLinkedInUrl: PropTypes.string,
    UserVimeoUrl: PropTypes.string,
    UserTwitterUrl: PropTypes.string,
    UserFacebookUrl: PropTypes.string,
    handleInputChange: PropTypes.func.isRequired,
    addLinkG: PropTypes.func.isRequired,
    addLinkL: PropTypes.func.isRequired,
    addLinkV: PropTypes.func.isRequired,
    addLinkT: PropTypes.func.isRequired,
    addLinkF: PropTypes.func.isRequired
  };
