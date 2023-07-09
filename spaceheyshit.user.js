// ==UserScript==
// @name         SpaceHey - Press Enter, Send Msg
// @version      1.0
// @description  Press ENTER, Send the MSG
// @author       NRM
// @match        https://im.spacehey.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  document.querySelector('.message-composer').addEventListener('keydown', function(e) {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault(); // Fuck SpaceHey weird stuff man.
      sendMessage();
    }
  });

  function sendMessage() {
    document.querySelector('.message-send').click();
  }
})();
