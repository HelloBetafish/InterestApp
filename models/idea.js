const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({


  ideaName: 
  { 
  	type: String, 
  	required: true
  },

  whatIsIdea:
  {
  	type: String,
  	required: true
  },

  whyGoodIdea:
  {
  	type: String,
  	required: true
  },

  photo:
  {
    type: String,
  	default: "css/images/darkroom3.JPG"
  },

  Author:
  {
    type: String,
    default: ""
  }


 });

const Idea = mongoose.model("Idea", userSchema);

module.exports = Idea;