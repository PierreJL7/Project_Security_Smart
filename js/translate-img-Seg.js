document.addEventListener("DOMContentLoaded", function() {
    var imagen6 = document.getElementById("imagen-6");
    var imagen7 = document.getElementById("imagen-7");
    var imagen8 = document.getElementById("imagen-8");
    var imagen4 = document.getElementById("imagen-4");
    var imagen5 = document.getElementById("imagen-5");
    var scrollActivated6 = false;
    var scrollActivated7 = false;
    var scrollActivated8 = false;
    var scrollActivated4 = false;
    var scrollActivated5 = false;
  
    window.addEventListener("scroll", function() {
      if (!scrollActivated6 && isInViewport(imagen6)) {
        scrollActivated6 = true;
        imagen6.classList.add("aparecer-6");
      }
      if (!scrollActivated7 && isInViewport(imagen7)) {
        scrollActivated7 = true;
        imagen7.classList.add("aparecer-7");
      }
      if (!scrollActivated8 && isInViewport(imagen8)) {
        scrollActivated8 = true;
        imagen8.classList.add("aparecer-8");
      }

    });
  
    function isInViewport(element) {
      var rect = element.getBoundingClientRect();
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top <= windowHeight && rect.bottom >= 0;
    }
  });
  