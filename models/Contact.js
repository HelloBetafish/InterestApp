const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ContactSchema = new Schema({

  contactId: 
  { 
  	type: String, 
  	required: true
  },

  full_name:
  { 
  	type: String, 
  	required: true
  },

  title:
  {
    type: String,
    required: true
  },

  skills: 
  { 
  	type: String, 
  	required: true
  }
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;