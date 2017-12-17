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
import { BrowserRouter as Router, Route } from "react-router-dom";




class Login extends Component
{
   state = 
  {
    page: false
  }

  //Executes when user hits [Login] button
  handleFormSubmit = event => 
  {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    //this.state.recipeSearch(contains: Burger) && recipes(this.state.recipes) contains array of burger objects.
    event.preventDefault();

    console.log("Yoot");
    this.setState({ page: true });
    console.log(this.state.page);

    

  };

  renderPage = () =>
  {
console.log("test");
 // return <Profile />;


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

                    <SignUpButton
               
                type="submit"
                className="btn btn-primary signBtn float-right"

                >
                  Sign-Up
                </SignUpButton>
  
               <LoginButton
               
                onClick={this.handleFormSubmit}
                type="submit"
                className="btn btn-primary loginBtn float-right"

                >
                  Login
                </LoginButton>
                {this.renderPage()}

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