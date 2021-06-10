const router = require("express").Router();
const db = require("../models");
const withAuth = require("../client/src/utils/auth")

router.get("/user", (req, res) => {
  // Use a regular expression to search both languages and strength fields for req.query.q
  // using case insensitive match with 'i'. 
 db.User.find().or([{ 'languages': { $regex: new RegExp(req.query.q, 'i') }}, { 'strengths': { $regex:new RegExp(req.query.q, 'i') }}])
  //languages: { $regex: new RegExp(req.query.q, 'i')}
  .then(users => res.json(users))
  .catch(err => res.status(422).end());
});






module.exports = router;
