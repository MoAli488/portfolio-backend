const mongoose = require("mongoose");
const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      minLength: 3,
      required: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    },
    message: {
      type: String,
      trim: true,
      minLength: 2,
      required: true,
    },
    status: {
      type: String,
      default: "new",
    }
  },
  { timestamps: true },
);

module.exports = mongoose.model("Contact", contactSchema);
