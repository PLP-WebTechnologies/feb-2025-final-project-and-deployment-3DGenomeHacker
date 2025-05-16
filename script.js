// Toggle dark mode on button click
const toggleBtn = document.getElementById('toggle-theme');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Simple form validation and submission alert
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert(`Thank you, ${form.name.value}! We received your message.`);
  form.reset();
});
