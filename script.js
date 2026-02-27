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