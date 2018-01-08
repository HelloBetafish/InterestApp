const router = require("express").Router();
const userRoutes = require("./users");		//users.js in this current directory
const userRoutes2 = require("./signin");	
const userRoutes3 = require("./idea");


// users routes app or router can be used
router.use("/users", userRoutes);

//signin routes app or router can be used
router.use("/signin", userRoutes2);

//idea routes app or router can be used
router.use("/idea", userRoutes3);

module.exports = router;
