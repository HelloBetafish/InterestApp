const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Create = new Schema({

  username: { type: String, required: true},
  password: { type: String, required: true},
  full_name: { type: String, required: true},
  email: { type: String, required: true},
  country: { type: String, required: true},
  skills: { type: String, required: true},


});
const Create = mongoose.model("Createp", Createp);

module.exports = createp;