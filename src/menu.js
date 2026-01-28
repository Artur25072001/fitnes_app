const menuButton = document.getElementById('menuButton');
const menuContent = document.getElementById('menuContent');

menuButton.addEventListener('click', () => {
  const isActive = menuButton.classList.toggle('is-active');
  menuContent.classList.toggle('is-active');
  menuButton.setAttribute('aria-expanded', isActive);
});

document.addEventListener('click', e => {
  if (!menuButton.contains(e.target) && !menuContent.contains(e.target)) {
    menuButton.classList.remove('is-active');
    menuContent.classList.remove('is-active');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});
