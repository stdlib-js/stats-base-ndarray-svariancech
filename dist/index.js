"use strict";var u=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var v=u(function(h,t){
var s=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),c=require('@stdlib/ndarray-base-offset/dist'),o=require('@stdlib/ndarray-base-data-buffer/dist'),d=require('@stdlib/ndarray-base-ndarraylike2scalar/dist'),m=require('@stdlib/stats-strided-svariancech/dist').ndarray;function f(i){var r,e;return e=i[0],r=d(i[1]),m(s(e,0),r,o(e),q(e,0),c(e))}t.exports=f
});var l=require("path").join,g=require('@stdlib/utils-try-require/dist'),j=require('@stdlib/assert-is-error/dist'),p=v(),a,n=g(l(__dirname,"./native.js"));j(n)?a=p:a=n;module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
