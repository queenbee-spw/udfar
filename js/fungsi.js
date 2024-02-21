// Fungsi untuk menyalin nomor rekening
        function salinNomorRekening(button) {
            // Dapatkan nomor rekening dari atribut data-nomer pada tombol
            var nomorRekening = button.getAttribute('data-nomer');

            // Buat elemen textarea untuk menyimpan nomor rekening
            var textarea = document.createElement('textarea');
            textarea.value = nomorRekening;

            // Tambahkan elemen textarea ke dalam dokumen
            document.body.appendChild(textarea);

            // Pilih teks dalam elemen textarea
            textarea.select();

            // Salin teks ke clipboard
            document.execCommand('copy');

            // Hapus elemen textarea yang sudah tidak diperlukan
            document.body.removeChild(textarea);

            // Tampilkan pemberitahuan bahwa nomor rekening telah disalin pada tombol
            button.innerHTML = 'Nomor Rekening Disalin <i class="fas fa-check"></i>';

            // Set timeout untuk mengembalikan teks tombol ke keadaan semula setelah beberapa detik
            setTimeout(function () {
                button.innerHTML = 'Salin No. Rekening';
            }, 2000);
        }
        
        function kirimPesanWhatsApp() {
            var nama = document.getElementById('form-nama').value;
            var kehadiran = document.getElementById('form-kehadiran').value;
            var pesan = document.getElementById('form-pesan').value;
    
            // Pastikan bahwa nama, kehadiran, dan pesan tidak kosong
            if (nama && kehadiran && pesan) {
                var pesanWhatsApp = "Halo, saya " + nama + ". Saya " + (kehadiran == 1 ? "Hadir" : "Berhalangan") + ". " + pesan;
    
                // Ganti nomor WhatsApp sesuai dengan nomor yang ingin Anda tuju
                var nomorWhatsApp = "6281293005037";
    
                // Buat URL WhatsApp dengan pesan yang telah dibuat
                var urlWhatsApp = "https://api.whatsapp.com/send?phone=" + nomorWhatsApp + "&text=" + encodeURIComponent(pesanWhatsApp);
    
                // Buka link WhatsApp di tab baru
                window.open(urlWhatsApp, '_blank');
            } else {
                alert('Mohon lengkapi semua field sebelum mengirim pesan WhatsApp.');
            }
        }
