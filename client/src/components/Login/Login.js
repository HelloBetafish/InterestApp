import React, {Component} from "react";
import "./Login.css";
import Wrapper from "./Wrapper";
import Jumbotron from "./Jumbotron";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";


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

    		<Wrapper>

    			<Container>

    				<Row>

    					<Col size="lg-12">

    						<h1>
    							Hey you guys!
    						</h1>

    					</Col>
    				</Row>
    			</Container>
    		</Wrapper>
    	</div>




    	);
    
  }
}

export default Login;