const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const docSchema = new Schema({

  fileName: 
  { 
  	type: String, 
  	required: true
  },

  fileUrl: 
  { 
  	type: String, 
  	required: true
  },

  userId:
  {
    type: String,
    required: true
  }
});

const Document = mongoose.model("Document", docSchema);

module.exports = Document;