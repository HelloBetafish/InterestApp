import React, {Component} from "react";
import { Link } from "react-router-dom";
import ReactFilestack, { client } from 'filestack-react';
import Navbar from "../components/Navbar";
import "../style/connectColl.css";
// import "../style/Profile.css";
import API from "../utils/API";
import Row from "../components/Row";
import Col from "../components/Login/Col";
import { Thumbnail, Thumbnail2 } from "../components/Thumbnail";
import { FileDisplay, FileDisplay2 } from "../components/FileDisplay";
import DeleteBtn from "../components/DeleteBtn";
import { LinksURL, LinksURLForm } from "../components/LinksURL";
import Footer from "../components/Footer";

class Dashboard extends Component
{
  state = 
  {
    user: {},
    IdOfSignedUser: "",
    dummyPhoto: "css/images/addphoto.png",
 
    //For (idea) collection
    ideaName: "",
    whatIsIdea: "",
    whyGoodIdea: "",
    ideaphoto: "css/images/darkroom3.JPG",
    Author: "",
 
    // For contacts
    contacts: [],

    // For Filestack docs
    optionsF: {
      accept: [".pdf",".doc",".docx",".docm"],
      fromSources:["local_file_system","url","googledrive","dropbox","evernote","onedrive","clouddrive"],
      maxFiles: 1,
    },
    // For Filestack Photo
      optionsP: {
        accept: 'image/*',
        fromSources:["local_file_system","url","facebook","instagram","googledrive","dropbox"],
        maxSize: 2*1024*1024
      },

    fileUrl: "",
    fileName: "",
    files: [],

    GithubUrl: "",
    VimeoUrl: "",
    LinkedInUrl: "",
    FacebookUrl: "",
    TwitterUrl: "",

    GithubUrlSaved: "",
    VimeoUrlSaved: "",
    LinkedInUrlSaved: "",
    FacebookUrlSaved: "",
    TwitterUrlSaved: ""
  };

  componentDidMount() 
  {

      // Code for Google Custom Search 
    //   const embedcode = `<script>
    //   (function() {
    //     var cx = '012846532156912947869:kzgtinco-hg';
    //     var gcse = document.createElement('script');
    //     gcse.type = 'text/javascript';
    //     gcse.async = true;
    //     gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    //     var s = document.getElementsByTagName('script')[0];
    //     s.parentNode.insertBefore(gcse, s);
    //   })();
    // </script>
    //   <gcse:search></gcse:search>`
    //   document.getElementById("gsearch").innerHTML = embedcode;
    // Code for div would go under render() and return ()
    // <div id='gsearch'>
    // </div>
      
      this.loadLoggedUsers();
      
  }

  //Function1: Get the Id of the user that is signed in
  loadLoggedUsers = () => 
  {
    
      API.getIdOfLoggedInUser().then(res =>
        
        this.setState({ IdOfSignedUser: res.data[0].IdOfSignedUser }, this.getUser(res.data[0].IdOfSignedUser) )

        ).catch(err => console.log(err))

  };
  
  //Function2: use the recently obtained (id) to get user object
  getUser = (id) =>
  {
    API.popFile(id).then(res => 
      this.setState({ files: res.data.files})
      ).catch(err => console.log(err));
   
    API.getUser(id).then(res => 
          this.setState({ user: res.data },  console.log(res.data) )
          ).catch(err => console.log(err))
  };

  // Filestack callback function for uploading files to user db
    callbackFunctionFiles = (result) => {
      const fileUrl = result.filesUploaded[0].url;
      const fileName = result.filesUploaded[0].filename;
      this.setState({fileUrl: result.filesUploaded[0].url, fileName: result.filesUploaded[0].filename});
      this.addDocument();
      console.log("fileUrl: " + fileUrl + " fileName: " + fileName);
      console.log("Success!");
    };
  
    addDocument = () => {
      
        console.log("current fileName: " + this.state.fileName + "current fileUrl" + this.state.fileUrl + " " +
      "logged in user: " + this.state.IdOfSignedUser);
  
        API.saveFile(this.state.IdOfSignedUser,
          { 
            fileName: this.state.fileName,
            fileUrl: this.state.fileUrl,
            userId: this.state.IdOfSignedUser
            }).then(res => console.log("Success again!"))
            .catch(err => console.log(err));
        this.getUser(this.state.IdOfSignedUser);
    };

