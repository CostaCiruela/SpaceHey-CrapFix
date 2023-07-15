// ==UserScript==
// @name         SpaceHey - Auto accept friends
// @version      1.0
// @description  Automatically accepts friends requests.
// @author       NRM
// @match        https://spacehey.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Func to accept all!
  function acceptAllFriendRequests() {
    var acceptAllButton = document.querySelector('form input[type="hidden"][name="type"][value="accept_all_requests"] + button[type="submit"]');
    if (acceptAllButton) {
      acceptAllButton.click();
      setTimeout(function() {
        location.reload();
      }, 1500); // Wait, then reload the site after accepting requests
    }
  }

  // Run this shit when loading friend requests
  window.addEventListener('load', acceptAllFriendRequests);
})();
