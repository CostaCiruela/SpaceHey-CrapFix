// ==UserScript==
// @name         SpaceHey - Remove custom CSS
// @version      1.0
// @description  Hide most of the CSS in users profile.
// @author       NRM
// @match https://spacehey.com/profile?id=*
// @match https://spacehey.com/*
// ==/UserScript==

(function() {
    'use strict';

    // Hide <style> and .element shit
    function disableCustomStyles() {
        var aboutMeSection = document.querySelector('.inner .section');
        if (aboutMeSection) {
            aboutMeSection.style.cssText = `
                all: unset !important;
                display: none !important;
            `;

            var additionalStyles = document.querySelectorAll('.inner .section [style], .inner .section [class^="."]');
            additionalStyles.forEach(function(element) {
                element.style.cssText = `
                    all: unset !important;
                    display: none !important;
                `;
            });

            var styleElements = document.querySelectorAll('.inner .section style');
            styleElements.forEach(function(element) {
                element.remove();
            });
        }
    }

    // Delay the script 2 seconds
    setTimeout(disableCustomStyles, 2000);
})();
