// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Math.floor;function n(n){return function(n){return e(n)===n}(n/2)}var t=Math.round;return function(e,r,o){var i,u,f,d,s,l;return u=o.length,r>(f=e.length)?e:(i=r-u)<0?o.slice(0,r):(d=t(i/2),s=f-(s=n((l=i)>0?l-1:l+1)?d-1:d),e.substring(0,d)+o+e.substring(s))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).truncateMiddle=n();
//# sourceMappingURL=browser.js.map
