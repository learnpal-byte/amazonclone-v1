const router = require("express").Router();
const Owner = require("../models/owner");
const upload = require("../middlewares/upload-photo");

// POST api
router.post("/owners", upload.single("photo"), async (req, res) => {
  try {
    console.log(req.body);
    let owner = new Owner();
    owner.name = req.body.name;
    owner.about = req.body.about;
    owner.photo = req.file.location;
    await owner.save();

    res.json({
      success: true,
      message: "Successfully created a new owner"
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

// GET api
router.get("/owners", async (req, res) => {
  try {
    let owners = await Owner.find();

    res.json({
      owners: owners
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message
    });
  }
});

module.exports = router;
