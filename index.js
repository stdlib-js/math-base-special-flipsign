// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t,r="function"==typeof Object.defineProperty?Object.defineProperty:null,n=Object.defineProperty,e=Object.prototype,o=e.toString,i=e.__defineGetter__,a=e.__defineSetter__,f=e.__lookupGetter__,u=e.__lookupSetter__;t=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,n){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((l="value"in n)&&(f.call(t,r)||u.call(t,r)?(c=t.__proto__,t.__proto__=e,delete t[r],t[r]=n.value,t.__proto__=c):t[r]=n.value),y="get"in n,p="set"in n,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(t,r,n.get),p&&a&&a.call(t,r,n.set),t};var c,l=t,y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),p=Object.prototype.toString,b=Object.prototype.hasOwnProperty,d="function"==typeof Symbol?Symbol.toStringTag:"";c=y&&"symbol"==typeof Symbol.toStringTag?function(t){var r,n,e,o,i;if(null==t)return p.call(t);n=t[d],i=d,r=null!=(o=t)&&b.call(o,i);try{t[d]=void 0}catch(r){return p.call(t)}return e=p.call(t),r?t[d]=n:delete t[d],e}:function(t){return p.call(t)};var v,s=c,A="function"==typeof Uint32Array,w="function"==typeof Uint32Array?Uint32Array:null,_="function"==typeof Uint32Array?Uint32Array:void 0;v=function(){var t,r,n;if("function"!=typeof w)return!1;try{r=new w(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(A&&n instanceof Uint32Array||"[object Uint32Array]"===s(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?_:function(){throw new Error("not implemented")};var m,U=v,g="function"==typeof Float64Array,h="function"==typeof Float64Array?Float64Array:null,j="function"==typeof Float64Array?Float64Array:void 0;m=function(){var t,r,n;if("function"!=typeof h)return!1;try{r=new h([1,3.14,-3.14,NaN]),n=r,t=(g&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?j:function(){throw new Error("not implemented")};var O,S=m,F="function"==typeof Uint8Array,H="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;O=function(){var t,r,n;if("function"!=typeof H)return!1;try{r=new H(r=[1,3.14,-3.14,256,257]),n=r,t=(F&&n instanceof Uint8Array||"[object Uint8Array]"===s(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?E:function(){throw new Error("not implemented")};var G,T=O,P="function"==typeof Uint16Array,I="function"==typeof Uint16Array?Uint16Array:null,L="function"==typeof Uint16Array?Uint16Array:void 0;G=function(){var t,r,n;if("function"!=typeof I)return!1;try{r=new I(r=[1,3.14,-3.14,65536,65537]),n=r,t=(P&&n instanceof Uint16Array||"[object Uint16Array]"===s(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?L:function(){throw new Error("not implemented")};var W,x={uint16:G,uint8:T};(W=new x.uint16(1))[0]=4660;var k,N,V=52===new x.uint8(W.buffer)[0];!0===V?(k=1,N=0):(k=0,N=1);var C={HIGH:k,LOW:N},q=new S(1),z=new U(q.buffer),B=C.HIGH,D=C.LOW;function J(t,r,n,e){return q[0]=t,r[e]=z[B],r[e+n]=z[D],r}function K(t){return J(t,[0,0],1,0)}l(K,"assign",{configurable:!1,enumerable:!1,writable:!1,value:J});var M,Q,R=!0===V?1:0,X=new S(1),Y=new U(X.buffer);!0===V?(M=1,Q=0):(M=0,Q=1);var Z={HIGH:M,LOW:Q},$=new S(1),tt=new U($.buffer),rt=Z.HIGH,nt=Z.LOW,et=[0,0];return function(t,r){var n,e,o,i;return K.assign(t,et,1,0),n=et[0],e=function(t){return X[0]=t,Y[R]}(r),o=n^=e&=2147483648,i=et[1],tt[rt]=o,tt[nt]=i,$[0]}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).flipsign=r();
//# sourceMappingURL=index.js.map
