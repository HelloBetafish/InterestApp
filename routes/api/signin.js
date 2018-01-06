const router = require("express").Router();
const appController = require("../../controllers/app_controller");

// Matches with "/api/books"
router.route("/")
.get(appController.findId);

router.route("/:id")
.get(appController.findById)

module.exports = router;