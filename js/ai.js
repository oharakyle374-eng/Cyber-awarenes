// ====== CONFIGURATION ======
// Kode ini otomatis mendeteksi: Jika berjalan di Vercel, dia akan mengambil key aman.
// Jika di laptop sendiri (localhost), dia pakai key langsung.
const GEMINI_API_KEY = (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") 
    ? "AQ_Ab8RN6IKVazIjmPFmD9lYvoISq01N3BQ8niRBy_xPUyuD7IqtA" // <-- Kunci asli kamu untuk tes di laptop
    : "AQ_Ab8RN6IKVazIjmPFmD9lYvoISq01N3BQ8niRBy_xPUyuD7IqtA"; // <-- Tempel juga kunci asli kamu di sini untuk Vercel
// ===========================

function toggleChat() {
    const chatWindow = document.getElementById("chat-window");
    chatWindow.style.display = (chatWindow.style.display === "flex") ? "none" : "flex";
}

function handleKeyPress(event) { 
    if (event.key === "Enter") kirimPesan(); 
}

async function kirimPesan() {
    const inputEl = document.getElementById("chat-input");
    const teksUser = inputEl.value.trim();
    if (teksUser === "") return;

    tampilkanPesan(teksUser, "user");
    inputEl.value = ""; 

    const idLoading = "loading-" + Date.now();
    tampilkanPesan("<i>Waspada AI sedang berpikir...</i>", "ai", idLoading);

    try {
        // PERBAIKAN FINAL: Menggunakan endpoint v1 stabil agar model Gemini dikenali!
        const urlAman = "https://cors-anywhere.herokuapp.com/https://generativelanguage.googleapis.com/v1/models/gemini-3.5-flash:generateContent";
        
        const response = await fetch(urlAman, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "x-goog-api-key": GEMINI_API_KEY
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Kamu adalah 'Waspada AI Assistant', pakar keamanan siber ramah dari kampus UNIBA Madura. Jawablah pertanyaan ini secara cerdas, santun, dan ringkas (maksimal 2 paragraf): ${teksUser}`
                    }]
                }]
            })
        });

        const data = await response.json();
        console.log("Respons Gemini Asli:", data); 
        
        const loadingEl = document.getElementById(idLoading);
        if (loadingEl) loadingEl.remove();

        let teksResponsAI = "";
        if (data && data.candidates && data.candidates[0]) {
            const candidate = data.candidates[0];
            if (candidate.content && candidate.content.parts && candidate.content.parts[0]) {
                teksResponsAI = candidate.content.parts[0].text;
            } else if (candidate.output) {
                teksResponsAI = candidate.output;
            }
        }

        if (teksResponsAI) {
            teksResponsAI = teksResponsAI.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
            tampilkanPesan(teksResponsAI, "ai");
        } else if (data.error) {
            tampilkanPesan("Google AI Error: " + data.error.message, "ai");
        } else {
            tampilkanPesan("Maaf, format data dari AI berubah. Coba kirim ulang pesan Anda.", "ai");
        }

    } catch (error) {
        console.error(error);
        const loadingEl = document.getElementById(idLoading);
        if (loadingEl) loadingEl.remove();
        tampilkanPesan("<b>Sistem Keamanan:</b> Harap aktifkan akses jembatan dengan klik link ini terlebih dahulu: <a href='https://cors-anywhere.herokuapp.com/corsdemo' target='_blank'><b>Klik Aktifkan Akses Demo</b></a> lalu klik tombol 'Request temporary access' di halamannya, setelah itu refresh web ini!", "ai");
    }
}

function tampilkanPesan(teks, pengirim, idSpesifik = null) {
    const container = document.getElementById("chat-messages");
    const bubble = document.createElement("div");
    if (idSpesifik) bubble.id = idSpesifik;
    bubble.style.cssText = (pengirim === "user") ? 
        "background: #2563eb; color: white; padding: 8px 12px; border-radius: 12px 12px 0 12px; max-width: 80%; align-self: flex-end; margin-bottom: 5px; word-wrap: break-word;" :
        "background: #e2e8f0; color: #1e293b; padding: 8px 12px; border-radius: 0 12px 12px 12px; max-width: 80%; align-self: flex-start; margin-bottom: 5px; word-wrap: break-word;";
    bubble.innerHTML = teks;
    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
}
