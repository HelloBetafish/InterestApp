const db = require("../models");

// Export routes for server.js to use.
// module.exports = router;
/* NOTE: .then(dbModel => res.json(dbModel))		
	
				 SAME AS 

	  	 .then(function(dbModel)
         {
			res.json(dbModel);
      	 });
 */

module.exports =
{
  //login:
  findAll: function(req, res)
  {
  	
	db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))						
      .catch(err => res.status(422).json(err));
      

    
   },

  //Profile: Searches for user by using (id) we pass as parameter and returns user object form mongoDB
  //Connect&Collaborate: retrieves all users in DB and displays each one.
  findById: function(req, res) 
  {
     db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  create: function(req, res) 
  {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  update: function(req, res) 
  {
  	/*
    db.User.update({ _id: req.params.id }, {$set: {"online": 1}}).then(function(dbModel)
    {
    	console.log("true");
    	console.log(req.params.id);
    	res.json(dbModel);
    }).catch(function(err)
    {
    	console.log("false");
    	res.status(422).json(err)
    })
    */
    

	
	
      //DB1: user collection(table). Set field(online = true)
      db.User.update({ _id: req.params.id }, {$set: {"online": 1}} ).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

      //Removes user id of previous user so profile can obtain data of new user signing in.
      db.Signin.remove({}).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));

      //DB2: signin collection(table). set field(IdOfSignedUser = id of user logging in)
      db.Signin
      .create({ IdOfSignedUser: req.params.id }).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

   
  },

  //Returns the signins object from db to obtain the field (IdOfSignUser)
  //which implies that this id belongs to a signed in user. 
  findId: function(req, res) 
  {
  	
    db.Signin
      .find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))						
      .catch(err => res.status(422).json(err));
      
     
      /*
      //dbModel is an array of signin objects stored inside mongoDB
      db.Signin.find().sort({ date: -1 }).then(function(dbModel)
      {
      	console.log("signed user");
      	console.log(dbModel);
      	res.json(dbModel);

      }).catch(function(err)
      {
      	console.log("falseeeee");
      	res.status(422).json(err);

      });
      */
      
  },

  //Profile: Adds the idea field to (user) collection whenever a user saves his/her idea
  addField: function(req, res)
  {

  	db.User.findOne({ _id: req.params.id }).populate("idea").then(function(dbIdea)
  	{	
  		console.log("populate");
  		console.log(req.params.id);
    	
    	res.json(dbIdea);

  	}).catch(function(err)
  	{
  		
    	res.json(err);
  	});

  },

  addIdea: function(req, res)
  {
  	//Save new idea inside (ideas) collection
  	db.Idea.create(req.body).then(function(dbIdea)
  	{

   

    	//Without this the newly created note field is not inserted inside the particular article
    	//that is found by article(id) inside our mongoDB
    	return db.User.findOneAndUpdate({_id: req.params.id}, {idea: dbIdea._id}, {new: true});

  
  	}).then(function(dbUser)
  	{
  
    	//If we were able to successfully update an Article, send it back to client
    	res.json(dbUser)

  	}).catch(function(err)
  	{
    	res.json(err);
  	});


  }







};