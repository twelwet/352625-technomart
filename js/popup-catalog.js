//popup.js
'use strict';

(function () {

  var buyOpenBtns = document.querySelectorAll('.goods-item .buy');
  var buyPopup = document.querySelector('.modal-buy');
  var buyCloseBtn = buyPopup.querySelector('.close');
  var checkoutBtn = buyPopup.querySelector('.checkout');
  var continueBtn = buyPopup.querySelector('.continue');

  for (var i = 0; (i <= (buyOpenBtns.length - 1)); i++) {
    buyOpenBtns[i].addEventListener('click', function(evt) {
        evt.preventDefault();
        buyPopup.classList.remove('visually-hidden');
        checkoutBtn.focus();
    });
  }

  buyCloseBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    buyPopup.classList.add('visually-hidden');
  });

  window.addEventListener('keydown', function(evt) {
    if ((buyPopup.classList.contains('visually-hidden') === false) && (evt.keyCode === 27)) {
      buyPopup.classList.add('visually-hidden');
    }
  });

  continueBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    buyPopup.classList.add('visually-hidden');
  });

})();
