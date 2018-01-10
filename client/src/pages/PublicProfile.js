import React, {Component} from "react";
import ReactFilestack, { client } from 'filestack-react';
import Navbar from "../components/Navbar";
import "../style/connectColl.css";
import API from "../utils/API";
import { Thumbnail, Thumbnail2 } from "../components/Thumbnail";
import Idea from "../components/Idea";

class PublicProfile extends Component
{
  state = 
  {
    user: {},
   // idea: {},
    ideas: [],
    ideas2: [],
    IdOfSignedUser: ""

  }

  componentDidMount() 
  {

      this.loadLoggedUsers();
      //this.getAllIdeas();
  }

  //ReUse: Get Id of logged in user
  loadLoggedUsers = () => 
  {
    
      API.getIdOfLoggedInUser().then(res =>
        
        this.setState({ IdOfSignedUser: res.data[0].IdOfSignedUser }, this.getUser(res.data[0].IdOfSignedUser) )

        ).catch(err => console.log(err))

  };

  //ReUse:  1)We find the signed in user by using the (id) obtained from (signin) collection.
  //        Then we return the object of the signin user. Then obtain (idea)field (id).
  //        2)we also obtain signIn user's field (idea) which is an array of idea objects
  getUser = (id) =>
  {
    
   
    API.getUser(id).then(res => 
          this.setState({ user: res.data, ideas: res.data.idea }, console.log(res.data.idea[0]))
          ).catch(err => console.log(err))
    
  };
  
  //We use id parameter (associtated with user with idea/id) where the idea (id)
  //is used to search for the idea object inside (ideas) collection. Then returns idea object.
  storeUserIdeas = (userIdeas) =>
  {
    //store the userIdeas(ideas of logIn user) parameter inside state property 
    
    
  };

/*
  getAllIdeas = () =>
  {
    API.getAllIdeas().then(res =>

        this.setState({ ideas2: res.data }, console.log("all"), console.log(res.data))

        ).catch(err => console.log(err));
  };
  */



handleInputChange = event => 
{

    const { name, value } = event.target;

     
    this.setState({

      [name]: value

    });

};


  uploadFile = (event) => {
    const filestack = client.init('AXodQkfA4Soq1kmjeI2Vbz');
    filestack.pick({
      accept: [".pdf",".doc",".docx",".docm"],
      fromSources:["local_file_system", "url","googledrive","dropbox","evernote","onedrive","clouddrive"],
      maxFiles: 1,
    }).then(function(result) {
      console.log(JSON.stringify(result.filesUploaded));
      var fileUrl = result.filesUploaded[0].url;
      var fileName = result.filesUploaded[0].filename;
      console.log(fileName + " " + fileUrl);
      // Need to write code to send fileName, fileURL, and user ID to database to save.
      document.getElementById("docUpload").innerHTML += `<p><a href="` + fileUrl + `">` + fileName +`</a></p>`;
    })
  };



