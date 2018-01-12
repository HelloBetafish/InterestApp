const router = require("express").Router();
const appController = require("../../controllers/app_controller");

router.route("/:id")
.put(appController.updateUserField);

module.exports = router;