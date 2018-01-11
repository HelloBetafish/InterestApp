const router = require("express").Router();
const appController = require("../../controllers/app_controller");

router.route("/:id")
.post(appController.createContact);

module.exports = router;