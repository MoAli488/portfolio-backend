const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors')
const PORT = 3000;

const projectRouter = require("./project");
const contactRouter = require("./contact");
const skillRouter = require("./skill");
const aboutRouter = require("./about");

app.use(cors())
app.use(express.json());
app.use("/uploads", express.static('uploads'))

app.use("/api/project", projectRouter);
app.use("/api/contact", contactRouter);
app.use("/api/skill", skillRouter);
app.use("/api/about", aboutRouter);
app.use('/uploads', express.static('uploads'));

app.use((req, res) => {
  res.status(404).json({ message: "Page Not Found 404" });
});

mongoose.connect("mongodb://localhost:27017/portfolio").then(() => {
  console.log("DB Connected.");
  app.listen(PORT, () => {
    console.log(`server starts at ${PORT}`);
  });
});
