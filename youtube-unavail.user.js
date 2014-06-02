// ==UserScript==
// @name        youtube-unavail
// @namespace   youtube-unavail
// @include     http://www.youtube.com/watch*
// @include     https://www.youtube.com/watch*
// @version     1
// ==/UserScript==
var elem = document.getElementById('player-unavailable')

if (!elem.className.match(/( hid )/)) {
    var videoId = location.href.match(/v=([^&]*)/)[1]
    location.href = 'https://www.youtube.com/embed/' + videoId
}