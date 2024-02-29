// Espera a que se cargue el contenido
document.addEventListener("DOMContentLoaded", function() {
    // Obtén la imagen
    var image = document.getElementById("animatedImage");
    
    // Agrega un evento de clic para activar la animación
    image.addEventListener("click", function() {
      // Toggle the moved class to activate or deactivate the animation
      image.classList.toggle("moved");
      
      // Remove the moved class after the animation completes
      setTimeout(function() {
        image.classList.toggle("moved");
      }, 3000);
    });
  });
  
