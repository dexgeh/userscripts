// ==UserScript==
// @name        liveleak-unsafe
// @namespace   liveleak-unsafe
// @include     http://www.liveleak.com/*
// @version     1
// @grant       none
// ==/UserScript==

var safe_mode = function(link) {
    if (link.indexOf('#') !== -1) {
        link = link.substring(0, link.indexOf('#'))
    }
    if (link.indexOf('safe_mode=off') === -1) {
        if (link.indexOf('?') === -1) {
            link = link + '?safe_mode=off'
        } else {
            link = link + '&safe_mode=off'
        }
    }
    return link
}

if (location.href !== safe_mode(location.href)) {
    location.href = safe_mode(location.href)
} else {
    var links = [].slice.call(document.getElementsByTagName("a"))
    links.forEach(function(link) {
        if (safe_mode(link.href) !== link.href) {
            link.href = safe_mode(link.href)
        }
    })
}