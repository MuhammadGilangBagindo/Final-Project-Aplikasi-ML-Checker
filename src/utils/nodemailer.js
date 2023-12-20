const nodemailer = require("nodemailer");

// Konfigurasi transporter untuk pengiriman email pertama
const transporter1 = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "rafiazmi0812@gmail.com", // Ganti dengan alamat email pertama Anda
    pass: "esrc cbsu ijhc zqrn", // Ganti dengan kata sandi email pertama Anda
  },
});

// Konfigurasi transporter untuk pengiriman email kedua
const transporter2 = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "mgilangbagindo@gmail.com", // Ganti dengan alamat email kedua Anda
    pass: "hqky mzsb auux utjz", // Ganti dengan kata sandi email kedua Anda
  },
});

// Mengekspor transporter untuk digunakan di file lain
module.exports = {
  transporter1,
  transporter2,
};
