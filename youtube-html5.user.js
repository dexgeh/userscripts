// ==UserScript==
// @name        youtube-html5
// @namespace   youtube-html5
// @include     https://www.youtube.com/*
// @version     1
// @grant       none
// ==/UserScript==

window.ytspf = window.ytspf || {};
Object.defineProperty(window.ytspf,'enabled',{value:false});
ytplayer.config.html5=true;
delete ytplayer.config.args.ad3_module;

var q = document.querySelector.bind(document);

var pause = function() { q('.ytp-button-pause').click(); };
var unpause = function() { q('.ytp-button-play').click(); };

var enlargePlayer = function() {
    var btn = q('.ytp-size-toggle-large');
    //console.log('enlargePlayer = '+(!!btn))
    if (!!btn) {
        btn.click();
    }
};

var openSettingsMenu = function() { q('.ytp-settings-button').click(); };

var removeAnnotations = function() {
    var container = q('.ytp-segmented-control');
    //console.log('container = '+!!container);
    if (container.childNodes.length > 0) {
        var switchbtn = container.childNodes[1];
        //console.log('className = '+switchbtn.className+ ' -> '+switchbtn.className.indexOf('ytp-segmented-control-deselected'));
        if (switchbtn.className.indexOf('ytp-segmented-control-deselected') !== -1) {
            switchbtn.click();
        }
    }
};

var execute = function() {
    pause();
    setTimeout(enlargePlayer, 150);
    setTimeout(openSettingsMenu, 300);
    setTimeout(removeAnnotations, 450);
    setTimeout(unpause, 600);
};

var waitFor = function(condFn, callback, interval) {
    //console.log('waitFor');
    if (condFn()) {
        callback();
    } else {
        setTimeout(waitFor.bind(null, condFn, callback,interval), interval);
    }
};

var isLoaded = function() {
    var existsPause = !!q('.ytp-button-pause');
    var existsSizeToggleLarge = !!q('.ytp-size-toggle-large');
    var existsSizeToggleSmall = !!q('.ytp-size-toggle-small');
    var existsSizeToggle = existsSizeToggleLarge || existsSizeToggleSmall;
    var retval = existsPause && existsSizeToggle;
    //console.log('isLoaded = ' + retval);
    return retval;
};

waitFor(isLoaded, execute, 100);
