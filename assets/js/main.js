(function () {
  var section = document.querySelector('.featured-articles');
  var card = document.querySelector('.featured-articles-container');
  if (!section || !card) return;
  for (var i = 0; i < 4; i++) {
    section.appendChild(card.cloneNode(true));
  }
})();
