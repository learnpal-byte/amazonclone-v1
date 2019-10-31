const router = require("express").Router();
const Product = require("../models/product");

const upload = require("../middlewares/upload-photo");
// POST request - create a new product

// title: String,
//   description: String,
//   photo: String,
//   price: Number,
//   stockQuantity: Number,
//   rating: [Number]

router.post("/products", upload.single("photo"), async (req, res) => {
  try {
    let product = new Product();
    product.title = req.body.title;
    product.description = req.body.description;
    product.photo = req.file.location;
    product.stockQuantity = req.body.stockQuantity;

    await product.save(); // async

    res.json({
      status: true,
      message: "Successfully saved"
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

// GET requesst - get all products

// GET request - get a single product

// PUT request - Update a single product

// DELETE request - delete a single product

module.exports = router;
