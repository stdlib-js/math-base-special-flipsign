// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-sign-mask@v0.0.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-words@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-from-words@esm/index.mjs";var d=[0,0];function m(m,n){var o,i;return t(d,m),o=d[0],i=e(n),r(o^=i&=s,d[1])}export{m as default};
//# sourceMappingURL=index.mjs.map
