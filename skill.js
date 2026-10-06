const express = require("express");
const router = express.Router();
const Skill = require("./models/skill.model");
const upload = require("./upload.middleware");

router.get("/", async (req, res) => {
  const skills = await Skill.find();
  res.json(skills);
});

router.post("/", upload.single("img"), async (req, res) => {
  const { name } = req.body;
  const filename = req?.file?.filename;
  let imageURL = null;
  if (filename) {
    imageURL = "/uploads/" + filename;
  }
  const newSkill = await Skill.create({ name, imageURL });
  res.status(201).json(newSkill);
});

router.delete("/:id", async (req, res) => {
  const deleted = await Skill.findByIdAndDelete(req.params.id);
  if (!deleted) {
    return res.status(404).json({ message: "Skill not found." });
  }
  res.json(deleted._id);
});

module.exports = router;
