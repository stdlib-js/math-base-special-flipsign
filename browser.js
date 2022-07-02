// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,o=r,e=function(n){return o.call(n)},i=Object.prototype.hasOwnProperty,f=function(n,t){return null!=n&&i.call(n,t)},u="function"==typeof Symbol?Symbol.toStringTag:"",a=f,c=u,y=r,l=e,p=function(n){var t,r,o;if(null==n)return y.call(n);r=n[c],t=a(n,c);try{n[c]=void 0}catch(t){return y.call(n)}return o=y.call(n),t?n[c]=r:delete n[c],o},A=t&&"symbol"==typeof Symbol.toStringTag?p:l,w=A,U="function"==typeof Uint32Array,b="function"==typeof Uint32Array?Uint32Array:null,d=function(n){return U&&n instanceof Uint32Array||"[object Uint32Array]"===w(n)},m=b,s=function(){var n,t;if("function"!=typeof m)return!1;try{t=new m(t=[1,3.14,-3.14,4294967296,4294967297]),n=d(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},v="function"==typeof Uint32Array?Uint32Array:void 0,h=function(){throw new Error("not implemented")},g=s()?v:h,H=A,S="function"==typeof Float64Array,j="function"==typeof Float64Array?Float64Array:null,F=function(n){return S&&n instanceof Float64Array||"[object Float64Array]"===H(n)},O=j,E=function(){var n,t;if("function"!=typeof O)return!1;try{t=new O([1,3.14,-3.14,NaN]),n=F(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n},G="function"==typeof Float64Array?Float64Array:void 0,I=function(){throw new Error("not implemented")},L=E()?G:I,T=A,W="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,N=function(n){return W&&n instanceof Uint8Array||"[object Uint8Array]"===T(n)},P=x,k=function(){var n,t;if("function"!=typeof P)return!1;try{t=new P(t=[1,3.14,-3.14,256,257]),n=N(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},q="function"==typeof Uint8Array?Uint8Array:void 0,z=function(){throw new Error("not implemented")},B=k()?q:z,C=A,D="function"==typeof Uint16Array,J="function"==typeof Uint16Array?Uint16Array:null,K=function(n){return D&&n instanceof Uint16Array||"[object Uint16Array]"===C(n)},M=J,Q=function(){var n,t;if("function"!=typeof M)return!1;try{t=new M(t=[1,3.14,-3.14,65536,65537]),n=K(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},R="function"==typeof Uint16Array?Uint16Array:void 0,V=function(){throw new Error("not implemented")},X={uint16:Q()?R:V,uint8:B};(n=new X.uint16(1))[0]=4660;var Y,Z,$=52===new X.uint8(n.buffer)[0];!0===$?(Y=1,Z=0):(Y=0,Z=1);var _,nn,tn=g,rn={HIGH:Y,LOW:Z},on=new L(1),en=new tn(on.buffer),fn=rn.HIGH,un=rn.LOW,an=function(n,t){return on[0]=t,n[0]=en[fn],n[1]=en[un],n},cn=function(n,t){return 1===arguments.length?an([0,0],n):an(n,t)},yn=cn,ln=g,pn=!0===$?1:0,An=new L(1),wn=new ln(An.buffer),Un=function(n){return An[0]=n,wn[pn]};!0===$?(_=1,nn=0):(_=0,nn=1);var bn=g,dn={HIGH:_,LOW:nn},mn=new L(1),sn=new bn(mn.buffer),vn=dn.HIGH,hn=dn.LOW,gn=function(n,t){return sn[vn]=n,sn[hn]=t,mn[0]},Hn=gn,Sn=[0,0];return function(n,t){var r,o;return yn(Sn,n),r=Sn[0],o=Un(t),Hn(r^=o&=2147483648,Sn[1])}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).flipsign=t();
//# sourceMappingURL=browser.js.map