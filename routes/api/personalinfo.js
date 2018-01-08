const router = require("express").Router();
const appController = require("../../controllers/app_controller");

router.route("/:id")
.get(appController.getIdea);



module.exports = router;