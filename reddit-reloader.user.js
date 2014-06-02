// ==UserScript==
// @name        reddit-reloader
// @namespace   reddit-reloader
// @include     http://www.reddit.com/*
// @version     1
// @grant       none
// ==/UserScript==

if (document.title.match(/Ow!/)) {
    var counter = 5;
    var interval = setInterval(function() {
        document.body.innerHTML = "<h1>"+counter+"</h1>"
        if (counter === 0) {
            clearInterval(interval);
            location.reload();
        } else {
            counter--;
        }
    }, 1000);
}
