import React, {Component} from "react";
import "../components/Login/Login.css";
import Wrapper from "../components/Login/Wrapper";
import Jumbotron from "../components/Login/Jumbotron";
import Container from "../components/Login/Container";
import Row from "../components/Login/Row";
import Col from "../components/Login/Col";
import Navbar from "../components/Login/Navbar";
import { FormList, Textfields } from "../components/Login/FormList";
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

  
  loadUsers = () => 
  {
    API.getUsers().then(res =>

        this.setState({ users: res.data, username: "", password: "", full_name:"", email:"", country:"", skills:"", experience:"" })

        ).catch(err => console.log(err));
  
  };



  //Function1: Executes when user clicks [Login] button
  authenticationLogin = event => 
  {
    
    
    console.log("working!");
/*
    API.getUsers().then(res =>

        this.setState({ users: res.data, username: "", password: "", full_name="", email="", country="", skills="", experience=""})

        ).catch(err => console.log(err));
*/
   
  };

  

  render()
  {



    return(

    	

    	<div>

    		<Navbar />

    		<Wrapper>

    			<Container>

    				<Row>

    					<Col size="lg-12">

    						<Jumbotron>

                  <FormList>

                    <Textfields />

                    </FormList>

                  <span className ="nav-item" className={window.location.pathname === "/messages" ? "active" : ""}>
                  <Link to="/createaccount" className="nav-link" >
               
                  <SignUpButton
                      type="submit"
                      className="btn btn-primary signBtn float-right"
                  >
                      Sign-Up
                  </SignUpButton>

                  </Link>
                  </span>

  

                  <span className ="nav-item" className={window.location.pathname === "/messages" ? "active" : ""}>
                  <Link to="/profile" className="nav-link" >

                  <LoginButton
                    onClick={this.authenticationLogin}
                    type="submit"
                     className="btn btn-primary loginBtn float-right"
                  >
                  Login
                  </LoginButton>

                  </Link>
                  </span>

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