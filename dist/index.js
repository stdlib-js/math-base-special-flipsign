"use strict";var o=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var u=o(function(f,t){
var v=require('@stdlib/constants-float64-high-word-sign-mask/dist'),n=require('@stdlib/number-float64-base-to-words/dist'),q=require('@stdlib/number-float64-base-get-high-word/dist'),g=require('@stdlib/number-float64-base-from-words/dist'),a=[0,0];function W(e,r){var i,s;return n.assign(e,a,1,0),i=a[0],s=q(r),s&=v,i^=s,g(i,a[1])}t.exports=W
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
