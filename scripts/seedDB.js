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
 	title: "SoftwareEngineer",
 	full_name: "TJ Stephens",
 	email: "TJ@gmail.com",
 	country: "USA",
 	skills: "programming, Engineering",
 	experience: "5 years",
 	online: false,
 	photoURL: "https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAgfAAAAJGE2N2FjMTAyLTQ4OGMtNDYzNi04OTRkLTQzYTUwMzQwNzU4OQ.jpg"
 },

{
 	username: "Jesse202",
 	password: "U2FsdGVkX1+jqZJflJwT8lb+PykvPm3dWFIOVF6bCSU=",
 	title: "SoftwareEngineer",
 	full_name: "Jesse Forte",
 	email: "Jesse@gmail.com",
 	country: "USA",
 	skills: "programming, Engineering",
 	experience: "5 years",
 	online: false,
 	photoURL: "https://media-exp2.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAqPAAAAJDdiMjVkOWI0LTExYmItNGNjZS1iMzMyLWRhNjg5MTRiNDE2ZA.jpg"
 },

 {
 	username: "Reyna303",
 	password: "U2FsdGVkX1+jqZJflJwT8lb+PykvPm3dWFIOVF6bCSU=",
 	title: "SoftwareEngineer",
 	full_name: "Reyna Perez",
 	email: "Reyna@gmail.com",
 	country: "USA",
 	skills: "programming, Engineering",
 	experience: "5 years",
 	online: false,
 	photoURL: "https://avatars1.githubusercontent.com/u/26176947?s=460&v=4"
 },

 {
 	username: "Bethany404",
 	password: "U2FsdGVkX1+jqZJflJwT8lb+PykvPm3dWFIOVF6bCSU=",
 	title: "SoftwareEngineer",
 	full_name: "Bethany Pfeister",
 	email: "Bethany@gmail.com",
 	country: "USA",
 	skills: "programming, Engineering",
 	experience: "5 years",
 	online: false,
 	photoURL: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAIABADGAAAAAQAAAAAAAA02AAAAJDhkOGZiM2E5LTQxMjYtNDc0YS1hMzI1LTNiMmFiZTI1ZWRkMQ.jpg"
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

