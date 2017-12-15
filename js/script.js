// script.js
'use strict';

(function () {

  if (document.querySelector('.modal-feedback') != null) {
    var feedbackOpenBtn = document.querySelector('.feedback-btn');
    var feedbackPopup = document.querySelector('.modal-feedback');
    var feedbackForm = feedbackPopup.querySelector('.write-us');
    var feedbackCloseBtn = feedbackPopup.querySelector('.close');
    var feedbackName = feedbackForm.querySelector('[name=name]');
    var feedbackEmail = feedbackForm.querySelector('[name=email]');
    var feedbackMessage = feedbackForm.querySelector('[name=message]');

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

    feedbackForm.addEventListener('submit', function(evt) {
      if (!feedbackName.value || !feedbackEmail.value || !feedbackMessage.value) {
        evt.preventDefault();
        feedbackPopup.classList.add('modal-error');
      }
    });

    window.addEventListener('keydown', function(evt) {
      if ((feedbackPopup.classList.contains('visually-hidden') === false) && (evt.keyCode === 27)) {
        feedbackPopup.classList.add('visually-hidden');
        feedbackPopup.classList.remove('modal-error');
      }
    });
  }

  if (document.querySelector('.modal-map') != null) {
    var mapOpenBtn = document.querySelector('.map-link');
    var mapPopup = document.querySelector('.modal-map');
    var mapCloseBtn = mapPopup.querySelector('.close');

    mapOpenBtn.addEventListener('click', function(evt) {
      evt.preventDefault();
      mapPopup.classList.remove('visually-hidden');
    });

    mapCloseBtn.addEventListener('click', function(evt) {
      evt.preventDefault();
      mapPopup.classList.add('visually-hidden');
    });

    window.addEventListener('keydown', function(evt) {
      if ((mapPopup.classList.contains('visually-hidden') === false) && (evt.keyCode === 27)) {
        mapPopup.classList.add('visually-hidden');
      }
    });
  }

  if (document.querySelector('.modal-buy') != null) {
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
  }

  if (searchBlock = document.querySelector('.search-functions') != null) {
    var searchBlock = document.querySelector('.search-functions');
    var searchLabel = searchBlock.querySelector('.search-label');
    var searchInput = searchLabel.querySelector('input');

    searchInput.addEventListener('focus', function(evt) {
      searchLabel.classList.add('search-label-current');
    });

    searchInput.addEventListener('blur', function(evt) {
      searchLabel.classList.remove('search-label-current');
      if (searchInput.value != '') {
        searchLabel.classList.add('search-label-current');
      }
    });
  }

})();
