// Store event listener reference for cleanup
let footerFormListener = null;

export function initFooterHandler() {
  let API_URL = 'https://your-energy.b.goit.study/api/subscription';
  const footerForm = document.querySelector('.footer-form');

  // Remove old event listener if it exists
  if (footerFormListener && footerForm) {
    footerForm.removeEventListener('submit', footerFormListener);
  }

  footerFormListener = () => {
    const emailInput = footerForm.querySelector('input[type="email"]');
    const email = emailInput.value.trim();
    if (email) {
      try {
        fetch(API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        emailInput.value = '';
        alert('Subscription successful!');
      } catch (error) {
        console.error('Error during subscription:', error);
      }
    }
  };
  if (footerForm) {
    footerForm.addEventListener('submit', footerFormListener);
  }
}
