const Category = require("../models/Category.js");
const express = require("express");
const router = express.Router();


//!GetAll
router.get("/get-all", async (req, res) => {
  try {
    const categories = await Category.find(); //veri tabanından getir
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json("Error", error);
  }
});

//!Create
router.post("/add-category", async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).json("Ürün başarıyla eklendi");
  } catch (error) {
    res.status(400).json(error);
  }
});

//!Update
router.put("/update-category", async (req, res) => {
  try {
    await Category.findOneAndUpdate({ _id:req.body.categoryID }, req.body); //içine gelen id yi otomatik döndürür,ve req.body den gelen ile değiştir
    res.status(200).json("Veri güncellemesi başarılı.");
  } catch (error) {
    res.status(500).json("Error", error);
  }
});

//!Delete
router.delete("/delete-category", async (req, res) => {
  try {
    await Category.findOneAndDelete({ _id:req.body.categoryID }); //içine gelen id yi otomatik döndürür,ve siler
    res.status(200).json("Veri silme işlemi başarılı.");
  } catch (error) {
    res.status(500).json("Error", error);
  }
});
module.exports = router;
