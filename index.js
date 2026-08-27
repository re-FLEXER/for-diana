const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const counterText = document.getElementById('counter');
const questionTitle = document.getElementById('questionTitle');

let noClickCount = 0;
const MAX_ATTEMPTS = 30;

function setInitialNoBtnPosition() {
    // Центруємо кнопку "Ні" строго по середині екрана при старті
    const btnWidth = noBtn.offsetWidth || 100;
    const btnHeight = noBtn.offsetHeight || 50;
    
    noBtn.style.top = `${(window.innerHeight / 2) - (btnHeight / 2)}px`;
    noBtn.style.left = `${(window.innerWidth / 2) - (btnWidth / 2)}px`;
}

function moveNoButton() {
    if (noClickCount >= MAX_ATTEMPTS) return; 

    noClickCount++;
    counterText.textContent = `Спроб натиснути «Ні»: ${noClickCount} / ${MAX_ATTEMPTS}`;
        
    // Безпечні відступи (padding 40px), щоб кнопка не залітала під краї та Dock-панель macOS
    const padding = 40;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.max(padding, Math.floor(Math.random() * maxX));
    const y = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    if (noClickCount >= MAX_ATTEMPTS) {
        noBtn.style.display = 'none';
        yesBtn.style.display = 'inline-block';
        questionTitle.textContent = "Здається, варіантів більше немає... 😘";
        counterText.textContent = "Вибору не залишилося! Натискай «Так» ❤️";
    }
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveNoButton();
});

yesBtn.addEventListener('click', () => {
    document.body.innerHTML = `
        <div class="success-card">
            <h1 style="font-size: 3.5rem; color: #ff3366;">Я так і знав! 💖</h1>
            <p style="font-size: 1.8rem; color: #444; margin-top: 15px;">Кохаю тебе найбільше у світі! 🥰✨</p>
        </div>
    `;
});

window.addEventListener('load', setInitialNoBtnPosition);
window.addEventListener('resize', setInitialNoBtnPosition);