const router = require("express").Router();
const appController = require("../../controllers/app_controller");

// Matches with "/api/books"
router.route("/")
  .get(appController.findAll)
  .post(appController.create);
  
  //.put(appController.update);

// Matches with "/api/books/:id"

 router.route("/:id")
 .get(appController.update);



  
  //.delete(booksController.remove);

module.exports = router;
