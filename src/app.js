const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const contactRoutes = require("./routes/contact");

const app = express();
const port = process.env.PORT || 4000;

// Path untuk direktori public dan views
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");

// Mengatur view engine dan path views
app.set("view engine", "hbs");
app.set("views", viewsPath);

// Menggunakan middleware untuk parsing JSON
app.use(express.json());

// Menyediakan akses ke direktori public
app.use(express.static(publicDirectoryPath));

// Menggunakan middleware untuk parsing URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

// Menghubungkan ke MongoDB
mongoose.connect("mongodb://localhost:27017/mlCheckerDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes

// Route untuk halaman utama
app.get("/", (req, res) => {
  // Menangkap pesan sukses dari query parameter
  const successMessage =
    req.query.success === "true" ? "Formulir kontak berhasil dikirim!" : "";

  // Menampilkan halaman utama dengan pesan sukses (jika ada)
  res.render("index", {
    title: "Game Checker",
    successMessage: successMessage,
  });
});

// Route untuk halaman 404
app.get("*", (req, res) => {
  res.render("404", {
    title: "404 Not Found",
  });
});

// Menggunakan routes dari file contact.js
app.use("/contact", contactRoutes);

// Menjalankan server pada port yang ditentukan
app.listen(port, () => {
  console.log("Server berjalan pada port " + port);
});
