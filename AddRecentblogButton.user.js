// ==UserScript==
// @name         Spacehey - Recent Blogs Button
// @version      2.0
// @description  Add clickable clock next to "Blog" button, working as a "Recent blogs" link.
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

  // Clock image pointer + a/href element
  var clockIcon = document.createElement('a');
  clockIcon.href = 'https://blog.spacehey.com/recent';
  clockIcon.style.cursor = 'pointer';
  clockIcon.style.marginLeft = '5px';

  // Clock image. Custom W and H
  var clockImage = document.createElement('img');
  clockImage.src = 'https://static.spacehey.net/icons/clock.png';
  clockImage.style.width = '12px';
  clockImage.style.height = '12px';

  clockIcon.appendChild(clockImage);

  // Hover description. This is optional, delete if you don't needed.
  clockImage.title = 'Recent blogs';

  // Search blog link in the top list
  var blogsLink = document.querySelector('.links a[href="https://blog.spacehey.com"]');

  // Clock image pos.
  blogsLink.parentNode.insertBefore(clockIcon, blogsLink.nextSibling);

  // Go to recent blogs when clicking the img
  clockIcon.addEventListener('click', function(event) {
    event.preventDefault(); // Just in case IG
    window.location.href = clockIcon.href; // Go to href link
  });
})();
