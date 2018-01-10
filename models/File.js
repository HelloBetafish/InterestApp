const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FileSchema = new Schema({

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

const File = mongoose.model("File", FileSchema);

module.exports = File;