const router = require("express").Router();
const appController = require("../../controllers/app_controller");

router.route("/:id")
.post(appController.createDoc)
.delete(aappController.removeDoc);

module.exports = router;