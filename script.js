const botao = document.getElementById('botaoTocar');

    // Pega o elemento do áudio pelo seu ID
    const musica = document.getElementById('minhaMusica');

    // Adiciona um "ouvinte de evento" ao botão. 
    // Ele espera por um 'click' e, quando acontece, executa a função.
    botao.addEventListener('click', function() {
        musica.play(); // Este é o comando principal para tocar o áudio.
    });
    // 1. ANIMAÇÃO DE CORAÇÕES CAINDO
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 8 + 's'; // Duração entre 8s e 10s
        heart.innerText = '❤️';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 10000); // Remove o coração depois de 10s
    }
    setInterval(createHeart, 500); // Cria um novo coração a cada 0.5s

    // 2. ANIMAÇÃO DE FADE-IN AO ROLAR A PÁGINA
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('header, section').forEach(el => {
        observer.observe(el);
    });

    // 3. CONTAGEM DE TEMPO JUNTOS
    function updateCountdown() {
        // TROQUE AQUI: Coloque a data em que vocês começaram a namorar (Ano, Mês-1, Dia)
        const startDate = new Date('2024-01-31T00:00:00'); // Exemplo: 14 de Fevereiro de 2023
        const now = new Date();
        
        const diff = now - startDate;
        
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 365;
        const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const minutes = Math.floor(diff / (1000 * 60)) % 60;
        
        const countdownEl = document.getElementById('countdown');
        if(years > 0){
            countdownEl.innerHTML = `Juntos há: <strong>${years} ano(s)</strong>, <strong>${days} dia(s)</strong>, <strong>${hours} hora(s)</strong> e <strong>${minutes} minuto(s)</strong>!`;
        } else {
            countdownEl.innerHTML = `Juntos há: <strong>${days} dia(s)</strong>, <strong>${hours} hora(s)</strong> e <strong>${minutes} minuto(s)</strong>!`;
        }
    }
    setInterval(updateCountdown, 1000); // Atualiza a cada segundo
    updateCountdown(); // Chama uma vez para não esperar 1s para aparecer
