const express = require("express");
const router = express.Router();
const Contact = require("./models/contact.model");

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();    
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
})

router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = await Contact.create({ name, email, message });    
    res.status(201).json({ message: "contact message created!", data: contact });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
