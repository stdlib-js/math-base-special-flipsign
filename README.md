<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# flipsign

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return a [double-precision floating-point number][ieee754] with the magnitude of `x` and the sign of `x*y`.

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-flipsign
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var flipsign = require( '@stdlib/math-base-special-flipsign' );
```

#### flipsign( x, y )

Returns a [double-precision floating-point number][ieee754] with the magnitude of `x` and the sign of `x*y` (i.e., only return `-x` when `y` is a negative number).

```javascript
var z = flipsign( -3.0, 10.0 );
// returns -3.0

z = flipsign( -3.0, -1.0 );
// returns 3.0

z = flipsign( 1.0, -0.0 );
// returns -1.0

z = flipsign( -3.0, -0.0 );
// returns 3.0

z = flipsign( -0.0, 1.0 );
// returns -0.0

z = flipsign( 0.0, -1.0 );
// returns -0.0
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   According to the [IEEE 754][ieee754] standard, a `NaN` has a biased exponent equal to `2047`, a significand greater than `0`, and a sign bit equal to **either** `1` **or** `0`. In which case, `NaN` may not correspond to just one but many binary representations. Accordingly, care should be taken to ensure that `y` is **not** `NaN`; otherwise, behavior may be indeterminate.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var flipsign = require( '@stdlib/math-base-special-flipsign' );

var x;
var y;
var z;
var i;

// Generate random numbers `x` and `y` and flip the sign of `x` only if `y` is negative...
for ( i = 0; i < 100; i++ ) {
    x = (randu()*100.0) - 50.0;
    y = (randu()*10.0) - 5.0;
    z = flipsign( x, y );
    console.log( 'x: %d, y: %d => %d', x, y, z );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/flipsign.h"
```

#### stdlib_base_flipsign( x, y )

Returns a [double-precision floating-point number][ieee754] with the magnitude of `x` and the sign of `x*y`.

```c
double v = stdlib_base_flipsign( -3.0, 10.0 );
// returns -3.0

double v = stdlib_base_flipsign( -3.0, -1.0 );
// returns 3.0
```

The function accepts the following arguments:

-   **x**: `[in] double` number from which to derive a magnitude.
-   **y**: `[in] double` number from which to derive a sign.

```c
double stdlib_base_flipsign( const double x, const double y );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/flipsign.h"
#include <stdio.h>

int main() {
    double x[] = { 3.0, -3.0, 0.0, 0.0/0.0 };

    double y;
    int i;
    for ( i = 0; i < 4; i++ ) {
        y = stdlib_base_flipsign( x[ i ], -3.0 );
        printf( "flipsign(%lf, %lf) = %lf\n", x[ i ], -3.0, y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/copysign`][@stdlib/math/base/special/copysign]</span><span class="delimiter">: </span><span class="description">return a double-precision floating-point number with the magnitude of x and the sign of y.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-flipsign.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-flipsign

[test-image]: https://github.com/stdlib-js/math-base-special-flipsign/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-flipsign/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-flipsign/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-flipsign?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-flipsign.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-flipsign/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-flipsign/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-flipsign/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-flipsign/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-flipsign/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-flipsign/main/LICENSE

[ieee754]: https://en.wikipedia.org/wiki/IEEE_754-1985

<!-- <related-links> -->

[@stdlib/math/base/special/copysign]: https://github.com/stdlib-js/math-base-special-copysign

<!-- </related-links> -->

</section>

<!-- /.links -->
