// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");
const mongoose = require("mongoose");

// to GET celebrities
router.get("/celebrities", (req, res, next) => {
  res.render("celebrities/celebrities");
});

router.get("/celebrities/create", async (req, res, next) => {
  try {
    res.render("celebrities/new-celebrity");
  } catch (error) {
    console.log(error);
  }
});

router.post("/celebrities/create", async (req, res, next) => {
  console.log(req.body);
  try {
    await Celebrity.create(req.body);
    res.redirect("/celebrities");
  } catch (erro) {
    res.redirect("/celebrities/new-celebrity");
  }
});

module.exports = router;
