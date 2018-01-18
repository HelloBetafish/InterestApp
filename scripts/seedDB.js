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
 	photoURL: "css/images/tj3.jpg"
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
 	photoURL: "css/images/Jesse1.jpg"
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
 	photoURL: "css/images/reyna2.jpg"
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
 	photoURL: "css/images/bethany.jpg"
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
  photoURL: "css/images/bill.jpg"
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
  photoURL: "css/images/jen.jpg"
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
  photoURL: "css/images/dave.jpg"
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
  photoURL: "css/images/dan.jpg"
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

