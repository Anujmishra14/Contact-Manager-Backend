const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  photo: String,
});

module.exports = mongoose.model("Contact", contactSchema);