const express = require("express");
const router = express.Router();
const About = require("./models/about.model");
const upload = require("./upload.middleware");

router.get("/", async (req, res) => {
  const about = await About.findOne();
  res.json(about);
});

router.put("/", upload.single("img"), async (req, res) => {
  const { name } = req.body;
  const filename = req?.file?.filename;
  let imageURL = null;
  if (filename) {
    imageURL = "/uploads/" + filename;
  }
  const about = await About.findOneAndUpdate(
    {},
    { name, imageURL },
    { new: true },
  );
  res.json(about);
});

module.exports = router;
