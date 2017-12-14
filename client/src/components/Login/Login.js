import React, {Component} from "react";
import "./Login.css";
import Wrapper from "./Wrapper";
import Jumbotron from "./Jumbotron";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Navbar from "./Navbar";

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

    						

    					</Col>
    				</Row>
    			</Container>
    		</Wrapper>
    	</div>




    	);
    
  }
}

export default Login;