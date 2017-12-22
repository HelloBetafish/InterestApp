const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// Connect to the Mongo DB
 mongoose.connect(
   process.env.MONGODB_URI || "mongodb://localhost/interestAppDB",
  {
    useMongoClient: true
  }
 );

 const userSeed = [

 {
 	username: "TJ101",
 	password: "123",
 	full_name: "TJ Stephens",
 	email: "TJ@gmail.com",
 	country: "USA",
 	skills: "programming, Engineering",
 	experience: "5 years"
 }





 ];

db.User.remove({})

	.then(() => db.User.collection.insertMany(userSeed))

	.then(data => 
  	{
    	console.log(data.insertedIds.length + " records inserted!");
    	process.exit(0);
  
  	}).catch(err => {

    console.error(err);
    process.exit(1);
    
  });
