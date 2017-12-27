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


  //user enters data in textfields
  handleInputChange = event => 
  {
    //name and value come from <input  value={this.state.title} name "title" ...>
    //                         <input  value={this.state.author} name "author" ...>                       
    //                         <input  value={this.state.synopsis} name "synopsis" ...>
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

    		<Wrapper>

    			<Container>

    				<Row>

    					<Col size="lg-12">

    						<Jumbotron>

                  <FormList>


                    <h4> Email </h4>
                    <Textfield 
                          value = {this.state.username}
                          onChange={this.handleInputChange}
                          type="email"
                          name="username"
                          placeholder="Email"

                    />

                    <h4> Password </h4>
                    <Textfield 
                          value = {this.state.password}
                          type="password"
                          onChange={this.handleInputChange}
                          name="password"
                          placeholder="Password"

                    />

                    </FormList>

                  <span className ="nav-item" className={window.location.pathname === "/createaccount" ? "active" : ""}>
                  <Link to="/createaccount" className="nav-link" >
               
                  <SignUpButton
                      type="submit"
                      className="btn btn-primary signBtn float-right"
                  >
                      Sign-Up
                  </SignUpButton>

                  </Link>
                  </span>

  

                  <span className ="nav-item" className={window.location.pathname === "/profile" ? "active" : ""}>
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