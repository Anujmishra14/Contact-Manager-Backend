const express = require("express");
const router = express.Router();

const {
  addContact,
  getContacts,
  deleteContact,
  updateContact
} = require("../controllers/contactController");

router.post("/", addContact);
router.get("/", getContacts);
router.delete("/:id", deleteContact);
router.put("/:id", updateContact);

module.exports = router;