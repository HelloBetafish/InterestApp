import React, {Component} from "react";
import "../components/Login/Login.css";
import Wrapper from "../components/Login/Wrapper";
import Jumbotron from "../components/Login/Jumbotron";
import Container from "../components/Login/Container";
import Row from "../components/Login/Row";
import Col from "../components/Login/Col";
import Navbar from "../components/Login/Navbar";
import { FormList, Textfield } from "../components/Login/FormList";
import LoginButton from "../components/Login/LoginButton";
import SignUpButton from "../components/Login/SignUpButton"
import Profile from "./Profile";
import CreateAcct from "./CreateAcct";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import API from "../utils/API";

class Login extends Component
{

   state = 
  {
    users: [],

    username: "",
    password: "",

    full_name: "",
    email: "",
    country: "",
    skills: "",
    experience: ""

  }

  componentDidMount() 
  {
    
    this.loadUsers();
  }

  //Function1: load users from seedDB.js into mongoDB.
  loadUsers = () => 
  {
    API.getUsers().then(res =>

        this.setState({ users: res.data, username: "", password: "", full_name:"", email:"", country:"", skills:"", experience:"" })

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

      //if user enters valid username and password set valid to true so that he or she may log in.
      if(this.state.username === this.state.users[i].username && this.state.password === this.state.users[i].password )
      {
        valid = true;
      }
    }

    //check boolean value to determine if login success
    if(valid === true)
    {
      window.location.href = "/profile";
    }
    else
    {
      console.log("Invalid username or password");
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

  
  render()
  {

    return(

    	<div>

    		<Navbar>

          <nav className="navbar navbar-light">
  

            <a className="navbar-brand" >
              <h1 className="navTitle"> Interest App </h1>
            </a>

            <a className="navbar-brand" >
              
              <Row>
              <Col size="lg-6">

               
                <Textfield 
                          value = {this.state.username}
                          onChange={this.handleInputChange}
                          type="email"
                          name="username"
                          placeholder="Username or Email"

                />

              </Col>


                

              <Col size="lg-6">

            
              <Textfield 
                          value = {this.state.password}
                          type="password"
                          onChange={this.handleInputChange}
                          name="password"
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
      

    		<Wrapper>

    			<Container>

    				<Row>

    					<Col size="lg-12">

    						<Jumbotron>

                  <FormList>

                  
                   

                    </FormList>

                  
         
               </Jumbotron>
                
    					</Col>
    				</Row>
    			</Container>
    		</Wrapper>
    	</div>




    );
    
  }
}

export default Login;