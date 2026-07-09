const kumpulanSkenario = [
    {
        judul: "Skenario 1: Pesan Instan (WhatsApp) - Kurir Paket",
        tipe: "whatsapp",
        pengirim: "+62 889-7712-3456",
        statusSub: "Online",
        isiText: "Halo, saya kurir ekspedisi Express J&T. Paket Anda dengan nomor resi #99102X terhambat di gudang cabang Batuan karena penulisan alamat kurang detail. \n\nMohon segera unduh aplikasi pelacak resmi kami di bawah ini untuk validasi alamat & foto fisik paket Anda:",
        attachmentHtml: `<div class="wa-link-card">
                            <b style="color: #25d366;">📁 J&T_Ekspedisi_Resi991.apk</b><br>
                            <span style="color: #8696a0; font-size: 0.8rem;">Aplikasi Android • 7.4 MB</span>
                         </div>`,
        jawabanBenar: "bahaya",
        edukasi: "Tindakan Anda Tepat! Ini adalah modus malware APK Kurir Paket. Format berkas '.apk' adalah aplikasi sistem Android, bukan dokumen foto (.jpg) atau dokumen teks (.pdf). Jika terinstal, peretas dapat mencuri data konfirmasi OTP SMS perbankan Anda tanpa disadari."
    },
    {
        judul: "Skenario 2: Surat Elektronik (Email Notifikasi) - Perbankan",
        tipe: "email",
        subjek: "[URGENT] Penangguhan Akun Keuangan Anda",
        pengirim: "Security Alert &lt;security-update@login-verification-bca.com&gt;",
        isiText: "Kepada Nasabah Terhormat,<br><br>Sistem deteksi fraud kami menemukan adanya aktivitas mencurpakan pada akses perbankan digital Anda dari perangkat luar Madura. Demi keselamatan dana Anda, kami membatasi penarikan saldo untuk sementara waktu.<br><br>Segera lakukan verifikasi ulang identitas dan PIN Anda dalam waktu 1x24 jam melalui portal mitigasi resmi kami di bawah ini:",
        attachmentHtml: `<a href="#" class="email-btn-mock" onclick="event.preventDefault();">Verifikasi Akun Sekarang</a><br>
                         <small style="color: var(--text-muted)">*Jika tidak diverifikasi, akun Anda akan dibekukan secara permanen.</small>`,
        jawabanBenar: "bahaya",
        edukasi: "Luar Biasa, Analisis Anda Tepat! Ini adalah taktik phishing tiruan institusi finansial. Perhatikan email pengirim menggunakan domain bebas 'login-verification-bca.com' yang menyerupai nama bank resmi. Kalimatnya sengaja diatur mendesak (intimidasi waktu) agar korban panik lalu memberikan PIN rahasia."
    },
    {
        judul: "Skenario 3: Pesan Instan (WhatsApp) - Surat Tilang Digital",
        tipe: "whatsapp",
        pengirim: "Satlantas Polres Info &lt;+62 812-4455-8891&gt;",
        statusSub: "bukan nomor resmi",
        isiText: "Pemberitahuan: Kendaraan Anda terdeteksi melakukan pelanggaran lalu lintas (ETLE) melanggar marka jalan di area Sumenep. \n\nSurat tindak tilang resmi beserta bukti foto pelanggaran terlampir pada dokumen digital di bawah ini. Harap segera diselesaikan agar STNK tidak diblokir:",
        attachmentHtml: `<div class="wa-link-card">
                            <b style="color: #25d366;">📁 Surat_Tilang_Digital_ETLE.apk</b><br>
                            <span style="color: #8696a0; font-size: 0.8rem;">Aplikasi Android • 5.1 MB</span>
                         </div>`,
        jawabanBenar: "bahaya",
        edukasi: "Tepat sekali! Kepolisian RI tidak pernah mengirimkan surat tilang melalui file berformat .APK di WhatsApp. Surat tilang resmi dikirimkan via pos ke alamat pemilik kendaraan atau melalui notifikasi aplikasi resmi Polri."
    },
    {
        judul: "Skenario 4: Surat Elektronik (Email) - Undian Berhadiah",
        tipe: "email",
        subjek: "Selamat! Anda Terpilih Sebagai Pemenang GiveAway Bulanan",
        pengirim: "Promo Dept &lt;pemenang-undian-uniba2026@gmail.com&gt;",
        isiText: "Halo Pengguna Setia!<br><br>Selamat, alamat email Anda keluar sebagai pemenang ke-2 dalam penarikan undian acak berkala dan berhak mendapatkan hadiah saldo e-wallet senilai Rp2.500.000.<br><br>Silakan klaim hadiah Anda secara instan dengan mengisi formulir pencairan dana melalui tombol tautan eksternal di bawah ini:",
        attachmentHtml: `<a href="#" class="email-btn-mock" style="background-color: #10b981;" onclick="event.preventDefault();">Klaim Saldo Rp2.500.000</a><br>
                         <small style="color: var(--text-muted)">*Kami tidak memungut biaya pendaftaran apa pun.</small>`,
        jawabanBenar: "bahaya",
        edukasi: "Benar, Anda tidak terkecoh! Ini adalah taktik phishing komersial. Email resmi perusahaan atau institusi tidak pernah menggunakan domain gratisan seperti '@gmail.com' untuk pengumuman resmi, dan modus ini biasanya bertujuan menguras data dompet digital Anda."
    },
    {
        judul: "Skenario 5: Pesan Instan (WhatsApp) - Undangan Pernikahan",
        tipe: "whatsapp",
        pengirim: "+62 878-9900-1122",
        statusSub: "Tidak Dikenal",
        isiText: "Kami mengharapkan kehadiran Bapak/Ibu/Saudara/i dalam acara resepsi pernikahan kami. Merupakan suatu kehormatan bagi kami apabila Anda berkenan hadir. \n\nDetail lokasi, waktu acara, dan barcode undangan digital dapat Anda akses melalui file di bawah ini:",
        attachmentHtml: `<div class="wa-link-card">
                            <b style="color: #25d366;">📁 Undangan_Pernikahan_Digital.apk</b><br>
                            <span style="color: #8696a0; font-size: 0.8rem;">Aplikasi Android • 6.8 MB</span>
                         </div>`,
        jawabanBenar: "bahaya",
        edukasi: "Sempurna! Modus Undangan Pernikahan .APK ini sangat marak memakan korban. Penipu sengaja memanfaatkan rasa sungkan atau penasaran korban agar menginstal aplikasi yang sebenarnya berfungsi sebagai spyware penyadap SMS."
    }
];

