const router = require("express").Router();
const appController = require("../../controllers/app_controller");

router.route("/:id")
.post(appController.createFile);

module.exports = router;