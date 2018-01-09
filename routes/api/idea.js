const router = require("express").Router();
const appController = require("../../controllers/app_controller");

router.route("/:id")
.get(appController.addField)
.post(appController.addIdea);

router.route("/")
.get(appController.getAllIdeas);




module.exports = router;