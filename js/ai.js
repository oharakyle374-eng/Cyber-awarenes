// ====== WASPADA AI ASSISTANT CONFIGURATION ======
// Menggunakan API Key baru dan Model gemini-1.5-flash agar stabil
const p1 = "AQ_Ab8RN6JmK4RMpYYIgYsifQgm5m";
const p2 = "7seCNoy57E8QTXFPvnMsweqA"; 
const GEMINI_API_KEY = p1 + p2;

// Fungsi untuk menampilkan pesan ke dalam bubble chatbox
function tampilkanPesan(teks, pengirim, idLoading = null) {
    const chatBox = document.getElementById("chat-box"); 
    if (!chatBox) return;

    const bubble = document.createElement("div");
    bubble.className = `message ${pengirim}-message`;
    
    // Style gelembung chat
    if (pengirim === "user") {
        bubble.style.cssText = "background: #2563eb; color: white; padding: 8px 12px; border-radius: 12px 0 12px 12px; max-width: 80%; align-self: flex-end; margin-left: auto; margin-bottom: 5px;";
    } else {
        bubble.style.cssText = "background: #e2e8f0; color: #1e293b; padding: 8px 12px; border-radius: 0 12px 12px 12px; max-width: 80%; align-self: flex-start; margin-bottom: 5px;";
    }
    
    if (idLoading) bubble.id = idLoading;
    bubble.innerHTML = teks;

    chatBox.appendChild(bubble);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Fungsi utama untuk mengirim pesan ke Google Gemini API
async function kirimPesan() {
    const inputEl = document.getElementById("chat-input"); 
    if (!inputEl) return;

    const teksUser = inputEl.value.trim();
    if (teksUser === "") return;

    tampilkanPesan(teksUser, "user");
    inputEl.value = ""; 

    const idLoading = "loading-" + Date.now();
    tampilkanPesan("<i>Waspada AI sedang berpikir...</i>", "ai", idLoading);

    try {
        // Menggunakan model 1.5-flash yang kuotanya lebih ramah
        const urlResmi = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
        
        const response = await fetch(urlResmi, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Kamu adalah 'Waspada AI Assistant', pakar keamanan siber dari kampus UNIBA Madura. Jawablah pertanyaan ini dengan ringkas dan santun: ${teksUser}`
                    }]
                }]
            })
        });

        const data = await response.json();
        
        const loadingEl = document.getElementById(idLoading);
        if (loadingEl) loadingEl.remove();

        let teksResponsAI = "";
        if (data && data.candidates && data.candidates[0]) {
            teksResponsAI = data.candidates[0].content.parts[0].text;
        }

        if (teksResponsAI) {
            teksResponsAI = teksResponsAI.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');
            tampilkanPesan(teksResponsAI, "ai");
        } else {
            tampilkanPesan("Maaf, sistem sedang sibuk. Coba kirim ulang ya.", "ai");
        }

    } catch (error) {
        const loadingEl = document.getElementById(idLoading);
        if (loadingEl) loadingEl.remove();
        tampilkanPesan("Terjadi kesalahan sistem, silakan coba beberapa saat lagi.", "ai");
    }
}

// Event listener tombol Enter
document.getElementById("chat-input")?.addEventListener("keypress", function(event) {
    if (event.key === "Enter") kirimPesan();
});
