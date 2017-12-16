import React, {Component} from "react";
import "../components/Login/Login.css";
import Wrapper from "../components/Login/Wrapper";
import Jumbotron from "../components/Login/Jumbotron";
import Container from "../components/Login/Container";
import Row from "../components/Login/Row";
import Col from "../components/Login/Col";
import Navbar from "../components/Login/Navbar";


class Login extends Component
{
   state = 
  {
    def: 0
  }
  

  render()
  {
    return(

    	

    	<div>

    		<Navbar />

    		<Wrapper>

    			<Container>

    				<Row>

    					<Col size="lg-12">

    						<Jumbotron />

    					</Col>
    				</Row>
    			</Container>
    		</Wrapper>
    	</div>




    	);
    
  }
}

export default Login;