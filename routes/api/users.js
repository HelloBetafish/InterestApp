const router = require("express").Router();
const appController = require("../../controllers/app_controller");

// Matches with "/api/books"
router.route("/")
  .get(appController.findAll)
  .post(appController.create);
 

// Matches with "/api/books/:id"
 router.route("/:id")
 .put(appController.update);

 router.route("/connect&collaborate")
 .get(appController.findAll);


module.exports = router;
