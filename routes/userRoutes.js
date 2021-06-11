const router = require("express").Router();
const { User } = require("../models/index");

router.post("/", async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData._id;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const {email, password} = req.body
    const userData = await User.find({email});

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email, please try again" });
      return;
    }
console.log(userData);
    const validPassword = userData[0].password === password;

    if (!validPassword) {
      res
        .status(400)
        .alert({ message: "Incorrect password, please try again" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData._id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
