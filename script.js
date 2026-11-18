// Лабораторна робота №4, частина 1. Варіант 10
const VARIANT = 10;

// ===== 1. Зберігання даних у браузері (localStorage) =====
function saveSystemInfo() {
  const info = {
    platform: navigator.platform,
    userAgent: navigator.userAgent,
    language: navigator.language,
    screen: `${screen.width}×${screen.height}`,
  };
  // localStorage зберігає лише рядки, тому об'єкт перетворюємо на JSON
  localStorage.setItem('systemInfo', JSON.stringify(info));
}

function showSystemInfo() {
  const info = JSON.parse(localStorage.getItem('systemInfo'));
  const box = document.getElementById('system-info');
  const labels = { platform: 'ОС', userAgent: 'Браузер', language: 'Мова', screen: 'Екран' };

  box.innerHTML = '';
  for (const [key, value] of Object.entries(info)) {
    const p = document.createElement('p');
    p.textContent = `${labels[key]}: ${value}`;
    box.appendChild(p);
  }
}

// ===== 2. Відгуки роботодавців з сервера (Fetch API) =====
async function loadReviews() {
  const list = document.getElementById('reviews-list');
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const comments = await response.json();

    list.innerHTML = '';
    comments.forEach((comment) => {
      const item = document.createElement('li');
      item.className = 'review';

      const name = document.createElement('p');
      name.className = 'review__name';
      name.textContent = comment.name;

      const email = document.createElement('p');
      email.className = 'review__email';
      email.textContent = comment.email;

      const body = document.createElement('p');
      body.textContent = comment.body;

      item.append(name, email, body);
      list.appendChild(item);
    });
  } catch (error) {
    console.error('Error:', error);
    list.innerHTML = '<li>Не вдалося завантажити відгуки.</li>';
  }
}

// ===== 3. Модальне вікно зворотного зв'язку =====
const modal = document.getElementById('contact-modal');

function openModal() {
  modal.hidden = false;
}

function closeModal() {
  modal.hidden = true;
  sessionStorage.setItem('contactFormClosed', 'true'); // не показувати знову в цій сесії
}

document.getElementById('contact-open').addEventListener('click', openModal);
document.getElementById('contact-close').addEventListener('click', closeModal);

if (sessionStorage.getItem('contactFormClosed') !== 'true') {
  setTimeout(openModal, 60000); // через 1 хвилину
}

// ===== 4. Перехід на нічний/денний режим =====
const themeButton = document.getElementById('theme-toggle');

function setTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  themeButton.textContent = theme === 'dark' ? '☀️ Денна тема' : '🌙 Нічна тема';
}

function getThemeByTime() {
  const hours = new Date().getHours();
  return hours >= 7 && hours < 21 ? 'light' : 'dark'; // день: 07:00–21:00
}

themeButton.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
});

// ===== Запуск =====
saveSystemInfo();
showSystemInfo();
loadReviews();
setTheme(getThemeByTime());