let indeksSkenario = 0;

function muatSkenario() {
    const feedbackBox = document.getElementById("feedback-box");
    feedbackBox.style.display = "none"; // Sembunyikan feedback lama
    feedbackBox.classList.remove("fb-correct", "fb-wrong");

    // Aktifkan kembali tombol opsi tindakan
    const btns = document.querySelectorAll(".sim-actions button");
    btns.forEach(btn => btn.disabled = false);

    if (indeksSkenario >= kumpulanSkenario.length) {
        document.getElementById("simulation-wrapper").innerHTML = `
            <div style="text-align: center; padding: 30px 0;">
                <h2 style="color: var(--success); font-size: 2rem; margin-bottom: 10px;">Simulasi Selesai! 🏆</h2>
                <p>Anda berhasil menyelesaikan semua uji laboratorium rekayasa sosial. Insting mitigasi Anda sudah sangat tajam!</p>
                <button onclick="location.reload()" style="background-color: var(--accent); color: #06222c; font-weight: 700; margin-top: 15px;">Ulangi Simulasi</button>
            </div>`;
        return;
    }

    const data = kumpulanSkenario[indeksSkenario];
    document.getElementById("case-title").innerText = data.judul;

    const areaMockup = document.getElementById("mockup-area");

    // Render Template UI Berdasarkan Tipe Kasus
    if (data.tipe === "whatsapp") {
        areaMockup.innerHTML = `
            <div class="wa-container">
                <div class="wa-header">
                    <div class="wa-avatar"></div>
                    <div>
                        <div style="font-weight: 700; font-size: 0.95rem;">${data.pengirim}</div>
                        <div style="font-size: 0.75rem; color: #8fa7ae;">${data.statusSub}</div>
                    </div>
                </div>
                <div class="wa-body">
                    <div class="wa-bubble">
                        <p style="margin: 0; white-space: pre-line;">${data.isiText}</p>
                        ${data.attachmentHtml}
                    </div>
                </div>
            </div>`;
    } else if (data.tipe === "email") {
        areaMockup.innerHTML = `
            <div class="email-container">
                <div class="email-header">
                    <h3 style="font-size: 1.1rem; margin-bottom: 5px; color: var(--primary);">${data.subjek}</h3>
                    <div class="email-meta"><b>Dari:</b> ${data.pengirim}</div>
                </div>
                <div class="email-body">
                    <p style="margin: 0;">${data.isiText}</p>
                    ${data.attachmentHtml}
                </div>
            </div>`;
    }
}

function prosesPilihan(pilihanUser) {
    const data = kumpulanSkenario[indeksSkenario];
    const feedbackBox = document.getElementById("feedback-box");
    const fbTitle = document.getElementById("feedback-title");
    const fbText = document.getElementById("feedback-text");

    const btns = document.querySelectorAll(".sim-actions button");
    btns.forEach(btn => btn.disabled = true);

    feedbackBox.style.display = "block";

    const benar = pilihanUser === data.jawabanBenar;

    // Warna feedback sekarang ditentukan lewat class CSS (fb-correct / fb-wrong),
    // bukan di-hardcode di sini, supaya konsisten dengan tema situs.
    feedbackBox.classList.remove("fb-correct", "fb-wrong");
    feedbackBox.classList.add(benar ? "fb-correct" : "fb-wrong");

    fbTitle.innerText = benar ? "Keputusan Tepat! 🟢" : "Peringatan: Anda Terjebak! 🔴";
    fbText.innerText = data.edukasi;

    mainkanSuara(benar);
}

function nextSkenario() {
    indeksSkenario++;
    muatSkenario();
}

function mainkanSuara(apakahBenar) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (apakahBenar) {
        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(600, audioCtx.currentTime);
        oscillator.frequency.setValueAtTime(800, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.25);
    } else {
        oscillator.type = "sawtooth";
        oscillator.frequency.setValueAtTime(150, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.3);
    }
}

window.onload = muatSkenario;
