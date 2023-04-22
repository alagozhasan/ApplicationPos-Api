const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema(
  { 
    title: { type: String, require: true } 
},
  { timestamps: true }//zaman bilgisi döner
);

const Category=mongoose.model("categories",CategorySchema);
module.exports=Category;