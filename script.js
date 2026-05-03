// GESTIONE SLIDER
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slide');
let index = 0;

if(track && slides.length > 0) {
    function nextSlide() {
        index++;
        if (index >= slides.length) index = 0;
        track.style.transform = `translateX(-${index * 100}vw)`;
    }
    setInterval(nextSlide, 4000);
}

// MENU MOBILE
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-links");
if(hamburger) {
    hamburger.addEventListener("click", () => {
        nav.classList.toggle("show");
    });
}

// --- INTEGRAZIONE IA UPTOYOU ---
const API_KEY = "AIzaSyDobHcblteBLZ05xqdlfXXWjHNLj8sM2gA";
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

const aiOpenBtn = document.getElementById('ai-open-btn'); // CAMBIATO NOME QUI
const chatWindow = document.getElementById('ai-window');

if(aiOpenBtn && chatWindow) {
    aiOpenBtn.onclick = () => {
        chatWindow.style.display = chatWindow.style.display === 'none' ? 'flex' : 'none';
    };
}

async function parlaConIA(messaggioUtente) {
    // USARE IL BACKTICK ` ALL'INIZIO E ALLA FINE
    const promptSistema = `Sei UpToYou AI Orientatore, un assistente digitale pensato per aiutare studenti tra gli 11 e i 18 anni a orientarsi nella scelta della scuola e del proprio percorso di studi.
    Il tuo ruolo NON è dare ordini o decisioni, ma aiutare lo studente a sentirsi più sicuro, meno confuso e più consapevole delle proprie opzioni.
    Tono: Empatico, rassicurante, linguaggio semplice.
    Obiettivo: Far sentire lo studente compreso e meno sotto pressione.`;
    
    try {
        const response = await fetch(GEMINI_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: promptSistema + "\n\nStudente: " + messaggioUtente }] }]
            })
        });
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (e) {
        return "Scusami, ho avuto un piccolo problema tecnico. Riprova tra un istante!";
    }
}

const aiSendBtn = document.getElementById('ai-send');
if(aiSendBtn) {
    aiSendBtn.onclick = async () => {
        const input = document.getElementById('ai-input');
        const display = document.getElementById('ai-messages');
        if (!input.value) return;

        const userMsg = input.value;
        display.innerHTML += `<p><b>Tu:</b> ${userMsg}</p>`;
        input.value = "";
        const thinkingMsg = document.createElement("p");
        thinkingMsg.innerHTML = "<i>Sta pensando...</i>";
        display.appendChild(thinkingMsg);

        const risposta = await parlaConIA(userMsg);
        
        thinkingMsg.remove();
        display.innerHTML += `<p><b>Mentor:</b> ${risposta}</p>`;
        display.scrollTop = display.scrollHeight;
    };
}

// 3. LOGICA NAVBAR & AUTENTICAZIONE
// Inizializzazione Supabase (Usa le tue costanti)
const SB_URL = 'https://ccvaevbvnqkfgoarutwx.supabase.co';
const SB_KEY = 'sb_publishable_uXuSLaEAjNJwWJVJ3ywSDw_SB6YbMMo';
const supabaseClient = supabase.createClient(SB_URL, SB_KEY);

    async function updateNavbar(session) {
        const authContainer = document.getElementById('auth-nav-item');
        if (!authContainer) return;

        if (session) {
            // --- UTENTE LOGGATO ---
            const user = session.user;
            const displayName = user.user_metadata?.full_name || user.email.split('@')[0];
            
            // Imposto la classe per il CSS "bellino"
            authContainer.className = "dropdown user-menu-wrapper";
            authContainer.innerHTML = `
                <div class="user-welcome-box">
                    Benvenuto, <span>${displayName}</span> ▾
                </div>
                <ul class="user-dropdown-menu">
                    <li><a href="profilo.html">👤 Dati Personali</a></li>
                    <li><a href="settings.html">⚙️ Impostazioni</a></li>
                    <li><a onclick="handleLogout()" class="btn-logout">🚪 Logout</a></li>
                </ul>
            `;
        } else {
            // --- UTENTE NON LOGGATO ---
            authContainer.className = "nav-auth-buttons";
            authContainer.innerHTML = `
                <a href="login.html" class="nav-box btn-login">Accedi</a>
                <a href="register.html" class="nav-box btn-register">Registrati</a>
            `;
        }
    }

    // Funzione per il Logout
    async function handleLogout() {
        const { error } = await supabaseClient.auth.signOut();
        if (error) {
            alert("Errore durante il logout: " + error.message);
        } else {
            window.location.reload();
        }
    }

    // Ascolta i cambiamenti di stato (Login/Logout)
    supabaseClient.auth.onAuthStateChange((event, session) => {
        console.log("Auth Event:", event);
        updateNavbar(session);
    });

    // Inizializzazione al caricamento della pagina
    window.addEventListener('DOMContentLoaded', async () => {
        const { data: { session } } = await supabaseClient.auth.getSession();
        updateNavbar(session);
    });
