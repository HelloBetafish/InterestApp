

const router = require("express").Router();
const userRoutes = require("./users");		//users.js in this current directory
const userRoutes2 = require("./signin");	
const userRoutes3 = require("./idea");
const userRoutes4 = require("./personalinfo");
const userRoutes5 = require("./conncoll");
const userRoutes6 = require("./file");
const userRoutes7 = require("./contacts");
const userRoutes8 = require("./photo");
const userRoutes9 = require("./post");


// users routes app or router can be used
router.use("/users", userRoutes);

//signin routes app or router can be used
router.use("/signin", userRoutes2);

//idea routes app or router can be used
router.use("/idea", userRoutes3);

//obtains idea object
router.use("/personalinfo", userRoutes4);

router.use("/conncoll", userRoutes5);

router.use("/file", userRoutes6);

router.use("/contacts", userRoutes7);

router.use("/photo", userRoutes8);

router.use("/post", userRoutes9);

module.exports = router;
