const Product = require("../models/Product.js");
const express = require("express");
const router = express.Router();


//!GetAll
router.get("/get-all", async (req, res) => {
  try {
    const products = await Product.find(); //veri tabanından getir
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json("Error", error);
  }
});

//!Create
router.post("/add-product", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.status(200).json("Ürün başarıyla eklendi");
  } catch (error) {
    res.status(400).json(error);
  }
});

//!Update
router.put("/update-product", async (req, res) => {
  try {
    await Product.findOneAndUpdate({ _id:req.body.productID }, req.body); //içine gelen id yi otomatik döndürür,ve req.body den gelen ile değiştir
    res.status(200).json("Veri güncellemesi başarılı.");
  } catch (error) {
    res.status(500).json("Error", error);
  }
});

//!Delete
router.delete("/delete-product", async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id:req.body.productID }); //içine gelen id yi otomatik döndürür,ve siler
    res.status(200).json("Veri silme işlemi başarılı.");
  } catch (error) {
    res.status(500).json("Error", error);
  }
});
module.exports = router;
