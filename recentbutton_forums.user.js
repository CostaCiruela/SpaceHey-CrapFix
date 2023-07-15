// ==UserScript==
// @name         Spacehey - Recent Forums Button
// @version      1.0
// @description  Add a clock to each forum category, click it and go to the recent section of each one
// @author       NRM
// @match        *://forum.spacehey.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // Get category list. Skip the fucking h3 useless shit. God I hate this site shitty design
  var categoryList = document.querySelectorAll('.blog-preview h3:not(:first-child):not(:nth-child(2)) a');

  // Add the clock to each category
  categoryList.forEach(function(category) {
    var categoryName = category.innerText.trim(); // Category name
    var recentURL = category.href + '&show=recent'; // Add "recent" to the link

    // Create the link with the clock
    var clockLink = document.createElement('a');
    clockLink.href = recentURL;
    clockLink.style.marginLeft = '5px';

    // Adding the clock icon
    var clockIcon = document.createElement('img');
    clockIcon.src = 'https://static.spacehey.net/icons/clock.png';
    clockIcon.style.width = '16px';
    clockIcon.style.height = '16px';

    // Adding the clock icon to the link
    clockLink.appendChild(clockIcon);

    // Add the clock to each cateogry
    category.parentNode.appendChild(clockLink);
  });
})();
