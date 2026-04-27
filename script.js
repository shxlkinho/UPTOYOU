// GESTIONE SLIDER
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
let index = 0;

function nextSlide() {
    index++;
    if (index >= slides.length) index = 0;
    track.style.transform = `translateX(-${index * 100}vw)`;
}
setInterval(nextSlide, 4000);

// MENU MOBILE
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    nav.classList.toggle("show");
});

// BOTTONE SCOPRI DI PIU ESPANDIBILE
const discoverBtn = document.getElementById('discoverBtn');
const expandContainer = document.getElementById('expandContainer');

discoverBtn.addEventListener('click', () => {
    expandContainer.classList.toggle('active');
    if (expandContainer.classList.contains('active')) {
        discoverBtn.textContent = 'Chiudi';
    } else {
        discoverBtn.textContent = 'Scopri di più';
    }
});
const openBtn = document.getElementById('openVideo');
const closeBtn = document.getElementById('closeVideo');
const overlay = document.getElementById('videoOverlay');
const iframe = document.getElementById('ytPlayer');

openBtn.addEventListener('click', () => {
    overlay.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
    // Trucco per fermare il video quando chiudi la finestra
    let videoSrc = iframe.src;
    iframe.src = videoSrc; 
});

// Chiudi se clicchi fuori dal video
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeBtn.click();
});

const API_KEY = "AIzaSyDobHcblteBLZ05xqdlfXXWjHNLj8sM2gA"; // La tua chiave
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

// Gestione apertura/chiusura finestra
const openBtn = document.getElementById('ai-open-btn');
const chatWindow = document.getElementById('ai-window');
openBtn.onclick = () => {
    chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
};

// Funzione per chiamare l'IA
async function parlaConIA(messaggioUtente) {
    const promptSistema = "Sei UpToYou AI Orientatore... [METTI QUI TUTTO IL TUO PROMPT]";
    
    const response = await fetch(GEMINI_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: promptSistema + "\n\nStudente: " + messaggioUtente }] }]
        })
    });
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
}

// Gestione invio messaggio
document.getElementById('ai-send').onclick = async () => {
    const input = document.getElementById('ai-input');
    const display = document.getElementById('ai-messages');
    if (!input.value) return;

    const userMsg = input.value;
    display.innerHTML += `<p><b>Tu:</b> ${userMsg}</p>`;
    input.value = "";
    display.innerHTML += `<p><i>Sta pensando...</i></p>`;

    const risposta = await parlaConIA(userMsg);
    
    // Rimuoviamo il "sta pensando" e mettiamo la risposta
    display.lastChild.remove();
    display.innerHTML += `<p><b>Mentor:</b> ${risposta}</p>`;
    display.scrollTop = display.scrollHeight;
};