document.addEventListener('DOMContentLoaded', function() {
  const sobre = document.getElementById('sobre');
  const tapa = sobre.querySelector('.tapa');
  const brillo = document.getElementById('brillo');
  const tickets = document.getElementById('tickets');
  const ticket1 = document.getElementById('ticket1');
  const ticket2 = document.getElementById('ticket2');
  const formUrl1 = "https://www.youtube.com/watch?v=bRzWIODPeGs"; // FORMULARIO 1
  const formUrl2 = "https://www.youtube.com/watch?v=hOxi-x1wf6M"; // FORMULARIO 2

  // Quitar clases previas por si acaso
  ticket1.className = "ticket";
  ticket2.className = "ticket";

  sobre.addEventListener('click', function abrirSobre() {
    brillo.classList.add('activo');
    tapa.style.transform = 'rotateX(85deg)';
    tapa.style.transformOrigin = 'top center';
    sobre.style.pointerEvents = 'none';

    // Mostrar los tickets detrás del sobre
    setTimeout(() => {
      tickets.classList.remove('oculto');
      void ticket1.offsetWidth; // Reflow
      void ticket2.offsetWidth;

      // Fase 1: Suben hacia arriba
      ticket1.classList.add('fase1');
      ticket2.classList.add('fase1');

      // Fase 2: Bajan al centro, más grandes
      setTimeout(() => {
        ticket1.classList.remove('fase1');
        ticket2.classList.remove('fase1');
        ticket1.classList.add('fase2-1');
        ticket2.classList.add('fase2-2');
      }, 600);

      // Ocultar sobre y brillo después de animación
      setTimeout(() => {
        sobre.style.opacity = 0;
        brillo.style.opacity = 0;
        setTimeout(() => {
          sobre.style.display = 'none';
          brillo.classList.remove('activo');
        }, 400);
      }, 1400);

    }, 800);
  });

  // Click en tickets - redirigir
  ticket1.addEventListener('click', function(e) {
    e.stopPropagation();
    window.location.href = formUrl1;
  });
  ticket2.addEventListener('click', function(e) {
    e.stopPropagation();
    window.location.href = formUrl2;
  });
});