const express = require("express");
const router = express.Router();
const Project = require("./models/project.model");
const upload = require('./upload.middleware');

router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.post("/", upload.single('img'), async (req, res) => {
  const { title, description, link } = req.body;
  const filename = req?.file?.filename;
  let imageURL = null;
  if(filename) {
    imageURL =  "/uploads/" + filename;
  }
  const newProject = await Project.create({
    title,
    description,
    link,
    imageURL,
  });
  res.status(201).json({ message: "Project created.", data: newProject });
});

module.exports = router;
