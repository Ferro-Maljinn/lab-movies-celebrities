const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


const movies = require('./movies.routes')
router.use("./movies.routes", movies);

const celebrity = require("./celebrities.routes");
router.use("./celebrities.routes", celebrity);


module.exports = router;
