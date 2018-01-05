const router = require("express").Router();
const appController = require("../../controllers/app_controller");

// Matches with "/api/books"
router.route("/")
  .get(appController.findAll)
  .post(appController.create)
  .post(appController.addId);
  
  //.put(appController.update);

// Matches with "/api/books/:id"

 router.route("/:id")
 .get(appController.update);

 router.route("/connect&collaborate")
 .get(appController.findAll);

  
  //.delete(booksController.remove);

module.exports = router;
