
import React, {Component} from "react";
import ReactFilestack, { client } from 'filestack-react';
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";

import Idea from "../components/Idea";
import "../style/connectColl.css";

class BrowseIdeas extends Component {
  state = 
  {
    ideas: [],
    IdOfSignedUser: ""
  };

  componentDidMount() 
  {

      this.loadLoggedUsers();
      //this.getAllIdeas();
  }

  //ReUse: Get Id of logged in user
  loadLoggedUsers = () => 
  {
    
      API.getIdOfLoggedInUser().then(res =>
        
        this.setState({ IdOfSignedUser: res.data[0].IdOfSignedUser }, this.getAllIdeas())

        ).catch(err => console.log(err))

  };

  getAllIdeas = () =>
  {
    API.getAllIdeas().then(res =>

        this.setState({ ideas: res.data }, console.log("all"), console.log(res.data))

        ).catch(err => console.log(err));
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
                <div ClassName="container-fluid" style={{marginBottom:"-5px"}}>
                <Row>
                  <Col size="md-1"/>
                  <Col size="md-11">
                  {this.state.ideas.length ? (
                    <Row>
                      {this.state.ideas.map(idea => (
                          <Idea
                            key={idea.id}
                            id={idea.id}
                            Author={idea.Author}
                            ideaName={idea.ideaName}
                            whatIsIdea={idea.whatIsIdea}
                            whyGoodIdea={idea.whyGoodIdea} 
                            photo={idea.photo}
                          />                                                 
                      ))}
                    </Row> 
                  ) : (<h3 className="text-center">
                    Looks like someone needs to start innovating!
                    <br/>Why don't you be the first?<br/>
                    <Link to="/dashboard#ideas">Click here to create an idea.</Link></h3>
                  )}
                  </Col>
                </Row>
                </div>
               
      
            </div>
          </div>
         


      </div>




    );
  }
}
export default BrowseIdeas;
