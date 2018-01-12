

import React from "react";
import "./Idea.css";


//Note: (...props) returns image below navebar. 
//TRY: deleting <main className= ... />
const Idea = props => 

<div className="ideaBox col-md-2">
                                          
                        <img src={props.photo} alt="..." className="img-thumbnail" style={{width:"100%"}} />
                        <p > <b>Author: </b> {props.Author} </p>
                        <p className="theTest"> <b>Idea Name: </b> {props.ideaName} </p>
                        <p> <b>Idea: </b> {props.whatIsIdea} </p>
                        <p> <b>Why: </b> {props.whyGoodIdea} </p>
                      <div className="box">
                           <span className="thumbsup" id='clickableAwesomeFont'><i className="fa fa-thumbs-up" aria-hidden="true">6</i></span>
                           <span className="thumbsdown" id='clickableAwesomeFont'><i className="fa fa-thumbs-down" aria-hidden="true" style={{marginLeft:"20px"}}>1</i></span>
                      </div>
                      
</div> 


export default Idea;