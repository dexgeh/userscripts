// ==UserScript==
// @name        subreddits
// @namespace   subreddits
// @include     http://www.reddit.com/subreddits/
// @include     http://www.reddit.com/subreddits/
// @include     https://www.reddit.com/subreddits/
// @include     https://www.reddit.com/subreddits
// @version     1
// @grant
// ==/UserScript==

var showNsfw = false
var additionalNsfw = [
    // add here a string list of subreddits considered nsfw even if not tagged nsfw by reddit
]

document.body.innerHTML =
    document.getElementById('mail').outerHTML + "<br>" +
    "<input type=button id=showNsfw value=all><br>" +
    Array.prototype.slice.call(document.querySelectorAll('.subscription-box > .clear > ul > li > a'))
    .map(function(node) {
        var name = node.childNodes[0].nodeValue
        var nsfw = (node.nextSibling && (node.nextSibling.title === 'quarantined' || node.nextSibling.title === 'NSFW')) || additionalNsfw.indexOf(name) !== -1
        return "<a href='/r/" + name + "' " + (nsfw?"class=nsfw":"") + " target=_blank>" + name +
            (nsfw?"<img src=http://www.redditstatic.com/over18_icon.png>" : "") + "</a>"
    }).join(" ") +
    "<style>"+
        "body {min-height: inherit } "+
        "a {font-size: 16px; font-family: \"Helvetica Neue\"; padding-left: 1em} "+
        "body {padding: 5em 5em 5em 5em;} "+
        ".nsfw {"+(showNsfw ? "" : "display:none")+"}"+
    "</style><br>"

document.addEventListener('click', function(event) {
    if (event.target.id === 'showNsfw') {
        showNsfw = ! showNsfw
        document.body.innerHTML += "<style>.nsfw {display:" + (showNsfw?"inline":"none")+"}</style>"
    }
}, true);
