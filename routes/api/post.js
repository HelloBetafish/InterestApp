const router = require("express").Router();
const appController = require("../../controllers/app_controller");

router.route("/:id")
.get(appController.popPost)
.post(appController.createPost);

module.exports = router;