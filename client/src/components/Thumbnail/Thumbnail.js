import React from "react";

export const Thumbnail = props => (


	
	<div className="img-thumbnail mx-auto"style={{boxShadow: "1px 9px 20px grey"}}>

        <img src={props.photoURL} width="200" height="200" style={{marginLeft: "70px"}}/>
           
           <div className="caption text-center">

                    <p id="text"> {props.full_name} </p> 
                    <strong> {props.title} </strong> 
                    <p id="text2">{props.skills}</p>

            </div>

                </div>


)
        
