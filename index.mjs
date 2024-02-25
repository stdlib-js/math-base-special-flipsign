// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-sign-mask@v0.2.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-words@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-from-words@v0.2.1-esm/index.mjs";var n=[0,0];function d(d,i){var m,o;return t.assign(d,n,1,0),m=n[0],o=e(i),r(m^=o&=s,n[1])}export{d as default};
//# sourceMappingURL=index.mjs.map
