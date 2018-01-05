const router = require("express").Router();
const userRoutes = require("./users");		//users.js in this current directory


// users routes app or router can be used
router.use("/users", userRoutes);

//signin routes app or router can be used
//router.use("/signin", userRoutes2);

module.exports = router;
