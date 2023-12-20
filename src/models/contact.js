const mongoose = require("mongoose");

// Skema untuk formulir kontak
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

// Membuat model Contact berdasarkan skema contactSchema
const Contact = mongoose.model("contactForms", contactSchema);

// Mengekspor model Contact untuk digunakan di file lain
module.exports = Contact;
