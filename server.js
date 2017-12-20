const express = require("express");
// const path = require("path");
const method = require("method-override");
const bodyParser = require("body-parser");
const routes = require("./routes");
// const mongoose = require("mongoose");

var port = process.env.PORT || 3005;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));
app.use(express.static("client/build"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// DO WE WANT TO USE ROUTES FROM THE CONTROLLER FOLDER OR THE ROUTES FOLDER?
// Import routes and give the server access to them.
// var routes = require("./controllers/closet_controller.js");

// app.use(routes);

// TO USE MONGODB AND MONGOOSE
// Set up promises with mongoose
// mongoose.Promise = global.Promise;
// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
//   {
//     useMongoClient: true
//   }
// );

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});