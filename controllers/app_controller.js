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
   
	
	
    
      db.User.update({ _id: req.params.id }, {$set: {"online": 1}} ).then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
   
  },

  addId: function(req, res) 
  {
    db.Signin
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },





};