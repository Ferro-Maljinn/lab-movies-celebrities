const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});



router.use(require("./movies.routes.js"));
router.use(require("./celebrities.routes.js"));

module.exports = router;