    deleteFile = () => {
      console.log("in progress");
    };
    
    // populateFiles = () => {
    //   API.popFile(this.state.IdOfSignedUser).then(res => 
    //     this.setState({ files: res.data }, console.log(this.state.files))
    //     ).catch(err => console.log(err));
    //   this.addDocument();
    // };

    // Filestack callback function for uploading profile pic
    callbackFunctionPhoto = (result) => {
      const photoUrl = result.filesUploaded[0].url;
      console.log(photoUrl);
      console.log("Success!");
      this.uploadPhoto(photoUrl);
    };

    uploadPhoto = (photoUrl) => {
      API.changePhoto(this.state.IdOfSignedUser,
        {photoURL: photoUrl
        }).then(res => console.log(res.data))
        .catch(err => console.log(err));
      this.getUser(this.state.IdOfSignedUser);
    }


  handleInputChange = event => 
  {

    const { name, value } = event.target;


    
// console.log(this.state.user.idea.Author);

    this.setState({

      [name]: value

    });

  };

  //creates an (idea) field inside of (users) collection
  addIdeaField = event =>
  {

     API.addField(this.state.IdOfSignedUser).then(res => 
          console.log("add field"),
          ).catch(err => console.log(err));
  };

  // Filestack callback function for uploading photo for idea
  callbackFunctionIdeaPhoto = (result) => {
    this.setState({ideaphoto: result.filesUploaded[0].url});
    var foto = document.getElementById('stockideaphoto');
    foto.src = result.filesUploaded[0].url;
    // console.log(result.filesUploaded[0].url);
  };

  
  addIdea = event =>
  {
    event.preventDefault();

      //Ensure users enter all data
      if(this.state.ideaName && this.state.whatIsIdea && this.state.whyGoodIdea)
      {
        console.log("works");
        
         API.saveIdea(this.state.IdOfSignedUser, 

         { 

          ideaName: this.state.ideaName,
          whatIsIdea: this.state.whatIsIdea,
          whyGoodIdea: this.state.whyGoodIdea,
          photo: this.state.ideaphoto,
          Author: this.state.user.full_name,
          AuthorId: this.state.IdOfSignedUser


         }).then(res => console.log(res.data))

          .catch(err => console.log(err));

        // After saving idea, reset fields and default image
          this.setState({
            ideaName: "",
            whatIsIdea: "",
            whyGoodIdea: "",
            ideaphoto:"css/images/darkroom3.JPG", 
            Author: "",
          });
          var foto = document.getElementById('stockideaphoto');
          foto.src = "css/images/health.jpg";
      }
  };

  toggleLinks = () => {
    var x = document.getElementById("LinksUrl");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
  };

  addLinkG = (event) => {
    event.preventDefault();
    API.changeUrl(this.state.IdOfSignedUser,
      { 
        GithubUrl: this.state.GithubUrl
      }).then(res => console.log("Added Github link"))
      .catch(err => console.log(err));

    this.getUser(this.state.IdOfSignedUser);
  };
  
  addLinkL = (event) => {
    event.preventDefault();
    API.changeUrl(this.state.IdOfSignedUser,
      { 
        LinkedInUrl: this.state.LinkedInUrl
      }).then(res => console.log("Added LinkedIn link"))
      .catch(err => console.log(err));

    this.getUser(this.state.IdOfSignedUser);
  };
  
  addLinkV = (event) => {
    event.preventDefault();
    API.changeUrl(this.state.IdOfSignedUser,
      { 
        VimeoUrl: this.state.VimeoUrl
      }).then(res => console.log("Added Vimeo link"))
      .catch(err => console.log(err));

    this.getUser(this.state.IdOfSignedUser);
  };
  
  addLinkT = (event) => {
    event.preventDefault();
    API.changeUrl(this.state.IdOfSignedUser,
      { 
        TwitterUrl: this.state.TwitterUrl
      }).then(res => console.log("Added Twitter link"))
      .catch(err => console.log(err));

    this.getUser(this.state.IdOfSignedUser);
  };
  
  addLinkF = (event) => {
    event.preventDefault();
    API.changeUrl(this.state.IdOfSignedUser,
      { 
        FacebookUrl: this.state.FacebookUrl
      }).then(res => console.log("Added Facebook link"))
      .catch(err => console.log(err));

    this.getUser(this.state.IdOfSignedUser);
  };

