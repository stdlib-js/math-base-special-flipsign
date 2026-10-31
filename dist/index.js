"use strict";var o=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var u=o(function(f,t){
var v=require('@stdlib/constants-float64-high-word-sign-mask/dist'),n=require('@stdlib/number-float64-base-to-words/dist'),q=require('@stdlib/number-float64-base-get-high-word/dist'),g=require('@stdlib/number-float64-base-from-words/dist'),a=[0,0];function W(i,r){var e,s;return n.assign(i,a,1,0),e=a[0],s=q(r),s&=v,e^=s,g(e,a[1])}t.exports=W
});var c=u();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
