//var express = require("express");
//var path = require("path");
//var router = express.Router();

const db = require("../models");

// Export routes for server.js to use.
// module.exports = router;

module.exports =
{
  findAll: function(req, res)
  {
	db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
   }


};