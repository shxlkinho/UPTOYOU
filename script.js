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
window.SB_URL = 'https://ccvaevbvnqkfgoarutwx.supabase.co';
window.SB_KEY = 'sb_publishable_uXuSLaEAjNJwWJVJ3ywSDw_SB6YbMMo';
window.supabaseClient = supabase.createClient(SB_URL, SB_KEY);

async function updateNavbar(session) {
    const authContainer = document.getElementById('auth-nav-item');
    if (!authContainer) return;

    // --- TROVA AUTOMATICAMENTE IL PERCORSO DELLA ROOT ---
    // Prende l'ultimo script caricato nella pagina (che è questo file .js)
    const scripts = document.getElementsByTagName('script');
    const currentScriptSrc = scripts[scripts.length - 1].src;
    
    // Estrae la cartella principale eliminando il nome del file js dal percorso
    const rootPath = currentScriptSrc.substring(0, currentScriptSrc.lastIndexOf('/') + 1);
    // ---------------------------------------------------

    if (session) {
        const user = session.user;
        const displayName = user.user_metadata?.full_name || user.email.split('@')[0];
        
        authContainer.className = "user-menu-wrapper";
        authContainer.innerHTML = `
            <div class="user-welcome-box">
                Benvenuto, <span>${displayName}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
            <ul class="user-dropdown-menu">
                <li>
                    <a href="${rootPath}profilo.html">
                        <svg viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        Il mio Profilo
                    </a>
                </li>
                <li>
                    <a href="${rootPath}impostazioni.html">
                        <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                        Impostazioni
                    </a>
                </li>
                <div class="menu-divider"></div>
                <li>
                    <a onclick="handleLogout()" class="btn-logout-item">
                        <svg viewBox="0 0 24 24"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
                        Logout
                    </a>
                </li>
            </ul>
        `;
    } else {
        // --- UTENTE NON LOGGATO ---
        authContainer.className = "nav-auth-buttons";
        authContainer.innerHTML = `
            <a href="${rootPath}login.html" class="nav-box btn-login">Accedi</a>
            <a href="${rootPath}register.html" class="nav-box btn-register">Registrati</a>
        `;
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
