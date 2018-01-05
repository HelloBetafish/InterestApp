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
  findAll: function(req, res)
  {
  	
	db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))						
      .catch(err => res.status(422).json(err));
      

    
   },

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
      /*
      db.Signin
      .create({ IdOfSignedUser: req.params.id }).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      */

      db.Signin
      .create({ IdOfSignedUser: req.params.id }).then(function(dbModel)
      {
      	console.log("TRUE in");
      	res.json(dbModel);
      }).catch(err => res.status(422).json(err));


   
  },

  findId: function(req, res) 
  {
  	/*
    db.Signin
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))						
      .catch(err => res.status(422).json(err));
     */


      db.Signin.find(req.query).sort({ date: -1 }).then(function(dbModel)
      {
      	console.log("TEST");
      	res.json(dbModel);

      }).catch(function(err)
      {
      	console.log("falseeeee");
      	res.status(422).json(err);

      });
  }





};