  getContacts = (event) => {
    event.preventDefault();
    // console.log(this.state.user.contacts);
    var pulledContacts = this.state.user.contacts;

    // console.log(pulledContacts[0]);
    for (var i = 0; i < pulledContacts.length; i++) {
      
      API.getContact(pulledContacts[i]).then(res => 
        {
          this.state.contacts.push({
          id : res.data._id,
          full_name : res.data.full_name,
          photo : res.data.photoURL,
          title : res.data.title
        })
        }).catch(err => console.log(err));
    }
  //  this.setState({contacts: this.state.contacts});
    console.log(this.state.contacts);
  };

  // seeProfile = id => 
  // {
  //   API.addIdOfProfilePic(id).then(res => this.loadUsers())
  //     .catch(err => console.log(err));
  // };

    render()
    {
  
      return(
      <div>
      <Navbar />

      <div id="section1">
          <div id="photo" className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-1">
                <div tabIndex="1" className="box1">
                  <Link to="/publicprofile">
                    <span id='clickableAwesomeFont'><i className=" fa fa-list" style={{fontSize: "40px", color:"black"}} ></i></span>
                    <p id="personal">Public Profile</p>
                  </Link>
                </div>
                <div tabIndex="2"className="box2">
                <span id='clickableAwesomeFont'><i onClick={this.getContacts} className=" fa fa-address-book" data-toggle="modal" data-target=".bs-example-modal-sm" style={{fontSize: "40px", color:"black"}} ></i></span>
                <p id="contacts">Contacts</p>
                </div>
              </div>


      <div className="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">
                <div className="modal-dialog" role="document">
                  <div className="modal-body"style={{backgroundColor:" #343d46"}}>
                    <div className="modal-header">
                      <h5 className="modal-title" id="modaltitle"style={{marginLeft:"40%"}}>CONTACTS</h5>

                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                          </button>
                    </div>
                                 
                          <div className="modal-body" style={{backgroundColor:" white"}}>               
                            <div className="modal-dialog modal-lg" role="document">
                              <div className="modal-content">
                                <div className="modal-body" style={{backgroundColor:" white"}}>

                                <form id="input" style={{width:"93%", marginLeft:"20px",marginBottom:"40px"}}>
                                
                                <div className="form-group">
                                  <a href="Bethany Pfeister" alt="Bethany">
                                  <img src="css/images/bethany.jpg" width="30" height="30" style={{marginTop:"30px",marginLeft:"30px"}}/>
                                  <p alt="Bethany Pfeister" style={{marginLeft:"90px", marginTop:"-20px"}}>Bethany Pfeister - Web Developer</p>
                                  </a>

                                  <a href="Jesse Forte" alt="Jesse">
                                  <img src="css/images/Jesse1.jpg" width="30" height="30" style={{marginLeft:"30px"}}/>
                                  <p alt="Jesse Forte" style={{marginLeft:"90px", marginTop:"-20px"}}>Jesse Forte - Web Developer</p>
                                  </a>

                                  <a href="TJ Stephens" alt="TJ">
                                  <img src="css/images/tj.jpg" width="30" height="30" style={{marginLeft:"30px"}}/>
                                  <p alt="TJ Stephens" style={{marginLeft:"90px", marginTop:"-20px"}}>TJ Stephens - Web Developer</p>
                                  </a>
                                  
                                  <a href="Reyna Perez" alt="Reyna">
                                  <img src="css/images/reyna.jpg" width="30" height="30" style={{marginLeft:"30px"}}/>
                                  <p alt="Reyna Perez" style={{marginLeft:"90px", marginTop:"-20px"}}>Reyna Perez - Web Developer</p>
                                  </a>

                                  <a href="John Anders" alt="Reyna">
                                  <img src="css/images/john.jpg" width="30" height="30" style={{marginLeft:"30px"}}/>
                                  <p alt="John Anders" style={{marginLeft:"90px", marginTop:"-20px"}}>John Anders - Web Developer</p>
                                  </a>
                                 </div> 
                              </form>
                                </div>

                                         <div className="modal-footer" style={{backgroundColor:" white"}}>
                                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>      
                                        </div>

                           </div>
                        </div>                                
                     </div> 
                  </div>
                </div>
              </div>


              <Col size="md-2">
              
                <div tabIndex="3"className="box3">
                  <Link to="/publicprofile#scrollPost">
                    <span id='clickableAwesomeFont'><p id="cuatro" style={{fontSize: "30px", fontWeight: "bold", marginLeft: "30px",paddingTop:"30px"}}>{this.state.user.posts ? (this.state.user.posts.length) : 0 }</p></span>
                    <p id="textmessage" style={{marginLeft: "30px"}}>Notes </p>
                  </Link>
                </div>
                
                <div tabIndex="4"className="box4">
                <span id='clickableAwesomeFont'><p id="cuatro" style={{fontSize: "30px", fontWeight: "bold",  marginLeft: "25px",paddingTop:"26px"}}>11</p></span>
                <p id="textinvitation" >Invitations</p>
                </div>
              </Col>
                
              <Col size="md-4" className="text-center">
                {(this.state.user.photoURL !=="") ?
                  (<Thumbnail 
                    full_name={this.state.user.full_name} 
                    photoURL={this.state.user.photoURL}
                    title={this.state.user.title}
                    skills={this.state.user.skills}
                    style={{marginTop:"40px",boxShadow: "1px 9px 20px grey"}}
                  />) :
                  (<Thumbnail 
                    full_name={this.state.user.full_name} 
                    photoURL={this.state.dummyPhoto}
                    title={this.state.user.title}
                    skills={this.state.user.skills}
                    style={{marginTop:"40px",boxShadow: "1px 9px 20px grey"}}
                  />)}

                  <Row>
                    <Col size="md-3"/>
                      <ReactFilestack
                        apikey={"AXodQkfA4Soq1kmjeI2Vbz"}
                        buttonText="Upload Profile Pic"
                        buttonClass="classname"
                        options={this.state.optionsP}
                        onSuccess={this.callbackFunctionPhoto}
                      />
                  </Row>
                </Col>
             

              <Col size="md-1"></Col>
              <Col size="md-3" style={{marginTop:"100px",marginLeft:"-30px"}}>
                <LinksURL
                  GithubUrl= {this.state.user.GithubUrl}
                  LinkedInUrl= {this.state.user.LinkedInUrl}
                  VimeoUrl= {this.state.user.VimeoUrl}
                  TwitterUrl= {this.state.user.TwitterUrl}
                  FacebookUrl= {this.state.user.FacebookUrl}
                />
                <span style={{float:"right"}}><a onClick={this.toggleLinks} href="#">hide/show</a></span>
                <hr/>

                <LinksURLForm
                  GithubUrl= {this.state.GithubUrl}
                  LinkedInUrl= {this.state.LinkedInUrl}
                  VimeoUrl= {this.state.VimeoUrl}
                  TwitterUrl= {this.state.TwitterUrl}
                  FacebookUrl= {this.state.FacebookUrl}
                  UserGithubUrl= {this.state.user.GithubUrl}
                  UserLinkedInUrl= {this.state.user.LinkedInUrl}
                  UserVimeoUrl= {this.state.user.VimeoUrl}
                  UserTwitterUrl= {this.state.user.TwitterUrl}
                  UserFacebookUrl= {this.state.user.FacebookUrl}
                  handleInputChange= {this.handleInputChange}
                  addLinkG= {this.addLinkG}
                  addLinkL= {this.addLinkL}
                  addLinkV= {this.addLinkV}
                  addLinkT= {this.addLinkT}
                  addLinkF= {this.addLinkF}
                />
                <hr/>

                <div className="text-center">
                  <h4>Resume/Important Docs</h4>
                  <hr/>

                  {this.state.files.map(file => (
                    <FileDisplay
                    key={file._id}
                    id={file._id}
                    fileUrl={file.fileUrl}
                    fileName={file.fileName}
                    handleClick={this.deleteFile}
                    ></FileDisplay>
                  ))}

                  <ReactFilestack
                    apikey={"AXodQkfA4Soq1kmjeI2Vbz"}
                    buttonText="Upload Files"
                    buttonClass="classname"
                    options={this.state.optionsF}
                    onSuccess={this.callbackFunctionFiles}
                  />
                  <hr/>
                </div>
              </Col>
            </div>
          </div>


      <section id="services">
          <div className="container">

            <div className="row">
              <div className="col-sm-12">

                <div className="service row">   
                  <div className="col-md-4 ">
                    <div className="searchprofile" style={{boxShadow: "9px 9px 20px grey"}}>
                      <span id='clickableAwesomeFont'>
                        <Link to="/connect&collaborate">
                          <i className="fa fa-search fa-4x circle-icon" style={{fontSize: "40px", color:"red"}}></i>
                        </Link>
                      </span>

                      <h2 id="connect">Connect & Collaborate</h2>
                      <p id="connectp">Find like-minded creatives.<br/>Add them to your contact list.<br/>
                      Send them a note to start collaborating!
                      </p> 
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div id="messageprofile"style={{boxShadow: "9px 9px 20px grey"}}>
                      <span id='clickableAwesomeFont'>
                        <Link to="/messages">
                          <i className="fa fa-envelope fa-4x circle-icon" style={{fontSize: "40px", color:"red"}}></i>
                        </Link>
                      </span>
                      <h2 id="message">Inbox</h2>
                      <p id="messagep">Keep your messages organized.</p>
                    </div>
                  </div>

                  <div className="col-md-4 ">
                    <div id="ideasprofile"style={{boxShadow: "9px 9px 20px grey"}}>
                      <span id='clickableAwesomeFont'><i onClick={this.addIdeaField} className="fa fa-lightbulb-o fa-4x circle-icon" data-toggle="modal" data-target="#exampleModal" style={{fontSize: "40px", color:"red"}}></i></span>
                      <h2 id="ideas">Add Ideas</h2>
                      <p id="ideasp">Add as many ideas as you care to share.<br/>
                       View how your ideas resonate with others.
                      </p>

                    

                            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                    <div className="modal-content"style={{backgroundColor:" #f9bd05"}}>
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel"style={{marginLeft:"40%"}}>ADD IDEA</h5>

                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div className="modal-body" style={{backgroundColor:" white"}}>
                                              <form id="input" style={{width:"93%", marginLeft:"20px",marginBottom:"40px"}}>

                                             <div className="formName-group">
                                               <label className="col-form-label" for="formGroupExampleInput2"style={{color:"#65737e"}}>Name of your Idea</label>
                                               <input type="text" name="ideaName" value={this.state.ideaName} onChange={this.handleInputChange} className="form-control" id="formGroupExampleInput2" placeholder=""/>
                                             </div>
                                          
                                          
                                             <div className="form-group">
                                               <label className="col-form-label" for="formGroupExampleInput" style={{color:"#65737e"}}>What is the idea about?</label>
                                               <input type="text"name="whatIsIdea" value={this.state.whatIsIdea} onChange={this.handleInputChange} className="form-control" id="formGroupExampleInput" placeholder=""/>
                                             </div>
                                              
                                             <div className="form-group">
                                               <label for="exampleFormControlTextarea1"style={{color:"#65737e"}}>Why is this a good idea?</label>
                                               <textarea className="form-control" name="whyGoodIdea" value={this.state.whyGoodIdea} onChange={this.handleInputChange} id="exampleFormControlTextarea1" rows="3"></textarea>
                                             </div>
                                             <div className="form-group">
                                             
                                              
                                              <img id="stockideaphoto" src="css/images/health.jpg" alt="..." className="img-thumbnail" style={{width:"100%"}} />

                          
                                              <ReactFilestack
                                                apikey={"AXodQkfA4Soq1kmjeI2Vbz"}
                                                buttonText="Add Photo"
                                                buttonClass="classname"
                                                options={this.state.optionsP}
                                                onSuccess={this.callbackFunctionIdeaPhoto}
                                              />
                                             </div>
                                             
                                            
                                            </form>
                                          
                                        </div>
                                        <div className="modal-footer" style={{backgroundColor:" white"}}>
                                            <a href="/publicprofile#addedtitle" style={{marginRight:"150px"}} onclick="$('#exampleModal').modal('dismiss')">← View Your Ideas</a>
                                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            <button id="addideaphoto" onClick={this.addIdea} type="submit" className="btn btn-danger">Save</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                                                    
                     </div>
                   </div>
                 </div>
               </div>
             </div>
          </div>
      </section>
    </div>
    <Footer />
  </div>
    );
    }
}
export default Dashboard; 