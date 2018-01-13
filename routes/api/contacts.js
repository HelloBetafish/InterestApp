const router = require("express").Router();
const appController = require("../../controllers/app_controller");

router.route("/:id")
.get(appController.findById)
.post(appController.createContact);

module.exports = router;