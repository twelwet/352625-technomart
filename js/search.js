// search.js
'use strict';

(function() {

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

})();
