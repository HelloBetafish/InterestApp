const express = require("express");
// const path = require("path");
const method = require("method-override");
const bodyParser = require("body-parser");
const routes = require("./routes");

var port = process.env.PORT || 3005;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));
app.use(express.static("client/build"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// Import routes and give the server access to them.
// var routes = require("./controllers/closet_controller.js");

// app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});