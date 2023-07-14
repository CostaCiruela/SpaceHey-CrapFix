// ==UserScript==
// @name         SpaceHey - Home debloat
// @version      1.0
// @description  Hides home spam and other stuff
// @author       NRM
// @match        https://spacehey.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

     // Get My URL part
    var profileUrlElement = document.querySelector('.more-options p:last-child');
    if (profileUrlElement && profileUrlElement.innerHTML.includes('My URL:')) {
        // Hide My URL part
        profileUrlElement.style.display = 'none';
    }
       // Check for entries text
    var blogEntriesElement = document.querySelector('.blog-preview p i');
    if (blogEntriesElement && blogEntriesElement.textContent === 'There are no Blog Entries yet.') {
        // Hide "latest blog entries" if no entries
        var blogPreviewElement = document.querySelector('.blog-preview');
        if (blogPreviewElement) {
            blogPreviewElement.style.display = 'none';
        }
    }

    // This is just the spam and donation shit. Hiding it now~
    var donateElement = document.querySelector('.m-col.m-hide');
    if (donateElement) {
        donateElement.style.display = 'none';
    }

    var indieBoxElement = document.querySelector('.indie-box');
    if (indieBoxElement) {
        indieBoxElement.style.display = 'none';
    }

    var specialsElement = document.querySelector('.specials');
    if (specialsElement) {
        specialsElement.style.display = 'none';
    }
})();
