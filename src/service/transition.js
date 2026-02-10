export function updateActiveLink() {
  const navLinks = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname;
  navLinks.forEach(link => {
    const item = link.closest('.nav-item');
    const linkPath = link.getAttribute('href').replace('./', '');

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
export async function smoothNavigate(url) {
  if (!document.startViewTransition) {
    window.location.href = url;
    return;
  }
  const response = await fetch(url);
  const text = await response.text();
  const parser = new DOMParser();
  const newDoc = parser.parseFromString(text, 'text/html');
  const newContent = newDoc.querySelector('body').innerHTML;
  const newTitle = newDoc.title;
  document.startViewTransition(() => {
    document.body.innerHTML = newContent;
    document.title = newTitle;
    window.history.pushState({}, '', url);
    updateActiveLink();
    window.dispatchEvent(new Event('DOMContentLoaded'));
  });
}
