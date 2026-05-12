document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('menuToggle');
  var nav = document.getElementById('navMobile');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  document.querySelectorAll('form[data-confirm]').forEach(function (f) {
    f.addEventListener('submit', function () {
      // Permite envio normal (PHP); apenas UX
    });
  });
});