// ==UserScript==
// @name        Don't track me Google Reloaded
// @namespace   google-disable-tracking
// @include     http://*.google.tld/*
// @include     https://*.google.tld/*
// @version     1
// @grant       none
// ==/UserScript==

"use strict";

document.addEventListener('DOMContentLoaded', function(event) {
  var links = document.querySelectorAll('.r > a');
  for (var index = 0; index < links.length; index++) {
    var link = links[index];
    var safeLink = document.createElement('A');
    safeLink.href = link.href;
    safeLink.appendChild(document.createTextNode(link.childNodes[0].nodeValue));
    link.parentNode.appendChild(safeLink);
    link.parentNode.removeChild(link);
  }
  var pagerLinks = document.querySelectorAll('td > a.fl');
  for (index = 0; index < pagerLinks.length; index++) {
    var link = pagerLinks[index];
    var start = link.href.match(/&start=(.*)&/)[1];
    link.href = location.href.replace(/&start=.*$/, "") + "&start=" + start;
    link.addEventListener('click', function(event) {
      event.stopPropagation();
    }, true);
  }
}, true);
