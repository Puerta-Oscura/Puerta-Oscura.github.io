document.addEventListener('DOMContentLoaded', function() {
  const sobre = document.getElementById('sobre');
  const tapa = sobre.querySelector('.tapa');
  // const formulario = document.getElementById('formulario');
  const brillo = document.getElementById('brillo');
  const formUrl = "https://forms.gle/3PYaDjUqeTUHmHqS8";

  sobre.addEventListener('click', function abrirSobre() {
    brillo.classList.add('activo');

    tapa.style.transform = 'rotateX(85deg)';
    tapa.style.transformOrigin = 'top center';
    sobre.style.pointerEvents = 'none';

    setTimeout(() => {
      sobre.style.opacity = 0;
      brillo.style.opacity = 0;
      setTimeout(() => {
        sobre.style.display = 'none';
        brillo.classList.remove('activo');
        // formulario.classList.remove('oculto');
        // formulario.style.opacity = 1;
        window.location.href = formUrl;
      }, 400);
    }, 800);
  });

  /*
  sobre.addEventListener('click', function abrirSobre() {
    brillo.classList.add('activo');
    tapa.style.transform = 'rotateX(85deg)';
    tapa.style.transformOrigin = 'top center';
    sobre.style.pointerEvents = 'none';
    setTimeout(() => {
      sobre.style.opacity = 0;
      brillo.style.opacity = 0;
      setTimeout(() => {
        sobre.style.display = 'none';
        brillo.classList.remove('activo');
        formulario.classList.remove('oculto');
        formulario.style.opacity = 1;
      }, 400);
    }, 800);
  });
  */
});