const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    unique: true,
    required: true,
  },
  price: Number,
  available: Boolean,
  specs: {
    type: [String],
    required: false,
  },
  createdOn: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
