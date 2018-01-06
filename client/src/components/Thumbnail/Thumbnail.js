import React from "react";

export const Thumbnail = (props) => 


	
	<div className="img-thumbnail mx-auto"style={{boxShadow: "1px 9px 20px grey"}}>

        <img src="css/images/guy.jpeg" width="200" height="200" style={{marginLeft: "70px"}}/>
           
           <div className="caption">

                    <p id="text"> {props.full_name} </p> 
                    <p id="text2">Web Developer <br/> Front and Back end <br/> ICE CREAM APPLICATION </p>

            </div>

                </div>



        
export default Thumbnail;