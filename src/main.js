const links = document.querySelectorAll('.exercise-link');
const exerciseButtons = document.querySelectorAll('.exercise-button');
const navitems = document.querySelectorAll('.nav-item');

exerciseButtons.forEach(button => {
  button.addEventListener('click', function () {
    document
      .querySelector('.exercise-button.active')
      ?.classList.remove('active');
    this.classList.add('active');
  });
});

links.forEach(link => {
  link.addEventListener('click', function () {
    document.querySelector('.exercise-link.active')?.classList.remove('active');
    this.classList.add('active');
  });
});

function updateActiveLink() {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
    const item = link.closest('.nav-item');
    const linkPath = link.getAttribute('href').replace('./', '');

    // Проверка на главную или совпадение пути
    const isHome =
      (currentPath === '/' || currentPath.endsWith('index.html')) &&
      linkPath.includes('index.html');
    const isExactMatch = currentPath.endsWith(linkPath) && linkPath !== '';

    if (isHome || isExactMatch) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}
document.addEventListener('DOMContentLoaded', () => {
  updateActiveLink(); // Запуск при первой загрузке
});

async function smoothNavigate(url) {
  if (!document.startViewTransition) {
    window.location.href = url;
    return;
  }

  // 1. Загружаем данные заранее
  const response = await fetch(url);
  const text = await response.text();
  const parser = new DOMParser();
  const newDoc = parser.parseFromString(text, 'text/html');
  const newContent = newDoc.querySelector('body').innerHTML;
  const newTitle = newDoc.title;

  // 2. Начинаем переход
  document.startViewTransition(() => {
    // Меняем контент
    document.body.innerHTML = newContent;
    document.title = newTitle;
    window.history.pushState({}, '', url);

    // СРАЗУ обновляем активный класс, чтобы браузер увидел его в новом DOM
    updateActiveLink();

    // Перезапуск других скриптов (модалки и т.д.)
    window.dispatchEvent(new Event('DOMContentLoaded'));
  });
}

// Слушатель кликов (остается таким же)
document.addEventListener('click', e => {
  const link = e.target.closest('.nav-link');
  if (link && !e.defaultPrevented) {
    e.preventDefault();
    smoothNavigate(link.getAttribute('href'));
  }
});
