const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

  username: 
  { 
  	type: String, 
  	required: true
  },

  password: 
  { 
  	type: String, 
  	required: true
  },

  title:
  {
    type: String,
    required: true
  },

  full_name: 
  { 
  	type: String, 
  	required: true
  },

  email: 
  { 
  	type: String, 
  	required: true
  },

  country: 
  { 
  	type: String, 
  	required: true
  },

  skills: 
  { 
  	type: String, 
  	required: true
  },

  experience:
  {
  	type: String,
  	required: true
  },

  //When new user is created they are automatically given the field(online) where
  //the value is set to default value (false).
  online:
  {
    type: Boolean,
    default: false,
  
  },

  photoURL:
  {
    type: String,
    default: "css/images/addphoto.png"
  },

  idea: 
  {
    type: Schema.Types.ObjectId,
    ref: "Idea"
  },
  documents: [
    {
    type: Schema.Types.ObjectId,
    ref: "Document"
    }
  ],

  contacts: [
    {
    type: Schema.Types.ObjectId,
    ref: "Contact"
    }
  ],

  messages: [
    {
    type: Schema.Types.ObjectId,
    ref: "Message"
    }
  ]

});

const User = mongoose.model("User", userSchema);

module.exports = User;