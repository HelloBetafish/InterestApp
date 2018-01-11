import React, {Component} from "react";
import ReactFilestack, { client } from 'filestack-react';
import Navbar from "../components/Navbar";
import "../style/connectColl.css";
import API from "../utils/API";
import { Thumbnail, Thumbnail2 } from "../components/Thumbnail";
import Idea from "../components/Idea";
import { FileDisplay, FileDisplay2 } from "../components/FileDisplay";

class PublicProfile extends Component
{
  state = 
  {
    user: {},
    ideas: [],
    ideas2: [],
    IdOfSignedUser: "",
    files: []

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
    
    API.popFile(id).then(res => 
      this.setState({ files: res.data.files})
      ).catch(err => console.log(err));

    API.getUser(id).then(res => 
          this.setState({ user: res.data, ideas: res.data.idea})
          ).catch(err => console.log(err));
    
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

        this.setState({ ideas: res.data }, console.log("all"), console.log(res.data))

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

 render()
 {
  
  return(


<div>
<Navbar />


<div id="section1">
          <div id="photo" className="container">
              <div className="row">
              
              
              <div className="col-md-3 text-center">

                <Thumbnail2 
                      full_name={this.state.user.full_name} 
                       photoURL={this.state.user.photoURL}
                       title={this.state.user.title}
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

                  

                  <div className="col-md-3 text-center">
                   <div className="boardann" style={{height:"100px",width:"100px",backgroundColor: "#65737e",marginTop:"45px", margin:"auto"}}>
                   <span id='clickableAwesomeFont'><i className="fa fa-comment-o  " data-toggle="modal" data-target="#exampleModal" style={{color:"white",fontSize: "40px",marginTop:"20px"}}></i></span>
                   <p style={{color:"white",fontSize: "9px",marginTop:"5px"}}>private message</p>

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
                     
                    <div className="text-center">
                    <h4 className="text-center">Resume/Important Docs</h4>
                    <hr/>
                      {this.state.files.map(file => (
                      
                      <FileDisplay2
                      key={file._id}
                      id={file._id}
                      fileUrl={file.fileUrl}
                      fileName={file.fileName}
                      />
                      ))}

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
                      photo={idea.photo}
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