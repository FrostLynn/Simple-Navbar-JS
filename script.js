// Fungsi ini menghidupkan mode responsif navigasi bar
function myFunction() {
  // Variabel x menyimpan elemen navigasi bar
  var x = document.getElementById("myTopnav");

  // Kondisi ini memeriksa apakah kelas navigasi bar adalah topnav
  if (x.className === "topnav") {
    // Jika kelasnya topnav, maka kelas akan diperbarui dengan menambahkan responsive
    x.className += " responsive";
  }
  // Jika kelasnya bukan topnav, maka kelasnya akan diperbarui kembali ke topnav
  else {
    x.className = "topnav";
  }
}
