const router = require("express").Router();
const appController = require("../../controllers/app_controller");

// Matches with "/api/books"
router.route("/")
  .get(appController.findAll)
  .post(appController.create);

// Matches with "/api/books/:id"
router
  //.route("/:id")
  //.get(booksController.findById)
  //.put(booksController.update)
  //.delete(booksController.remove);

module.exports = router;
