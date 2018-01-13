const router = require("express").Router();
const appController = require("../../controllers/app_controller");

router.route("/connect&collaborate")
.get(appController.findAll);


module.exports = router;