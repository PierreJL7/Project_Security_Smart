document.addEventListener("DOMContentLoaded", function() {
  var imagen1 = document.getElementById("imagen");
  var imagen2 = document.getElementById("imagen-2");
  var imagen3 = document.getElementById("imagen-3");
  var imagen4 = document.getElementById("imagen-4");
  var imagen5 = document.getElementById("imagen-5");
  var scrollActivated1 = false;
  var scrollActivated2 = false;
  var scrollActivated3 = false;
  var scrollActivated4 = false;
  var scrollActivated5 = false;

  window.addEventListener("scroll", function() {
    if (!scrollActivated1 && isInViewport(imagen1)) {
      scrollActivated1 = true;
      imagen1.classList.add("aparecer");
    }
    if (!scrollActivated2 && isInViewport(imagen2)) {
      scrollActivated2 = true;
      imagen2.classList.add("aparecer-2");
    }
    if (!scrollActivated3 && isInViewport(imagen3)) {
      scrollActivated3 = true;
      imagen3.classList.add("aparecer-3");
    }
    if (!scrollActivated4 && isInViewport(imagen4)) {
      scrollActivated4 = true;
      imagen4.classList.add("aparecer-4");
    }
    if (!scrollActivated5 && isInViewport(imagen5)) {
      scrollActivated5 = true;
      imagen5.classList.add("aparecer-5");
    }
    
  });

  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    return rect.top <= windowHeight && rect.bottom >= 0;
  }
});
