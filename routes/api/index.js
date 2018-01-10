const router = require("express").Router();
const userRoutes = require("./users");		//users.js in this current directory
const userRoutes2 = require("./signin");	
const userRoutes3 = require("./idea");
const userRoutes4 = require("./personalinfo");
const userRoutes5 = require("./conncoll");
const userRoutes6 = require("./file");


// users routes app or router can be used
router.use("/users", userRoutes);

//signin routes app or router can be used
router.use("/signin", userRoutes2);

//idea routes app or router can be used
router.use("/idea", userRoutes3);

//obtains idea object
router.use("/personalinfo", userRoutes4);

router.use("/connect&collaborate", userRoutes5);

router.use("/file", userRoutes6);

module.exports = router;
