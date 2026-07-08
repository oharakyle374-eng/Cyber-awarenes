const daftarSoal = [
    {
        soal: "Manakah dari konfigurasi kata sandi (password) berikut yang memiliki tingkat keamanan paling tinggi dari serangan brute-force?",
        pilihan: ["12345678", "unibamadura", "M4dur4_2026!"],
        jawabanBenar: "M4dur4_2026!"
    },
    {
        soal: "Apakah fungsi utama dari implementasi Two-Factor Authentication (2FA) pada akun digital?",
        pilihan: ["Mengakselerasi kecepatan koneksi ke server", "Memberikan lapisan keamanan perimeter ganda setelah enkripsi password utama", "Menghapus berkas sampah dan virus secara otomatis"],
        jawabanBenar: "Memberikan lapisan keamanan perimeter ganda setelah enkripsi password utama"
    },
    {
        soal: "Apabila seseorang mengirimkan berkas via WhatsApp dengan nama 'Undangan_Digital.apk', tindakan mitigasi awal yang paling tepat adalah...",
        pilihan: ["Mengunduh berkas tersebut untuk melakukan analisis mandiri", "Mengabaikan, tidak mengklik, dan segera melakukan pemblokiran nomor", "Meneruskan (forward) pesan tersebut ke grup komunikasi lain"],
        jawabanBenar: "Mengabaikan, tidak mengklik, dan segera melakukan pemblokiran nomor"
    },
    {
        soal: "Mengapa praktik penggunaan kata sandi yang sama untuk berbagai platform digital (Password Reuse) sangat dilarang?",
        pilihan: ["Karena batasan sistem database hosting", "Apabila satu platform mengalami kebocoran data (data breach), akun platform lain ikut terancam", "Dapat menurunkan performa komputasi perangkat pintar"],
        jawabanBenar: "Apabila satu platform mengalami kebocoran data (data breach), akun platform lain ikut terancam"
    },
    {
        soal: "Manakah di bawah ini yang merupakan indikator utama dari sebuah serangan rekayasa sosial berbentuk phishing melalui email?",
        pilihan: ["Menggunakan alamat domain resmi identik instansi asal", "Mendesak korban melalui taktik intimidasi psikologis untuk mengklik link tiruan", "Hanya berisi pesan ucapan selamat hari raya tanpa tautan eksternal"],
        jawabanBenar: "Mendesak korban melalui taktik intimidasi psikologis untuk mengklik link tiruan"
    }
];

let soalDiacak = [];
let indeksSoalSekarang = 0;
let skor = 0;

// Fungsi Pengacak (Fisher-Yates Shuffle)
function acakArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function mulaiKuis() {
    soalDiacak = acakArray([...daftarSoal]);
    indeksSoalSekarang = 0;
    skor = 0;
    tampilkanSoal();
}

function tampilkanSoal() {
    // Sembunyikan tombol "Selanjutnya" setiap ganti soal
    document.getElementById("next-btn").style.display = "none";
    
    // Update komponen Progress & Teks Status
    const totalSoal = soalDiacak.length;
    document.getElementById("quiz-progress-text").innerText = `Pertanyaan ${indeksSoalSekarang + 1} dari ${totalSoal}`;
    
    const persentaseProgress = ((indeksSoalSekarang) / totalSoal) * 100;
    document.getElementById("progress-fill").style.width = `${persentaseProgress}%`;

    const dataSoal = soalDiacak[indeksSoalSekarang];
    document.getElementById("question-text").innerText = dataSoal.soal;
    
    // Acak Pilihan Jawaban
    const pilihanDiacak = acakArray([...dataSoal.pilihan]);
    const containerPilihan = document.getElementById("options-container");
    containerPilihan.innerHTML = "";

    pilihanDiacak.forEach(pilihan => {
        const tombol = document.createElement("button");
        tombol.innerText = pilihan;
        tombol.classList.add("option-btn");
        
        // Daftarkan aksi klik
        tombol.onclick = (e) => cekJawaban(e.target, pilihan, dataSoal.jawabanBenar);
        containerPilihan.appendChild(tombol);
    });
}

