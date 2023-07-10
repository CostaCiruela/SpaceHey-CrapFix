// ==UserScript==
// @name         Spacehey - Recent Blogs Button
// @version      1.0
// @description  Add clickable clock emoji next to Blogs button, working as a "Recent blogs" link.
// @author       NRM
// @match        *://spacehey.com/*
// @match        *://blog.spacehey.com/*
// @match        *://forum.spacehey.com/*
// @match        *://groups.spacehey.com/*
// @match        *://layouts.spacehey.com/*
// @match        *://shop.spacehey.com/*
// ==/UserScript==

(function() {
  'use strict';

  // Clock Emoji Itself
  var clockEmoji = document.createElement('span');
  clockEmoji.innerHTML = '&#x23F0;';
  clockEmoji.style.cursor = 'pointer';
  clockEmoji.style.marginLeft = '5px';

  // Hover description. This is optional, delete if you don't needed.
  clockEmoji.title = 'Recent blogs';

  // Search blog link in the top list
  var linksList = document.querySelector('.links');
  var blogsLink = linksList.querySelector('a[href="https://blog.spacehey.com"]');

  // Clock emoji pos.
  blogsLink.parentNode.insertBefore(clockEmoji, blogsLink.nextSibling);

  // Go to recent blogs when clicking the emoji!
  clockEmoji.addEventListener('click', function() {
    window.location.href = 'https://blog.spacehey.com/recent';
  });
})();
