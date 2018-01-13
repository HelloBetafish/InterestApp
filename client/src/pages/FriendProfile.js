import React, {Component} from "react";
import ReactFilestack, { client } from 'filestack-react';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../style/connectColl.css";
import API from "../utils/API";
import Row from "../components/Row";
import Col from "../components/Col";
import { Thumbnail, Thumbnail2 } from "../components/Thumbnail";
import Idea from "../components/Idea";
import { FileDisplay, FileDisplay2 } from "../components/FileDisplay";
import { PostBoard, PostBtn, PostItem, TextArea } from "../components/PostBoard";
import { LinksURL, LinksURLForm } from "../components/LinksURL";
import Footer from "../components/Footer";

class FriendProfile extends Component
{
  state = 
  {
    signedUser: {},
    IdOfSignedUser: "",
    user: {},
    ideas: [],
    ideas2: [],
    IdOfUserProfile: "",
    files: [],
    posts: [],
    postBody: ""

  }

  componentDidMount() 
  {

      this.loadLoggedUsers();
      
  }

  //ReUse: Get Id profile user
  loadLoggedUsers = () => 
  {
    API.getIdOfLoggedInUser().then(res =>
      
      this.setState({ IdOfSignedUser: res.data[0].IdOfSignedUser })
    ).catch(err => console.log(err));

    API.getIdOfProfileUser().then(res =>
        
      this.setState({ IdOfUserProfile: res.data[0].IdOfUserProfile }, this.getUser(res.data[0].IdOfUserProfile) )
    ).catch(err => console.log(err));

  };

  //ReUse:  1)We find the signed in user by using the (id) obtained from (signin) collection.
  //        Then we return the object of the signin user. Then obtain (idea)field (id).
  //        2)we also obtain signIn user's field (idea) which is an array of idea objects
  getUser = (id) =>
  {
    
    API.popFile(id).then(res => 
      this.setState({ files: res.data.files})
      ).catch(err => console.log(err));

    API.popPosts(id).then(res => 
      this.setState({ posts: res.data.posts})
      ).catch(err => console.log(err));

    API.getUser(id).then(res => 
          this.setState({ user: res.data, ideas: res.data.idea}, console.log(res.data) )
          ).catch(err => console.log(err));
          
    API.getUser(this.state.IdOfSignedUser).then(res => 
      this.setState({ signedUser: res.data}, console.log(res.data) )
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

addPost = event =>
{
  event.preventDefault();
    //Ensure users enter all data
    if(this.state.postBody)
    {
        API.savePost(this.state.IdOfUserProfile, 
        { 
        body: this.state.postBody,
        senderId: this.state.IdOfSignedUser,
        senderName: this.state.signedUser.full_name
        }).then(res => console.log("Post added."))
        .catch(err => console.log(err));
    }
    this.getUser(this.state.IdOfUserProfile);
    this.setState({ postBody:""});
}

 render()
 {
  
  return(


<div>
<Navbar />


<div id="section1">
          <div id="photo" className="container">
              <div className="row">
              
              
              <div className="col-md-3 text-center">
              {(this.state.user.photoURL !=="") ?
                (<Thumbnail2 
                      full_name={this.state.user.full_name} 
                      photoURL={this.state.user.photoURL}
                      title={this.state.user.title}
                      skills={this.state.user.skills}

                />) : 
                (<Thumbnail2 
                      full_name={this.state.user.full_name} 
                      photoURL={this.state.dummyPhoto}
                      title={this.state.user.title}
                      skills={this.state.user.skills}
                />)
              }
                    
                <LinksURL
                  GithubUrl= {this.state.user.GithubUrl}
                  LinkedInUrl= {this.state.user.LinkedInUrl}
                  VimeoUrl= {this.state.user.VimeoUrl}
                  TwitterUrl= {this.state.user.TwitterUrl}
                  FacebookUrl= {this.state.user.FacebookUrl}
                />
              </div>
                 

                  <div className="col-md-6">
                    <PostBoard>
                      <h3 className="text-center">Leave a Note &#8595;</h3>
                      {this.state.posts.length ? (
                      <div id="scrollPost">
                        {this.state.posts.map(post => (
                          <PostItem 
                            key={post._id}
                            senderId={post.senderId}>
                            From <Link to={"/publicprofile/"}>
                              {post.senderName}
                            </Link> :
                              <hr/>
                              <p style={{textIndent:"10px"}}>{post.body}</p>
                              <small style={{float:"right"}}>Note sent: {post.userCreated}</small>
                          </PostItem>
                        ))}
                      </div>
                      ) : (
                        <br/>
                      )}
                      
                        <TextArea
                        value={this.state.postBody}
                        onChange={this.handleInputChange}
                        style={{ backgroundColor: "white",marginLeft:"20px", width:"92%"}}
                        id="textAreaPost" 
                        name="postBody"
                        />
                      <PostBtn
                        onClick={this.addPost}/>
                    </PostBoard>
                  </div>
                  
                  <div className="col-md-3 text-center">
                   <div className="boardann" style={{height:"80px",width:"70px",backgroundColor: "#65737e",marginTop:"45px", margin:"auto"}}>
                   <span id='clickableAwesomeFont'><i className="fa fa-comment-o  " data-toggle="modal" data-target="#exampleModal" style={{color:"white",fontSize: "40px",marginTop:"2px"}}></i></span>
                   <p style={{color:"white",fontSize: "9px",marginTop:"5px"}}>private message</p>

                   </div>

                   <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="dopocument">
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
            <h5 style={{fontSize:"20px",color:"white"}}>{this.state.user.full_name}'s Ideas</h5>
         </div>

         <hr/>
      </div>       
      <Row>
        <Col size="md-1"/>
        <Col size="md-11">
          <Row id="boxbox">
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
            <hr/>      
          </Row>
        </Col>
      </Row>
    <Footer />    
</div>


          



        );

  }
}

export default FriendProfile;