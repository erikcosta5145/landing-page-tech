const hamburger = document.getElementById('hamburger');

const navMenu = document.getElementById('navMenu');

// Menu mobile

hamburger.addEventListener('click', () => {

  navMenu.classList.toggle('active');

});

// Fechar menu ao clicar

document.querySelectorAll('.nav-menu a').forEach(link => {

  link.addEventListener('click', () => {

    navMenu.classList.remove('active');

  });

});