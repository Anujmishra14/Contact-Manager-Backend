const Contact = require("../models/Contact");

// ADD
exports.addContact = async (req, res) => {
  try {
    const existing = await Contact.findOne({ email: req.body.email });

    if (existing) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newContact = new Contact(req.body);
    await newContact.save();

    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ALL
exports.getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

// DELETE
exports.deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};

// UPDATE
exports.updateContact = async (req, res) => {
  const updated = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};