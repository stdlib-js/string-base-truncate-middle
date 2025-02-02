// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=Math.floor;function r(r){return function(r){return n(r)===r}(r/2)}var t=Math.round;function u(n,u,e){var a,o,i,s,f,l;return o=e.length,u>(i=n.length)?n:(a=u-o)<0?e.slice(0,u):(s=t(a/2),f=i-(f=r((l=a)>0?l-1:l+1)?s-1:s),n.substring(0,s)+e+n.substring(f))}export{u as default};
//# sourceMappingURL=mod.js.map
