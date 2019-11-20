const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      productID: { type: Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
      price: Number
    }
  ],
  estimatedDelivery: String
});

module.exports = mongoose.model("Order", OrderSchema);
