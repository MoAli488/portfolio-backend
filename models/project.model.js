const mongoose = require("mongoose");
const projectSchema = mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    imageURL: {
      type: String,
      trim: true,
      required: false,
    },
    link: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("Project", projectSchema);
