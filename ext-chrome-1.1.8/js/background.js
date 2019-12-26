'use strict';

(function(){
	chrome.browserAction.onClicked.addListener(function(tab){
		chrome.tabs.executeScript(tab.id, {code:'(function(d){if(self!=top||d.getElementById(\'toolbar\')&&d.getElementById(\'toolbar\').getAttribute(\'data-resizer\'))return false;d.write(\'<!DOCTYPE HTML><html style="opacity:0;"><head><meta charset="utf-8"/><link rel="stylesheet" href="'+chrome.extension.getURL('css/resizer.min.css')+'"><script src="'+chrome.extension.getURL('js/jquery-2.1.0.min.js')+'"></script></head><body><a data-viewport="240x240" data-icon="handy">Mobile</a><a data-viewport="320x480" data-icon="mobile">Mobile (e.g. Apple iPhone)</a><a data-viewport="320x568" data-icon="mobile" data-version="5">Apple iPhone 5</a><a data-viewport="600x800" data-icon="small-tablet">Small Tablet</a><a data-viewport="768x1024" data-icon="tablet">Tablet (e.g. Apple iPad 2-3rd, mini)</a><a data-viewport="1024x768" data-icon="display" data-version="17â€³">17â€³ Display</a><a data-viewport="1280x800" data-icon="notebook">Widescreen</a><a data-viewport="2560x1600" data-icon="display" data-version="30â€³">30â€³ Apple Cinema Display</a><script src="'+chrome.extension.getURL('js/resizer.min.js')+'"></script></body></html>\')})(document)'});
	});
})();
