(function() {
  'use strict';

  svg4everybody();

  const trig = document.querySelector('.nav__trigger');
  const nav = document.querySelector('.nav');

  trig.addEventListener('click', heandleNav);

  function heandleNav() {
      if(nav.classList.contains('open')) {
          nav.classList.remove('open');
      } else {
          nav.classList.add('open');
      }
  }

  var slideIndex = 0;

})();
