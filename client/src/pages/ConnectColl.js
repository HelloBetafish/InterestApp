/*
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
    user: {},
    users: [],
    IdOfSignedUser: "",
  };

  componentDidMount() 
  {
    this.loadLoggedUsers();
    this.loadUsers();
    
  }

  //Function1: Get the Id of the user that is signed in
  loadLoggedUsers = () => 
  {
    
      API.getIdOfLoggedInUser().then(res =>
        
        this.setState({ IdOfSignedUser: res.data[0].IdOfSignedUser }, this.getUser(res.data[0].IdOfSignedUser) )

        ).catch(err => console.log(err))

  };

  //Function2: use the recently obtained (id) to get user object
  getUser = (id) =>
  {

    API.getUser(id).then(res => 
          this.setState({ user: res.data }, console.log(res.data))
          ).catch(err => console.log(err))
  };

  // Function3: load other users
  loadUsers = () => 
  {
    API.getUsers()
      .then( res =>
        this.setState({ users: res.data})
        ).
        catch(err => console.log(err));
  };

  handleClick = (event) => {
    event.preventDefault();
    const contactId = event.target.attributes.getNamedItem("data-id").value;
    console.log(contactId);
    // Use ID value to redirect to that person's profile page.
    this.addContact(contactId);
    
  };

  addContact = (contactId) => {
    // if (this.state.guessedCards.indexOf(id) === -1) 
    API.saveContact(this.state.IdOfSignedUser,
      { 
        contactUserId: contactId
        }).then(res => console.log("Success!"))
        .catch(err => console.log(err));
    this.getUser(this.state.IdOfSignedUser);
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
   <h1 id="titleconnections" className="bounceInUp" style={{marginTop:"50px"}}>Connect & Collaborate</h1> 
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
      {this.state.users.filter(user => user._id != this.state.IdOfSignedUser)
      .map(card => (
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
*/