//NOTE: adding fluid to containter or <Container fluid> causes wider navbar & jumbotron.

import React, {Component} from "react";
import ReactFilestack, { client } from 'filestack-react';
import "../components/Login/Login.css";
import Wrapper from "../components/Login/Wrapper";
import Jumbotron from "../components/Login/Jumbotron";
import Container from "../components/Login/Container";
import Row from "../components/Login/Row";
import Col from "../components/Login/Col";
import Navbar from "../components/Login/Navbar";
import { FormList, Textfield, Select } from "../components/Login/FormList";
import LoginButton from "../components/Login/LoginButton";
import SignUpButton from "../components/Login/SignUpButton"
import Dashboard from "./Dashboard";
import CreateAcct from "./CreateAcct";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Badge from "../components/Login/Badge";
import "../style/Home.css";
import Encrypt_Decrypt from "../EncryptionDecryption/Encrypt_Decrypt";


var stack = [];


class Login extends Component
{

   state = 
  {
    users: [],

    username2: "",
    password2: "",
    
    username: "",
    password: "",
    title: "",
    full_name: "",
    email: "",
    country: "",
    skills: "",
    experience: "",
    photoURL: ""



  }

  componentDidMount() 
  {
    
    this.loadUsers();

    let i = 0;
    
  }

  //Function1: load users from seedDB.js into mongoDB.
  loadUsers = () => 
  {
    
    API.getUsers().then(res =>

        this.setState({ users: res.data, username: "", password: "", title: "", full_name:"", email:"", country:"", skills:"", experience:"", photoURL:"" })

        ).catch(err => console.log(err));
  };

  //Function2: Executes when user clicks [Login] button
  authenticationLogin = event => 
  {
    
    //Boolean variable determins whether or not the user can log in.
    //we set it to true if the user enters valid credentials
    var valid = false;

    //get username and password from textfield by using this.state.username && this.state.password
    //if they are valid then log user into profile page. Else display error message.
    //window.location.href = "/profile";

    //scan through entire database to see if username and password is valid
    for(var i = 0; i < this.state.users.length; i++)
    {
     
      //if user enters valid username and password(which gets decrypted) set valid to true so that he or she may log in.
      if(this.state.username2 === this.state.users[i].username && this.state.password2 ===  Encrypt_Decrypt.decrypt(this.state.users[i].password) )
      {
        //Set (online) field of user signing in to true
         var id = this.state.users[i]._id;

         //Store id of signed in user in a remote location(SignedInUser/Online.js)
         //in order for the user information in (Profile.js) to be obtained.
         //Online.setId(id);


        //console.log(id);
        API.userOnline(id).then(res => this.loadUsers())

        .catch(err => console.log(err));
        
        
        valid = true;
      }
    }

    //check boolean value to determine if login success
    if(valid === true)
    {
     
      window.location.href = "/dashboard"
    }
    else
    {
      console.log("Invalid username or password");

      //Display Red error message
      document.getElementById("error-div").style.display = "block";

      //sorround login & password textbox with red borders
      document.getElementsByClassName("form-control")[0].style.border = "2px solid red"   //login textfield
      document.getElementsByClassName("form-control")[1].style.border = "2px solid red"   //password textfield

    }
    
  };

  

  //Function3: user enters data in textfields
  handleInputChange = event => 
  {

    const { name, value } = event.target;



    this.setState({

      [name]: value

    });

  };

  test = event => 
  {
    //console.log(this.state.username2);

    if(this.state.username2 == "a")
    {
      console.log("true");
    }
  };

  //Function4: adds new user to MongoDB when signing up.
  addNewUser = event => 
  {
    event.preventDefault();

    

    //Checks to make sure textfields are not empty when submitting new user.
    if (this.state.username && this.state.password && this.state.title && this.state.full_name &&
        this.state.email && this.state.country && this.state.skills && this.state.experience) 
    {


      //Encrypt plaintext password and store encrypted password into variable
      //which will be used for storing the encypted passord inside mongoDB.
      var encryptPass = Encrypt_Decrypt.encrypt(this.state.password);

      API.saveUser({

        username: this.state.username,
        password: encryptPass,
        title: this.state.title,
        full_name: this.state.full_name,
        email: this.state.email,
        country: this.state.country,
        skills: this.state.skills,
        experience: this.state.experience,
        photoURL: this.state.photoURL

      }).then(res => this.loadUsers())

        .catch(err => console.log(err));



           
    }



  };

  //TESTING FILESTACK

  //Callback function after user uploads image or document
  onSuccess = result => 
  {

    console.log('result', result);
    console.log('link', result.filesUploaded[0].originalPath);
    console.log("url", result.filesUploaded[0].url)

    //store photolink inside (photoURL) field of (user) collection
    this.setState({photoURL: result.filesUploaded[0].url})


  };

  onError = error => 
  {
    console.error('error', error);
  };

//const basicOptions = {
  basicOptions = error => 
  {
      accept: 'image/*';
      fromSources: ['facebook', 'gmail', 'github'];
      maxSize: 1024 * 1024;
      maxFiles: 3;
  };


  
  
  render()
  {

    return(
      
    <Wrapper>
      <Container>



        <Navbar>

          <nav className="navbar navbar-light">
  

            <a className="navbar-brand" >
            
            </a>

            <a className="navbar-brand" >

            <div id="error-div">Invalid Username or Password!</div>
              
              <Row>
              <Col size="lg-6">

               
                <Textfield 
                          value={this.state.username2}
                          onChange={this.handleInputChange}
                          type="email"
                          name="username2"
                          placeholder="Username or Email"

                />

              </Col>


                

              <Col size="lg-6">

            
              <Textfield 
                          value = {this.state.password2}
                          type="password"
                          onChange={this.handleInputChange}
                          name="password2"
                          placeholder="Password"
              />

            
              <LoginButton
                    onClick={this.authenticationLogin}
                    type="submit"
                    className="btn btn-primary loginBtn float-right"
              >
                  Login
              </LoginButton>


              </Col>

              </Row>

            </a>

          </nav>
        </Navbar>

        
        <div className="row">

              <div className="col-lg-3">

              </div>
        
          
         
           

              <div className="col-lg-7">


                

               <img src="images/logointapporange.jpg" class="img-fluid mx-auto d-block" alt="Responsive image" />

               <Link to="/meetus" className="nav-link" >
               <div className="aboutUs"> <p className="aboutUsText"> about us </p> </div>
               </Link>
               
               <Link to="/login" className="nav-link" >
               <div className="createAccount"> <p className="createAccountText"> create account </p> </div>
               </Link>

                
              </div>
         
         </div>




          </Container>
        </Wrapper>
      
    );
    
  }
}
export default Login;