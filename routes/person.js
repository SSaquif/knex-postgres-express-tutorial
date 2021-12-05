const express = require("express");

const router = express.Router();

router.get("/person", (req, res) => {
  res.json({ msg: "TODO" });
});

module.exports = router;