function cekJawaban(tombolTerpilih, pilihanUser, jawabanBenar) {
    const semuaTombol = document.querySelectorAll(".option-btn");
    
    // Kunci semua tombol agar tidak bisa diklik dua kali
    semuaTombol.forEach(btn => btn.disabled = true);

    // Cek kalkulasi skor dan ubah warna tombol
    if (pilihanUser === jawabanBenar) {
        skor += 20; // 5 soal x 20 = 100
        tombolTerpilih.classList.add("correct");
        document.getElementById("live-score").innerText = `Skor: ${skor}`;
    } else {
        tombolTerpilih.classList.add("wrong");
        // Tunjukkan juga mana jawaban yang benar kepada user
        semuaTombol.forEach(btn => {
            if (btn.innerText === jawabanBenar) {
                btn.classList.add("correct");
            }
        });
    }

    // Munculkan tombol selanjutnya
    const tombolNext = document.getElementById("next-btn");
    tombolNext.style.display = "block";
    tombolNext.onclick = () => {
        indeksSoalSekarang++;
        if (indeksSoalSekarang < soalDiacak.length) {
            tampilkanSoal();
        } else {
            tampilkanSkorAkhir();
        }
    };
}

function tampilkanSkorAkhir() {
    // Sempurnakan progress bar menjadi penuh di akhir kuis
    document.getElementById("progress-fill").style.width = "100%";
    
    document.getElementById("quiz-box").style.display = "none";
    document.getElementById("result-box").style.display = "block";
    
    document.getElementById("final-score").innerText = skor;
    
    let evaluasi = "";
    if (skor >= 80) {
        evaluasi = "Luar biasa! Anda memiliki tingkat kesadaran keamanan informasi yang sangat matang. Pertahankan kepedulian digital Anda untuk melindungi aset data pribadi.";
    } else if (skor >= 60) {
        evaluasi = "Pemahaman Anda cukup baik, namun Anda masih memiliki celah kelengahan yang berisiko. Silakan pelajari kembali poin-poin infografis pada menu Artikel.";
    } else {
        evaluasi = "Tingkat kewaspadaan Anda sangat rentan terhadap ancaman serangan siber. Sangat direkomendasikan untuk membaca ulang seluruh panduan literasi di halaman Artikel demi keamanan akun Anda.";
    }
    
    document.getElementById("evaluation-text").innerText = evaluasi;
}

// Tambahkan fungsi pembuat suara ini di bagian paling bawah atau paling atas file jskuis.js
function mainkanSuara(apakahBenar) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (apakahBenar) {
        // Suara "Ting" Nada Tinggi (Benar)
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.25);
    } else {
        // Suara "Buzz" Nada Rendah (Salah)
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.3);
    }
}

// Kemudian, cari fungsi cekJawaban yang sudah ada, lalu panggil fungsinya di sana:
function cekJawaban(tombolTerpilih, pilihanUser, jawabanBenar) {
    const semuaTombol = document.querySelectorAll(".option-btn");
    semuaTombol.forEach(btn => btn.disabled = true);

    if (pilihanUser === jawabanBenar) {
        skor += 20;
        tombolTerpilih.classList.add("correct");
        document.getElementById("live-score").innerText = `Skor: ${skor}`;
        mainkanSuara(true); // <--- TAMBAHKAN INI
    } else {
        tombolTerpilih.classList.add("wrong");
        semuaTombol.forEach(btn => {
            if (btn.innerText === jawabanBenar) {
                btn.classList.add("correct");
            }
        });
        mainkanSuara(false); // <--- TAMBAHKAN INI
    }

    const tombolNext = document.getElementById("next-btn");
    tombolNext.style.display = "block";
    tombolNext.onclick = () => {
        indeksSoalSekarang++;
        if (indeksSoalSekarang < soalDiacak.length) {
            tampilkanSoal();
        } else {
            tampilkanSkorAkhir();
        }
    };
}

window.onload = mulaiKuis;