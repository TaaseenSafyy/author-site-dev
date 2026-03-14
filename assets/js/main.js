(function () {
  var section = document.querySelector('.featured-articles');
  var card = document.querySelector('.featured-articles-container');
  if (section && card) {
    for (var i = 0; i < 4; i++) {
      section.appendChild(card.cloneNode(true));
    }
  }

  var toggle = document.querySelector('.nav-toggle');
  var header = document.querySelector('.site-header');
  if (toggle && header) {
    toggle.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open');
      toggle.setAttribute('aria-expanded', open);
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
  }
})();
