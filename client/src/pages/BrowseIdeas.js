import React, {Component} from "react";
import ReactFilestack, { client } from 'filestack-react';
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
import "../style/connectColl.css";

class BrowseIdeas extends Component {
  state = 
  {

  };

  render() {
    return(
      <div>
        <Navbar />
          <div className="cd-fixed-bg cd-bg-1">
            <div id="section1">
              <div id="photo" className="container">

                <Row>
                  <Col size="md-12">
                    <h1 id="titleconnections" className="bounceInUp" style={{marginTop:"50px"}}>Browse Ideas</h1> 
                  </Col>
                </Row>

                <div className="radiobuttons">
                  <label style={{color:"white"}}>
                    <input type="radio" className="option-input radio" name="example" / >
                    Tech
                  </label>
                  <label>
                    <input type="radio" className="option-input radio" name="example" />
                    Art
                  </label>
                  <label>
                    <input type="radio" className="option-input radio" name="example" />
                    Science
                  </label>
                  <label>
                    <input type="radio" className="option-input radio" name="example" />
                    Entertainment
                  </label>
                  <label>
                    <input type="radio" className="option-input radio" name="example" />
                    Entrepreneurship
                  </label>
                  <button style={{marginTop:"-10px"}} type="button" className="btn btn-outline-danger">search</button>
                </div>
              </div>  
            </div>
          </div>
      </div>
    );
  }
}
export default BrowseIdeas;