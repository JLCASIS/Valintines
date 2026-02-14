// ========================================
// 💖 FLOATING HEARTS GENERATION
// ========================================
function createHearts() {
    const container = document.getElementById('heartsBackground');
    const heartSymbols = ['💕', '💖', '💗', '💝', '💓', '💞', '❤️', '🌸'];

    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 10 + 's';
        container.appendChild(heart);
    }
}

// ========================================
// ✨ SPARKLES GENERATION
// ========================================
function createSparkles() {
    const container = document.getElementById('sparkles');

    for (let i = 0; i < 30; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(sparkle);
    }
}

// ========================================
// 🌸 FLOATING PETALS GENERATION
// ========================================
function createPetals() {
    const container = document.getElementById('petalsContainer');
    const petalSymbols = ['🌸', '🌺', '🌷', '🌹'];

    for (let i = 0; i < 15; i++) {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.textContent = petalSymbols[Math.floor(Math.random() * petalSymbols.length)];
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDelay = Math.random() * 10 + 's';
        petal.style.animationDuration = (8 + Math.random() * 4) + 's';
        container.appendChild(petal);
    }
}

// ========================================
// 💗 MAIN BUTTON CLICK EVENT
// ========================================
const loveButton = document.getElementById('loveButton');
const welcomeScreen = document.getElementById('welcomeScreen');
const mainContent = document.getElementById('mainContent');
const musicControl = document.getElementById('musicControl');
const music = document.getElementById('backgroundMusic');

loveButton.addEventListener('click', function () {
    // Fade out welcome screen
    welcomeScreen.classList.add('fade-out');

    setTimeout(() => {
        welcomeScreen.style.display = 'none';
        mainContent.classList.add('active');

        // Create floating petals
        createPetals();

        // Show music control
        musicControl.style.display = 'block';

        // Auto-play music (may require user interaction in some browsers)
        music.play().catch(e => {
            console.log('Auto-play prevented. User can click music button.');
        });
    }, 1500);
});

// ========================================
// 🎵 MUSIC CONTROL
// ========================================
let musicPlaying = true;

musicControl.addEventListener('click', function () {
    if (musicPlaying) {
        music.pause();
        musicControl.textContent = '🎵 Music OFF';
        musicPlaying = false;
    } else {
        music.play();
        musicControl.textContent = '🎵 Music ON';
        musicPlaying = true;
    }
});

// ========================================
// 🖼️ PHOTO MODAL FUNCTIONS
// ========================================
function openModal(element) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const img = element.querySelector('img');

    modal.classList.add('active');
    modalImg.src = img.src;
}

function closeModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
}

// Close modal when clicking outside image
document.getElementById('imageModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeModal();
    }
});

// ========================================
// 🚀 INITIALIZE ON PAGE LOAD
// ========================================
window.addEventListener('load', function () {
    createHearts();
    createSparkles();
});

// ========================================
// ⌨️ KEYBOARD SHORTCUTS
// ========================================
document.addEventListener('keydown', function (e) {
    // Press ESC to close modal
    if (e.key === 'Escape') {
        closeModal();
    }
});