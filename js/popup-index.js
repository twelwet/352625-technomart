//popup.js
'use strict';

(function () {

  var feedbackOpenBtn = document.querySelector('.feedback-btn');
  var feedbackPopup = document.querySelector('.modal-feedback');
  var feedbackForm = feedbackPopup.querySelector('.write-us');
  var feedbackCloseBtn = feedbackPopup.querySelector('.close');
  var feedbackName = feedbackForm.querySelector('[name=name]');
  var feedbackEmail = feedbackForm.querySelector('[name=email]');
  var feedbackMessage = feedbackForm.querySelector('[name=message]');
  var mapOpenBtn = document.querySelector('.map-link');
  var mapPopup = document.querySelector('.modal-map');
  var mapCloseBtn = mapPopup.querySelector('.close');
  var buyOpenBtns = document.querySelectorAll('.goods-item .buy');
  var buyPopup = document.querySelector('.modal-buy');
  var buyCloseBtn = buyPopup.querySelector('.close');
  var checkoutBtn = buyPopup.querySelector('.checkout');
  var continueBtn = buyPopup.querySelector('.continue');

  feedbackOpenBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove('visually-hidden');
    feedbackName.focus();
  });

  feedbackCloseBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    feedbackPopup.classList.add('visually-hidden');
    feedbackPopup.classList.remove('modal-error');
  });

  mapOpenBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove('visually-hidden');
  });

  mapCloseBtn.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapPopup.classList.add('visually-hidden');
  });

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
    if ((feedbackPopup.classList.contains('visually-hidden') === false) && (evt.keyCode === 27)) {
      feedbackPopup.classList.add('visually-hidden');
      feedbackPopup.classList.remove('modal-error');
    }
  });

  window.addEventListener('keydown', function(evt) {
    if ((mapPopup.classList.contains('visually-hidden') === false) && (evt.keyCode === 27)) {
      mapPopup.classList.add('visually-hidden');
    }
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

  feedbackForm.addEventListener('submit', function(evt) {
    if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
      evt.preventDefault();
      feedbackPopup.classList.add('modal-error');
    }
  });

})();
