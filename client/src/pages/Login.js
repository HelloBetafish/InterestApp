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




class Login extends Component
{

   state = 
  {
    page: false,
    users: []
  }

  //Function1: Executes when user clicks [Login] button
  authenticationLogin = event => 
  {
    
    //console.log("test");
    //this.setState({ page: true });
    //console.log(this.state.page);

    console.log("working!")

   
  };

  /*
  loadUsers = () => 
  {

    API.getUsers().then(res =>
        
        //change title to userName && change author to password. delete or replace synopsis.
        this.setState({ users: res.data, title: "", author: "", synopsis: "" })
      
      ).catch(err => console.log(err));
    console.log(res.data);
  };

*/

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