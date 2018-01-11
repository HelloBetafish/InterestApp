


const router = require("express").Router();
const appController = require("../../controllers/app_controller");

router.route("/:id")
.get(appController.popPosts)
.post(appController.createPost);


module.exports = router;