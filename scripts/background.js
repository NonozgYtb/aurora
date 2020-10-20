"use strict";

chrome.browserAction.onClicked.addListener(function (openTab) {
  chrome.tabs.create({
    url: 'aurora.html'
  });
});
var expDate = new Date(Date.now() + 1000 * 3600 * 24 * 365).toUTCString();
var newHeaders = [{
  name: "Access-Control-Allow-Origin",
  value: "*"
}, {
  name: "Cache-Control",
  value: "public, max-age=31536000"
}, {
  name: "Expires",
  value: expDate
}, {
  name: "Pragma",
  value: "cache"
}];

function handler(details) {
  var headers = details.responseHeaders;
  var didSet = false;

  for (var i in headers) {
    didSet = false;

    if (headers[i].name.toLowerCase() == 'content-type' && headers[i].value.toLowerCase().match(/^image\//)) {
      for (var i in newHeaders) {
        for (var j in headers) {
          if (headers[j].name.toLowerCase() == newHeaders[i].name.toLowerCase()) {
            headers[j].value = newHeaders[i].value;
            var did_set;
            typeof did_set !== 'undefined' ? did_set = true : did_set = false;
            break;
          }
        }

        if (!didSet) {
          headers.push(newHeaders[i]);
        }
      }

      break;
    }
  }

  console.log(headers);
  return {
    responseHeaders: headers
  };
}

;
var requestFilter = {
  urls: ['<all_urls>'],
  types: ['image']
};
var extraInfoSpec = ['blocking', 'responseHeaders'];
chrome.webRequest.onHeadersReceived.addListener(handler, requestFilter, extraInfoSpec);

//# sourceMappingURL=background.js.map
