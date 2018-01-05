const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

  IdOfSignedUser: 
  { 
  	type: String, 
  	default: ""
  }

});

const Signin = mongoose.model("Signin", userSchema);

module.exports = Signin;