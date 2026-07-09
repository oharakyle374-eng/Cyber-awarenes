// Fungsi untuk buka/tutup jendela chat
function toggleChat() {
    const chatWindow = document.getElementById("chat-window");
    if (chatWindow.style.display === "none" || chatWindow.style.display === "") {
        chatWindow.style.display = "flex";
    } else {
        chatWindow.style.display = "none";
    }
}

// Fungsi kirim pesan manual
function kirimManual() {
    const inputEl = document.getElementById("chat-input");
    const chatBox = document.getElementById("chat-box");
    
    if (inputEl.value.trim() === "") return;

    // 1. Tampilkan pesan user
    const pesanUser = inputEl.value;
    const userBubble = document.createElement("div");
    userBubble.style.cssText = "background: #2563eb; color: white; padding: 8px 12px; border-radius: 12px 0 12px 12px; max-width: 80%; align-self: flex-end; margin-left: auto; margin-bottom: 5px;";
    userBubble.textContent = pesanUser;
    chatBox.appendChild(userBubble);
    
    inputEl.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;

    // 2. Logika Asisten Cerdas
    setTimeout(() => {
        const aiBubble = document.createElement("div");
        aiBubble.style.cssText = "background: #e2e8f0; color: #1e293b; padding: 8px 12px; border-radius: 0 12px 12px 12px; max-width: 80%; align-self: flex-start; margin-bottom: 5px;";
        
        let jawaban = "Maaf, saya tidak mengerti. Coba tanya tentang 'tujuan web' atau 'bahaya APK'.";
        const tanya = pesanUser.toLowerCase();

        if (tanya.includes("tujuan") || tanya.includes("web")) {
            jawaban = "Tujuan web ini adalah sebagai edukasi keamanan siber untuk melindungi aset digital dari serangan social engineering.";
        } else if (tanya.includes("apk") || tanya.includes("malware")) {
            jawaban = "Waspada! File .APK tidak dikenal bisa mencuri saldo dan data pribadi Anda. Jangan pernah menginstalnya!";
        } else if (tanya.includes("halo") || tanya.includes("hai")) {
            jawaban = "Halo! Saya Asisten Waspada Digital. Ada yang bisa saya bantu terkait keamanan siber hari ini?";
        }

        aiBubble.textContent = jawaban;
        chatBox.appendChild(aiBubble);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}



// Support tombol Enter
document.getElementById("chat-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") kirimManual();
});
