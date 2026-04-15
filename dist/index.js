"use strict";var d=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var g=d(function(l,v){
var c=require('@stdlib/math-base-assert-is-odd/dist'),h=require('@stdlib/math-base-special-round/dist');function f(e,r,u){var t,s,a,i,n;return s=u.length,a=e.length,r>a?e:(t=r-s,t<0?u.slice(0,r):(i=h(t/2),n=c(t)?i-1:i,n=a-n,e.substring(0,i)+u+e.substring(n)))}v.exports=f
});var o=g();module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
