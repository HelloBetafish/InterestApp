const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Post = new Schema({

  body: {
    type: String,
    minLength: 1,
    maxLength: 150
  },
 
  senderId: {
    type: String,
    required: true
  },

  senderName: {
    type: String,
    required: true
  },
  
  userCreated: {
    type: Date,
    default: Date.now   
   }
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;