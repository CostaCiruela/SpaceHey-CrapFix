// ==UserScript==
// @name         SpaceHey - Blog comments Image Viewer (WIP)
// @version      1.0
// @description  Show direct image URLS at blog comments as images.
// @author       NRM
// @match        https://blog.spacehey.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const observerConfig = { childList: true, subtree: true };
// This one should process the images
    function processImages(element) {
        const commentText = element.querySelector('td:nth-child(2)');
        const imageLinks = commentText.innerHTML.match(/\bhttps?:\/\/\S+\.(?:png|jpe?g|gif)\b/gi);

        if (imageLinks) {
            imageLinks.forEach(link => {
                const imageTag = `<img src="${link}" style="max-width: 100%; height: auto;">`;
                commentText.innerHTML = commentText.innerHTML.replace(link, imageTag);
            });
        }

        // Convert the fucking button into a normal link
        const reportLink = commentText.querySelector('.report a');
        if (reportLink) {
            reportLink.innerHTML = 'Report Comment';
            reportLink.classList.remove('icon');
        }
    }

    function observerCallback(mutationsList) {
        for (const mutation of mutationsList) {
            if (mutation.type === 'childList') {
                for (const node of mutation.addedNodes) {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        const comment = node.querySelector('.comments-table tr');
                        if (comment) {
                            processImages(comment);
                        }
                    }
                }
            }
        }
    }

    const commentsContainer = document.querySelector('.comments-table');
    const observer = new MutationObserver(observerCallback);
    observer.observe(commentsContainer, observerConfig);
    // Process existing comments in blog
    const existingComments = commentsContainer.querySelectorAll('tr');
    existingComments.forEach(comment => {
        processImages(comment);
    });
})();
