const User = require("../models/User.js");
const express = require("express");
const router = express.Router();

//!GetAll
router.get("/get-all", async (req, res) => {
  try {
    const users = await User.find(); //veri tabanından getir
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json("Error", error);
  }
});

//!Get a user
router.get("/", async (req, res) => {
  const userID = req.body.userID;
  try {
    const user = await User.findById(userID);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json("Error", error);
  }
});

module.exports = router;
