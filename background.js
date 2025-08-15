document.addEventListener('DOMContentLoaded', () => {
  const gradients = [
    'linear-gradient(to right, #3b82f6, #9333ea)',
    'linear-gradient(to right, #10b981, #3b82f6)',
    'linear-gradient(to right, #f59e0b, #ef4444)'
  ];
  let index = 0;
  function changeBackground() {
    document.body.style.backgroundImage = gradients[index];
    index = (index + 1) % gradients.length;
  }
  changeBackground();
  setInterval(changeBackground, 8000);
});
