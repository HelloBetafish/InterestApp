import React, {Component} from "react";
import Navbar from "../components/Navbar";
import Row from "../components/Row";
import Col from "../components/Col";
import ImgCard from "../components/ImgCard";
import AddContactBtn from "../components/AddContactBtn";
import API from "../utils/API";
import "../style/connectColl.css";

class ConnectColl extends Component {
  state = 
  {
    users: [],
    full_name: "",
    title: "",
    skills: "",
    _id: "",
    photoURL: ""
  };

  componentDidMount() 
  {
    this.loadUsers();
  }

  loadUsers = () => 
  {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, full_name: "", title: "", skills:"", _id: "", photoURL: ""})
        ).
        catch(err => console.log(err));
  };

  handleClick = (event) => {
    const cardId = event.target.attributes.getNamedItem("data-id").value;
    console.log(cardId);
    console.log()
    // Use ID value to redirect to that person's profile page.
    // 
  }

  render() {
    return(

<div>
  <Navbar />
  
<div className="cd-fixed-bg cd-bg-1">

<div id="section1">
 <div id="photo" className="container">

<Row>
<Col size="md-12">
   <h1 id="titleconnections" className="bounceInUp" style={{marginTop:"50px"}}>Connect or Collaborate</h1> 
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

    <Row>
      {this.state.users.map(card => (
        <Col size="md-3" className="zoom">
          <ImgCard
            photoURL={card.photoURL}
            full_name={card.full_name}
            title={card.title}
            skills={card.skills}
            key={card._id}
          />
          <AddContactBtn id={card._id} handleClick={this.handleClick}/>
        </Col>
      ))}
    </Row>


  <Row>
    <Col size="md-3" className="zoom">
      <div className="img-thumbnail">
        <img src="css/images/bethany.jpg" width="150" height="150" style={{marginLeft:"45px"}}/>
        <div className="people">
          <p id="texta">Bethany</p> 
          <p id="textb">Web Developer <br/> Front and Back end <br/> MEETUP APPLICATION </p> 
        </div>   
      </div>
      <AddContactBtn handleClick={this.handleClick}/>
    </Col>

    <Col size="md-3" className="zoom">
            

             
                <div className="img-thumbnail">
                      <img src="css/images/tj.jpg" width="150" height="150" style={{marginLeft:"45px"}}/>
                    <div className="people">
                        <p id="texta">TJ</p> 
                        <p id="textb">Web Developer <br/> Front and Back end <br/> MEETUP APPLICATION </p>
                    </div>   
                </div>
                <AddContactBtn handleClick={this.handleClick}/>
              

    </Col>

    <Col size="md-3" className="zoom">
            

             
                <div className="img-thumbnail">
                      <img src="css/images/john.jpg" width="150" height="150" style={{marginLeft:"45px"}}/>
                    <div className="people">
                        <p id="texta">John</p> 
                        <p id="textb">Web Developer <br/> Front and Back end <br/> MEETUP APPLICATION </p>
                    </div>   
                </div>
                <AddContactBtn handleClick={this.handleClick}/>
              

    </Col>

  
    <Col size="md-3" className="zoom">
            

             
                <div className="img-thumbnail">
                      <img src="css/images/Jesse1.jpg" width="150" height="150" style={{marginLeft:"45px"}}/>
                    <div className="people">
                        <p id="texta">Jesse</p> 
                        <p id="textb">Web Developer <br/> Front and Back end <br/> MEETUP APPLICATION </p>
                    </div>   
                </div>
                <AddContactBtn handleClick={this.handleClick}/>
              

    </Col>
  </Row>
</div>


<div id="photo" className="container">
  <Row>
   
    <Col size="md-3" className="zoom">


                <div className="img-thumbnail">
                      <img src="css/images/reyna2.jpg" width="150" height="150" style={{marginLeft:"45px"}}/>
                    <div className="people">
                        <p id="texta">Reyna</p> 
                        <p id="textb">Web Developer <br/> Front and Back end <br/> MEETUP APPLICATION </p>
                    </div>   
                </div>
                <AddContactBtn handleClick={this.handleClick}/>
          
      
    </Col>
    <Col size="md-3" className="zoom">
            

             
                <div className="img-thumbnail">
                      <img src="css/images/Emma.jpg" width="150" height="150" style={{marginLeft:"45px"}}/>
                    <div className="people">
                        <p id="texta">Emma</p> 
                        <p id="textb">Web Developer <br/> Front and Back end <br/> MEETUP APPLICATION </p>
                    </div>   
                </div>
                <AddContactBtn handleClick={this.handleClick}/>
              

    </Col>

    <Col size="md-3" className="zoom">
            

             
                <div className="img-thumbnail">
                      <img src="css/images/tim.jpg" width="150" height="150" style={{marginLeft:"45px"}}/>
                    <div className="people">
                        <p id="texta">Tim</p> 
                        <p id="textb">Web Developer <br/> Front and Back end <br/> MEETUP APPLICATION </p>
                    </div>   
                </div>
                <AddContactBtn handleClick={this.handleClick}/>
              

    </Col>

  
    <Col size="md-3" className="zoom">
            

             
                <div className="img-thumbnail">
                      <img src="css/images/zac.jpg" width="150" height="150" style={{marginLeft:"45px"}}/>
                    <div className="people">
                        <p id="texta">Zac</p> 
                        <p id="textb">Web Developer <br/> Front and Back end <br/> MEETUP APPLICATION </p>
                    </div>   
                </div>
                <AddContactBtn handleClick={this.handleClick}/>
              

    </Col>
  </Row>
</div>


<section id="services">
 <div className="container">

  
</div>
</section>
</div>
</div>
</div>



    );
  }
}

export default ConnectColl;