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
 	password: "U2FsdGVkX1+jqZJflJwT8lb+PykvPm3dWFIOVF6bCSU=",
 	full_name: "TJ Stephens",
 	email: "TJ@gmail.com",
 	country: "USA",
 	skills: "programming, Engineering",
 	experience: "5 years",
 	online: false
 },

{
 	username: "Jesse202",
 	password: "U2FsdGVkX1+jqZJflJwT8lb+PykvPm3dWFIOVF6bCSU=",
 	full_name: "Jesse Forte",
 	email: "Jesse@gmail.com",
 	country: "USA",
 	skills: "programming, Engineering",
 	experience: "5 years",
 	online: false
 },

 {
 	username: "Reyna303",
 	password: "U2FsdGVkX1+jqZJflJwT8lb+PykvPm3dWFIOVF6bCSU=",
 	full_name: "Reyna Perez",
 	email: "Reyna@gmail.com",
 	country: "USA",
 	skills: "programming, Engineering",
 	experience: "5 years",
 	online: false
 },

 {
 	username: "Bethany404",
 	password: "U2FsdGVkX1+jqZJflJwT8lb+PykvPm3dWFIOVF6bCSU=",
 	full_name: "Bethany Pfeister",
 	email: "Bethany@gmail.com",
 	country: "USA",
 	skills: "programming, Engineering",
 	experience: "5 years",
 	online: false
 }



 ];


  db.User.remove({})
  
  .then(() => db.User.collection.insertMany(userSeed))

  .then(data => 
  {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

