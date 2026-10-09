// Общие функции

function animateCards() {
    document.querySelectorAll('.card').forEach((el, i) => {
        el.classList.add('fade-in');
        el.style.animationDelay = (i * 0.05) + 's';
    });
}

function showAlert(container, text, type = 'success') {
    const div = document.createElement('div');
    div.className = `alert alert-${type}`;
    div.textContent = text;
    container.prepend(div);
    setTimeout(() => div.remove(), 5000);
}

function formatPrice(n) {
    return new Intl.NumberFormat('ru-RU').format(n) + ' ₽';
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
}

function loadHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    header.innerHTML = `
        <div class="container header-inner">
            <a href="/" class="logo">🐾 Добрый Доктор</a>
            <nav>
                <a href="/">Главная</a>
                <a href="/services.html">Услуги</a>
                <a href="/doctors.html">Врачи</a>
                <a href="/booking.html">Запись</a>
                <a href="/admin.html">Админ</a>
            </nav>
        </div>`;
}