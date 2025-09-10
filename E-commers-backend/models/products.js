const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    detail: { type: String },
    Wishlist: { type: Boolean, default: false },
    AddtoCart: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
