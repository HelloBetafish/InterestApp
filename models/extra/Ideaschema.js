const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const IdeaSchema = new Schema({
  
  idea_name: { type: String, required: true},
  time_frame: { type: String, required: true},
  idea: { type: String, required: true},
  reason: { type: String, required: true},
});
const Idea = mongoose.model("Idea", IdeaSchema);

module.exports = Idea;