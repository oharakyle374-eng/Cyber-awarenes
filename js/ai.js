// ====== CONFIGURATION ======
// Tempel kode yang kamu copy dari Google AI Studio di dalam tanda kutip di bawah ini:
const GEMINI_API_KEY = "AQ.Ab8RN6IPPWFozjLAXrpkLhGABaGR4rTkF4hGo4PnKrvx6OChkg"; 
// ===========================

function toggleChat() {
    const chatWindow = document.getElementById("chat-window");
    if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
        chatWindow.style.display = "flex";
    } else {
        chatWindow.style.display = "none";
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        kirimPesan();
    }
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
        // Menggunakan endpoint model terbaru yang kompatibel dengan key kamu
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `Kamu adalah 'Waspada AI Assistant', seorang pakar keamanan siber yang ramah dari kampus UNIBA Madura. 
                               Tugasmu adalah menjawab pertanyaan pengguna tentang keamanan digital, phishing, malware APK, atau pertanyaan umum lainnya. 
                               Jawablah dengan bahasa Indonesia yang santun, informatif, dan ringkas (maksimal 3 paragraf). 
                               Berikut adalah pertanyaan dari pengguna: ${teksUser}`
                    }]
                }]
            })
        });

        const data = await response.json();
        document.getElementById(idLoading).remove();

        const teksResponsAI = data.candidates[0].content.parts[0].text;
        const teksFormatHtml = teksResponsAI.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>').replace(/\n/g, '<br>');

        tampilkanPesan(teksFormatHtml, "ai");

    } catch (error) {
        console.error(error);
        document.getElementById(idLoading).remove();
        tampilkanPesan("Maaf, koneksi ke otak AI terputus. Pastikan internet aktif atau coba tanyakan hal lain.", "ai");
    }
}

function tampilkanPesan(teks, pengirim, idSpesifik = null) {
    const container = document.getElementById("chat-messages");
    const bubble = document.createElement("div");
    
    if (idSpesifik) bubble.id = idSpesifik;

    if (pengirim === "user") {
        bubble.style.cssText = "background: #2563eb; color: white; padding: 8px 12px; border-radius: 12px 12px 0 12px; max-width: 80%; align-self: flex-end; word-wrap: break-word;";
    } else {
        bubble.style.cssText = "background: #e2e8f0; color: #1e293b; padding: 8px 12px; border-radius: 0 12px 12px 12px; max-width: 80%; align-self: flex-start; word-wrap: break-word;";
    }
    
    bubble.innerHTML = teks;
    container.appendChild(bubble);
    container.scrollTop = container.scrollHeight;
}