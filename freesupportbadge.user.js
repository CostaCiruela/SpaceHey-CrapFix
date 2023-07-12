// ==UserScript==
// @name         SpaceHey - Local Supporter Badge
// @version      1.0
// @description  Locally add Support badge
// @author       NRM
// @match        https://spacehey.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Locate needed details div
    var targetDiv = document.querySelector('.details');

    // Check generated badge
    var profileId = window.location.search.match(/id=(\w+)/)?.[1] || window.location.pathname.split('/').pop();
    var supporterProfiles = JSON.parse(localStorage.getItem('supporterProfiles')) || [];
    if (supporterProfiles.includes(profileId)) {
        addSupporterBadge();
    }

    // Adding the fucking badge
    function addSupporterBadge() {
        // Badge element
        var supporterBadge = document.createElement('div');
        supporterBadge.className = 'awards';
        supporterBadge.innerHTML = '<p class="supporter"><a href="/support"><img src="https://static.spacehey.net/icons/rosette.png" class="icon" alt="Supporter badge" loading="lazy"> Supporter</a></p>';

        // Add the badge to the div
        targetDiv.appendChild(supporterBadge);
    }

    // This is just the key stuff u know ctrl + 0
    function handleKeyboardEvent(event) {
        if (event.ctrlKey && event.key === '0') {
            // Current profile
            var currentProfileId = window.location.search.match(/id=(\w+)/)[1];

            // Check already existing badge
            if (!supporterProfiles.includes(currentProfileId)) {
                // Add profile to supporter locally
                supporterProfiles.push(currentProfileId);
                localStorage.setItem('supporterProfiles', JSON.stringify(supporterProfiles));

                // Never doing this again bois.
                addSupporterBadge();
            }
        }
    }

    // Keyboard event
    window.addEventListener('keydown', handleKeyboardEvent);
})();
