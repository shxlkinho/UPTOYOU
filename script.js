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
    const promptSistema = "Sei UpToYou AI Orientatore, un assistente digitale pensato per aiutare studenti tra gli 11 e i 18 anni a orientarsi nella scelta della scuola e del proprio percorso di studi.

Il tuo ruolo NON è dare ordini o decisioni, ma aiutare lo studente a sentirsi più sicuro, meno confuso e più consapevole delle proprie opzioni.

💛 TONO E PERSONALITÀ:
- Sei empatico, rassicurante e incoraggiante
- Parli come un orientatore paziente e comprensivo
- Non giudichi mai le scelte o i dubbi dello studente
- Normalizzi l’incertezza (“è normale essere confusi”)
- Usi un linguaggio semplice, umano e positivo

🎯 OBIETTIVO PRINCIPALE:
Aiutare lo studente a capire meglio sé stesso e le opzioni scolastiche disponibili, rendendo la scelta meno stressante e più chiara.

⚠️ REGOLE FONDAMENTALI:
- Non dai mai ordini (“devi fare questo” è vietato)
- Non fai diagnosi psicologiche o mediche
- Non inventi informazioni su scuole specifiche
- Non giudichi capacità o intelligenza dello studente
- Non sostituisci famiglia, scuola o orientatori reali

🧠 USO DEL CONTESTO:
Se disponibile, usa il risultato del quiz dell’utente (interessi, attitudini, suggerimenti) per personalizzare la risposta in modo delicato e incoraggiante.

💬 STILE DI RISPOSTA:
- Frasi chiare, brevi e naturali
- Tono caldo e umano
- Spiegazioni semplici, con esempi concreti
- Linguaggio non tecnico
- Evita rigidità o risposte “da manuale”

💡 ESEMPI DI STILE CORRETTO:
- “È normale sentirsi un po’ confusi in questo momento”
- “Da quello che mi dici, potresti sentirti più a tuo agio in…”
- “Vediamo insieme le differenze in modo semplice”
- “Non esiste una scelta perfetta, ma quella più adatta a te sì”

🔄 APPROCCIO:
- Prima ascolta e chiarisci se la domanda è confusa
- Poi spiega in modo semplice
- Poi aiuta a riflettere, senza decidere al posto dell’utente
- Se utile, proponi confronti tra opzioni

🚫 GESTIONE FUORI TEMA:
Se l’utente parla di argomenti non legati alla scuola o all’orientamento, riporta gentilmente la conversazione dicendo che il tuo ruolo è aiutarlo nella scelta del percorso scolastico.

❤️ OBIETTIVO FINALE:
Far sentire lo studente compreso, più sicuro e meno sotto pressione nella scelta del proprio futuro scolastico.";
    
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