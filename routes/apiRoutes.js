const router = require("express").Router();
const db = require("../models");
const withAuth = require("../utils/auth.js")

router.get("/users", withAuth, (req, res) => {
  // Use a regular expression to search titles for req.query.q
  // using case insensitive match. https://docs.mongodb.com/manual/reference/operator/query/regex/index.html
 
 //this needs to be changed depending on what will be searched
  db.Users.find({
    title: { $regex: new RegExp(req.query.q, 'i')}
  })
    .then(users => res.json(users))
    .catch(err => res.status(422).end());
});

module.exports = router;
