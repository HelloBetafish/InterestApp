const router = require("express").Router();
const appController = require("../../controllers/app_controller");

router.route("/")
.get(appController.findProfileId);

router.route("/:id")
.post(appController.createProfileId);

module.exports = router;