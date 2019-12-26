'use strict';

(function() {
  chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(tab.id, {
      code: '(function(d){if(self!=top||d.getElementById(\'toolbar\')&&d.getElementById(\'toolbar\').getAttribute(\'data-resizer\'))return false;d.write(\'<!DOCTYPE HTML><html style="opacity:0;"><head><meta charset="utf-8"/><link rel="stylesheet" href="' + chrome.runtime.getURL('css/resizer.min.css') + '"><script src="' + chrome.runtime.getURL('js/jquery-2.1.0.min.js') + '"></script></head><body><a data-viewport="320x568" data-icon="mobile" data-version="5">iPhone 5/SE</a><a data-viewport="375x667" data-icon="mobile" data-version="8">iPhone 6/7/8</a><a data-viewport="414x736" data-icon="mobile" data-version="8+">iPhone 6/7/8 Plus</a><a data-viewport="375x812" data-icon="mobile" data-version="X">iPhone X</a><a data-viewport="600x800" data-icon="small-tablet">Small Tablet</a><a data-viewport="768x1024" data-icon="tablet">iPad</a><a data-viewport="1024x1366" data-icon="tablet" data-version="Pro">iPad Pro</a><a data-viewport="1920x1080" data-icon="tv">HDTV 1080p</a><script src="' + chrome.runtime.getURL('js/resizer.min.js') + '"></script></body></html>\')})(document)'
    });
  });
})();
