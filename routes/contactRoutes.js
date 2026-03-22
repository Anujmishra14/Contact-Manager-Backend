const Contact = require("../models/Contact");

// ✅ GET all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ ADD contact
const addContact = async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.json(newContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ DELETE contact
const deleteContact = async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ UPDATE contact
const updateContact = async (req, res) => {
  try {
    const updated = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  addContact,
  getContacts,
  deleteContact,
  updateContact
};