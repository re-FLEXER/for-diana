const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const counterText = document.getElementById('counter');
    const questionTitle = document.getElementById('questionTitle');

    let noClickCount = 0;
    const MAX_ATTEMPTS = 30;

    // --- Початкова позиція кнопки "Ні" по центру
    function setInitialNoBtnPosition() {
        noBtn.style.top = `${window.innerHeight / 2}px`;
        noBtn.style.left = `${window.innerWidth / 2 - 40}px`;
    }

    // --- Функція для переміщення кнопки "Ні"
    function moveNoButton() {
        if (noClickCount >= MAX_ATTEMPTS) return; 

        noClickCount++;
        counterText.textContent = `Спроб натиснути «Ні»: ${noClickCount} / ${MAX_ATTEMPTS}`;
            
        // Розрахунок нових координат у межах екрана
        const x = Math.floor(Math.random() * (window.innerWidth - 120));
        const y = Math.floor(Math.random() * (window.innerHeight - 60));
        noBtn.style.left = `${x}px`;
        noBtn.style.top = `${y}px`;

        // --- Після 30 спроб ховаємо "Ні" та показуємо "Так"
        if (noClickCount >= MAX_ATTEMPTS) {
            noBtn.style.display = 'none';
            yesBtn.style.display = 'inline-block'; // Показуємо кнопку «Так»
            questionTitle.textContent = "Здається, варіантів більше немає... 😘";
            counterText.textContent = "Вибору не залишилося! Натискай «Так» ❤️";
        }
    }

    // Реагуємо на наведення мишки та тапи на мобілці
    noBtn.addEventListener('mouseover', moveNoButton);
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveNoButton();
    });

    // Фінал при кліку на кнопку "Так"
    yesBtn.addEventListener('click', () => {
        document.body.innerHTML = `
            <div class="success-card">
                <h1 style="font-size: 3.5rem; color: #ff3366;">Я так і знав! 💖</h1>
                <p style="font-size: 1.8rem; color: #444; margin-top: 15px;">Кохаю тебе найбільше у світі! By Vadim Pristupa 🥰✨</p>
            </div>
        `;
    });

    // Виправлено ім'я функції у слухачах подій
    window.addEventListener('load', setInitialNoBtnPosition);
    window.addEventListener('resize', setInitialNoBtnPosition);