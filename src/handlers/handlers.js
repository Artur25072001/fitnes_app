const links = document.querySelectorAll('.exercise-link');
const menuButton = document.getElementById('menuButton');
const menuContent = document.getElementById('menuContent');
const navitems = document.querySelectorAll('.nav-item');

import { smoothNavigate } from '../service/transition.js';

links.forEach(link => {
  link.addEventListener('click', function () {
    document.querySelector('.exercise-link.active')?.classList.remove('active');
    this.classList.add('active');
  });
});

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

document.addEventListener('click', e => {
  const link = e.target.closest('.nav-link');
  if (link && !e.defaultPrevented) {
    e.preventDefault();
    smoothNavigate(link.getAttribute('href'));
  }
});
