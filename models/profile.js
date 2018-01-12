const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

  IdOfUserProfile: 
  { 
  	type: String, 
  	default: ""
  }


});

const Profile = mongoose.model("Profile", userSchema);

module.exports = Profile;