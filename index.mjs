// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-sign-mask@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-words@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-from-words@esm/index.mjs";var n=[0,0];function d(d,i){var m,o;return t.assign(d,n,1,0),m=n[0],o=e(i),r(m^=o&=s,n[1])}export{d as default};
//# sourceMappingURL=index.mjs.map
