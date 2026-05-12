/* Landing Page TechVision — script.js
   JavaScript puro, sem frameworks
   Erik Nascimento da Costa — UNINTER 2026 */

/* ── Menu hamburguer mobile ── */
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Fecha o menu ao clicar em qualquer link
document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});

/* ── Header com sombra ao rolar ── */
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(0,0,0,0.85)';
  } else {
    header.style.background = 'rgba(0,0,0,0.4)';
  }
}, { passive: true });

/* ── Validação do formulário de contato ── */
function enviarContato() {
  const nome     = document.getElementById('nome').value.trim();
  const email    = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();
  const msg      = document.getElementById('formMsg');

  // Limpa estado anterior
  msg.className = 'form-msg';
  msg.style.display = 'none';

  // Validação dos campos
  if (!nome || nome.length < 3) {
    mostrarErro('⚠️ Por favor, informe seu nome completo.'); return;
  }
  if (!validarEmail(email)) {
    mostrarErro('⚠️ Informe um e-mail válido (ex: nome@email.com).'); return;
  }
  if (!mensagem || mensagem.length < 10) {
    mostrarErro('⚠️ A mensagem deve ter pelo menos 10 caracteres.'); return;
  }

  // Simula envio com loading
  const btn = document.querySelector('.contact-form .btn');
  btn.textContent = '⏳ Enviando...';
  btn.disabled = true;

  setTimeout(() => {
    // Limpa os campos
    document.getElementById('nome').value     = '';
    document.getElementById('email').value    = '';
    document.getElementById('mensagem').value = '';

    // Restaura botão
    btn.textContent = 'Enviar Mensagem';
    btn.disabled = false;

    // Exibe mensagem de sucesso
    msg.textContent = '✅ Mensagem enviada com sucesso! Em breve entrarei em contato.';
    msg.classList.add('success');
    msg.style.display = 'block';

    // Esconde depois de 5 segundos
    setTimeout(() => { msg.style.display = 'none'; }, 5000);
  }, 1500);
}

function mostrarErro(texto) {
  const msg = document.getElementById('formMsg');
  msg.textContent = texto;
  msg.classList.add('error');
  msg.style.display = 'block';
}

/* Valida formato de e-mail com RegExp */
function validarEmail(email) {
  return /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email);
}

/* ── Animações de reveal ao scroll ── */
const revealEls = document.querySelectorAll('.card, .cta-box, .benefits-text, .section-title');
revealEls.forEach(el => {
  el.style.opacity    = '0';
  el.style.transform  = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity   = '1';
      e.target.style.transform = 'translateY(0)';
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => observer.observe(el));
