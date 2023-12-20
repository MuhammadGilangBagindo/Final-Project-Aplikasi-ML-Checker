const express = require("express");
const router = express.Router();
const Contact = require("../models/contact");
const nodemailer = require("../utils/nodemailer");

// Endpoint POST untuk mengirim formulir kontak
router.post("/submit", async (req, res) => {
  try {
    // Menangkap data dari body request
    const { name, email, message } = req.body;

    // Konfigurasi Nodemailer untuk email pertama
    const mailOptions1 = {
      from: "your-email@example.com",
      to: "rafiazmi0812@gmail.com", // Ganti dengan alamat email pertama
      subject: "ML Checker !",
      html: `
        <div style="background-color: #f4f4f4; padding: 20px; font-family: Arial, sans-serif;">
          <h2 style="color: #333; text-align: center;">Dari ML Checker !</h2>
          <div style="background-color: #fff; padding: 20px; border-radius: 10px; margin-top: 20px;">
            <p style="font-size: 16px;"><strong>Nama    :</strong> ${name}</p>
            <p style="font-size: 16px;"><strong>Email   :</strong> ${email}</p>
            <p style="font-size: 16px;"><strong>Pesan   :</strong> ${message}</p>
          </div>
        </div>
      `,
    };

    // Konfigurasi Nodemailer untuk email kedua
    const mailOptions2 = {
      from: "your-email@example.com",
      to: "mgilangbagindo@gmail.com", // Ganti dengan alamat email kedua
      subject: "ML Checker !",
      html: `
        <div style="background-color: #f4f4f4; padding: 20px; font-family: Arial, sans-serif;">
          <h2 style="color: #333; text-align: center;">Dari ML Checker !</h2>
          <div style="background-color: #fff; padding: 20px; border-radius: 10px; margin-top: 20px;">
            <p style="font-size: 16px;"><strong>Nama    :</strong> ${name}</p>
            <p style="font-size: 16px;"><strong>Email   :</strong> ${email}</p>
            <p style="font-size: 16px;"><strong>Pesan   :</strong> ${message}</p>
          </div>
        </div>
      `,
    };

    // Mengirim email menggunakan Nodemailer untuk email pertama
    await nodemailer.transporter1.sendMail(mailOptions1);

    // Mengirim email menggunakan Nodemailer untuk email kedua
    await nodemailer.transporter2.sendMail(mailOptions2);

    // Menyimpan data ke MongoDB
    const newContact = new Contact({
      name,
      email,
      message,
    });

    await newContact.save();

    // Menampilkan alert pesan sukses dan redirect ke halaman utama
    res.send(
      '<script>alert("Pesan Anda telah berhasil dikirim."); window.location="/";</script>'
    );
  } catch (error) {
    console.error("Error:", error);

    // Menampilkan alert pesan kesalahan dan redirect ke halaman utama
    res.send(
      '<script>alert("Terjadi kesalahan server internal. Silakan coba lagi nanti."); window.location="/";</script>'
    );
  }
});

// Mengekspor router agar dapat digunakan di file lain
module.exports = router;