 render()
 {
  
  return(


<div>
<Navbar />


<div id="section1">
          <div id="photo" className="container">
              <div className="row">
              
              
              <div classNe="col-md-3">

                <Thumbnail2 
                      full_name={this.state.user.full_name} 
                       photoURL={this.state.user.photoURL}
                       skills={this.state.user.skills}

                />

                    
                      <span id='clickableAwesomeFont'><i className="fa fa-github" aria-hidden="true" style={{color:"#65737e",fontSize: "40px",marginTop:"20px", marginLeft:"10px"}}></i></span>
                      <span id='clickableAwesomeFont'><i className="fa fa-linkedin" aria-hidden="true"style={{color:"#65737e",fontSize: "35px", marginLeft:"20px"}}></i></span>
                      <span id='clickableAwesomeFont'><i className="fa fa-vimeo-square" aria-hidden="true" style={{color:"#65737e",fontSize: "35px", marginLeft:"20px"}}></i></span>
                      <span id='clickableAwesomeFont'><i className="fa fa-twitter" aria-hidden="true" style={{color:"#65737e",fontSize: "35px", marginLeft:"20px"}}></i></span>
                      <span id='clickableAwesomeFont'><i class="fa fa-facebook" aria-hidden="true"style={{color:"#65737e",fontSize: "35px", marginLeft:"20px"}}></i></span>


                  </div>
                 
                      <div className="col-md-6">
                        <div className="backgroundbox">
                        
                         
                           <p id="text3">Sarah Lee <br/>Hi, I would to know more about your application, I am interested in working with you</p>
                          
                           <p id="text4">Joshua Phils <br/> Hi Bruno, I have been working in a new idea that I would like to share with you. when are you available to speak?</p>
                         
                           <p id="text4">Zac Parker <br/> Hi Bruno, I have been working in a new idea that I would like to share with you. when are you available to speak?</p>
                         
                           <p id="text4">Tarra Sanders <br/> Ey Bruno, I have been working in a new idea that I would like to share with you. when are you available to speak?</p>

                          <div className="form-group">
                         <input onChange={this.handleInputChange} style={{ backgroundColor: "white",marginLeft:"20px", width:"92%"}} type="text" className="form-control" id="formGroupExampleInput" placeholder=""/>
                         </div>
                         <button type="button" id="keep" className="btn btn-danger" style={{marginLeft:"330px", marginTop:"5px"}}>delete</button>
                          <button type="button" id="keep" className="btn btn-warning" style={{marginLeft:"425px", marginTop:"-65px"}}>post</button>
                         



                        </div>
                         
                      </div>

                  

                  <div className="col-md-3">
                   <div className="boardann" style={{height:"100px",width:"100px",backgroundColor: "#65737e",marginTop:"45px",marginLeft:"40px"}}>
                   <span id='clickableAwesomeFont'><i className="fa fa-comment-o  " data-toggle="modal" data-target="#exampleModal" style={{color:"white",fontSize: "40px",marginTop:"20px", marginLeft:"30px"}}></i></span>
                   <p style={{color:"white",fontSize: "9px",marginTop:"5px", marginLeft:"10px"}}>private message</p>

                   </div>

                   <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Message</h5>

                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body" style={{backgroundColor:" white"}}>
                                                  <form id="input" style={{width:"93%", marginLeft:"20px",marginBottom:"40px"}}>
                                                                                            
                                                     <div className="form-group">
                                                       <label for="exampleFormControlTextarea1"style={{color:"#65737e"}}></label>
                                                       <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                                     </div>
                                                     <div className="form-group">
                                                       <a href="attach" alt="attach">
                                                       <p alt="attach"> attach</p>
                                                       </a>                                            
                                                     </div>                                                
                                             
                                                 </form>
                                              
                                            </div>
                                            <div className="modal-footer" style={{backgroundColor:" white"}}>
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Discard</button>
                                                <button type="button" className="btn btn-danger">send</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    <hr/>
                    <h6 >(Display Files here)</h6> 
                    <div id="docUpload" style={{marginTop:"45px",marginLeft:"40px"}}>

                    </div>
    
                    
                  </div>

                </div>
          </div>
</div>




      <div className="container">
         <div id="addedtitle">
            <h5 style={{fontSize:"20px",color:"white"}}>Added Ideas</h5>
         </div>

         <hr/>
            
      
         <div className="row" id="boxbox">
         
              
                   {this.state.ideas.map(idea => (

                   <Idea 
                      key={idea.id}
                      id={idea.id}
                      Author={idea.Author}
                      ideaName={idea.ideaName}
                      whatIsIdea={idea.whatIsIdea}
                      whyGoodIdea={idea.whyGoodIdea} 
                   />                                                  
                    
                 
                    ))}
                                                
                    
                 
                

                
                                                                 
                    

              </div> 
               <hr/>      

              </div>
         
                   
                                 
          </div>


);

}
}

export default PublicProfile;