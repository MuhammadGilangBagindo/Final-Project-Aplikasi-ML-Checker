// Tambahkan event listener untuk menangani pengiriman formulir
document.getElementById("checkIdForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil nilai dari elemen formulir
  const userId = document.getElementById("userId").value;
  const server = document.getElementById("server").value;

  // Panggil fungsi untuk mengeksekusi permintaan ke API
  checkId(userId, server);
});

// Fungsi untuk mengeksekusi permintaan ke API Mobile Legends
async function checkId(userId, server) {
  const options = {
    method: "GET",
    url: `https://id-game-checker.p.rapidapi.com/mobile-legends/${userId}/${server}`,
    headers: {
      "X-RapidAPI-Key": "d8c9c2a771mshaff9ceb5fde095bp1f8d06jsnf50091ce68a3",
      "X-RapidAPI-Host": "id-game-checker.p.rapidapi.com",
    },
  };

  try {
    // Kirim permintaan ke API menggunakan Axios
    const response = await axios.request(options);
    console.log(response.data);

    // Tampilkan hasil respons sebagai modal
    const resultModal = `
          <div class="modal fade" id="resultModal" tabindex="-1" aria-labelledby="resultModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="resultModalLabel">Hasil Check ID</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div class="text-center">
                    <img src="../img/avatar.jpg" alt="User Avatar" class="img-fluid rounded-circle" style="width: 100px; height: 100px;">
                    <h4 class="mt-3">Hallo ${response.data.data.username}</h4>
                    <p>${response.data.data.game}</p>
                    <p>User ID: ${response.data.data.userId}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;

    // Hapus modal resultModal jika sudah ada
    $("#resultModal").remove();

    // Tambahkan modal resultModal ke dalam body
    $("body").append(resultModal);

    // Buka modal resultModal
    $("#resultModal").modal("show");
  } catch (error) {
    console.error(error);

    // Tampilkan pesan kesalahan atau lakukan operasi lainnya di sini
    alert("Terjadi kesalahan. Silakan coba lagi.");
  }
}
