// Seleccionar la imagen
const tvImage = document.getElementById('tv-image');
const derechaTv = document.getElementById('derechaTv');

// Animar la entrada desde la izquierda al cargar la página
window.onload = function() {
  // Establecer la posición inicial de la imagen fuera de la pantalla
  tvImage.style.transition = 'transform 2s ease';
  tvImage.style.transform = 'translateX(-100%)';

  derechaTv.style.transition = 'transform 2s ease';
  derechaTv.style.transform = 'translateX(100%)';
  
  // Permitir que el navegador aplique los estilos antes de iniciar la animación
  setTimeout(function() {
    tvImage.style.transform = 'translateX(0)';
    derechaTv.style.transform = 'translateX(0)';
  }, 100);
};
  