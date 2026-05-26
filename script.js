// ============================================================
// GESTIONE MENU MOBILE (Hamburger)
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinksContainer = document.getElementById('nav-links-container');

    if (mobileMenuBtn && navLinksContainer) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenuBtn.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
        });

        // Chiude il menu se si clicca in un punto qualsiasi fuori dal menu stesso
        document.addEventListener('click', (e) => {
            if (navLinksContainer.classList.contains('active') && 
                !navLinksContainer.contains(e.target) && 
                !mobileMenuBtn.contains(e.target)) {
                
                mobileMenuBtn.classList.remove('active');
                navLinksContainer.classList.remove('active');
            }
        });
    }
});


// ============================================================
// GESTIONE SLIDER
// ============================================================
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


// ============================================================
// GESTIONE NAVBAR / AUTENTICAZIONE SUPABASE
// ============================================================

window.updateNavbar = async function(session) {
    const authContainer = document.getElementById('auth-nav-item');
    if (!authContainer) return;

    if (session) {
        // UTENTE LOGGATO
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
                    <a href="profilo.html">
                        <svg viewBox="0 0 24 24"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        Il mio Profilo
                    </a>
                </li>
                <li>
                    <a href="impostazioni.html">
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
        // UTENTE NON LOGGATO
        authContainer.className = "nav-auth-buttons";
        authContainer.innerHTML = `
            <a href="login.html" class="nav-box btn-login">Accedi</a>
            <a href="register.html" class="nav-box btn-register">Registrati</a>
        `;
    }
};

window.handleLogout = async function() {
    if(window.supabaseClient) {
        const { error } = await supabaseClient.auth.signOut();
        if (error) {
            alert("Errore durante il logout: " + error.message);
        } else {
            window.location.reload();
        }
    }
};

// Se Supabase è caricato, controlla la sessione iniziale
if (window.supabaseClient) {
    supabaseClient.auth.getSession().then(({ data: { session } }) => {
        updateNavbar(session);
    });

    supabaseClient.auth.onAuthStateChange((event, session) => {
        updateNavbar(session);
    });
}