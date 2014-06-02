// ==UserScript==
// @name        HN-link-in-new-tab
// @namespace   HN-link-in-new-tab
// @include     https://news.ycombinator.com/
// @version     1
// ==/UserScript==

var links = document.getElementsByTagName('a')
var i;
for (i = 0; i < links.length; i++) {
  links[i].target = '_blank'
}
