const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  owner: { type: Schema.Types.ObjectId, ref: "Owner" },
  title: String,
  description: String,
  photo: String,
  price: Number,
  stockQuantity: Number,
  rating: [Number]
});

module.exports = mongoose.model("Product", ProductSchema);
