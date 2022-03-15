// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// to GET Home
router.get("/", (req, res, next) => {
  res.render("movies/movies");
});

/* to GET movie-details */
router.get("/movie-details", (req, res, next) => {
  res.render("movies/movie-details");
});

/* to GET edit-movie */
router.get("/edit-movie", (req, res, next) => {
  res.render("movies/edit-movie");
});

/* to GET new movie */
router.get("/new-movie", (req, res, next) => {
  res.render("movies/new-movie");
});

module.exports = router;