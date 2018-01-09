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
 },

 {
  username: "Bill505",
  password: "U2FsdGVkX1+jqZJflJwT8lb+PykvPm3dWFIOVF6bCSU=",
  title: "Lawyer",
  full_name: "Bill Johnson",
  email: "Bill@gmail.com",
  country: "USA",
  skills: "Law, Contracts",
  experience: "10 years",
  online: false,
  photoURL: "http://thispix.com/wp-content/uploads/2015/06/portrait-profile-007.jpg"
 },

 {
  username: "Jen606",
  password: "U2FsdGVkX1+jqZJflJwT8lb+PykvPm3dWFIOVF6bCSU=",
  title: "Lawyer",
  full_name: "Jennifer Rodriguez",
  email: "Jen@gmail.com",
  country: "USA",
  skills: "Law, Contracts",
  experience: "15 years",
  online: false,
  photoURL: "https://i.pinimg.com/736x/aa/3f/f6/aa3ff6d2f13d4b8ae4aec358a51204a4--business-headshots-business-portrait.jpg"
 },

 {
  username: "Dave707",
  password: "U2FsdGVkX1+jqZJflJwT8lb+PykvPm3dWFIOVF6bCSU=",
  title: "CEO",
  full_name: "Dave Hill",
  email: "Dave@gmail.com",
  country: "USA",
  skills: "Accounting, Business",
  experience: "35 years",
  online: false,
  photoURL: "http://headshotsplano.com/wp-content/uploads/2013/08/38-Dallas-business-headshots.jpg"
 },

 {
  username: "Dan808",
  password: "U2FsdGVkX1+jqZJflJwT8lb+PykvPm3dWFIOVF6bCSU=",
  title: "Lead Software Engineer",
  full_name: "Daniel Barns",
  email: "Dan@gmail.com",
  country: "USA",
  skills: "C++, Java",
  experience: "20 years",
  online: false,
  photoURL: "https://ashwrightphotography.com/wp-content/uploads/2016/01/professional-louisville-business-headshots-nashville-15.jpg"
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

