const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');
const navBar = document.querySelector('nav');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

navBar.addEventListener('mouseenter', () => {
  if (window.innerWidth > 768) {
    navMenu.classList.add('show');
  }
});

navBar.addEventListener('mouseleave', () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove('show');
  }
});