const router = require("express").Router();
const appController = require("../../controllers/app_controller");

router.route("/:id")
.get(appController.addField)
.post(appController.addIdea);

router.route("/")
.get(appController.getIdea);



module.exports = router;