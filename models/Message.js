const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({

  title: {
    type: String
  },
 
  body: {
    type: String
  },
  
  userCreated: {
    type: Date,
    default: Date.now   
   }
});

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;