const Bill = require("../models/Bill.js");
const express = require("express");
const router = express.Router();


//!GetAll
router.get("/get-all", async (req, res) => {
  try {
    const bills = await Bill.find(); //veri tabanından getir
    res.status(200).json(bills);
  } catch (error) {
    res.status(500).json("Error", error);
  }
});

//!Create
router.post("/add-bill", async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    await newBill.save();
    res.status(200).json("Fatura başarıyla kaydedildi");
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
