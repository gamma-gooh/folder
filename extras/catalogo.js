const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('aberto');
  const aberto = menu.classList.contains('aberto');
  menuBtn.setAttribute('aria-expanded', aberto ? 'true' : 'false');
});

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && e.target !== menuBtn) {
    menu.classList.remove('aberto');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});