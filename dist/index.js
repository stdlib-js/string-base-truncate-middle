"use strict";var d=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var g=d(function(l,v){
var c=require('@stdlib/math-base-assert-is-odd/dist'),h=require('@stdlib/math-base-special-round/dist');function f(e,r,t){var i,s,a,n,u;return s=t.length,a=e.length,r>a?e:(i=r-s,i<0?t.slice(0,r):(n=h(i/2),u=c(i)?n-1:n,u=a-u,e.substring(0,n)+t+e.substring(u)))}v.exports=f
});var o=g();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
