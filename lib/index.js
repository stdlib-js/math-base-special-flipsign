/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* Return a double-precision floating-point number with the magnitude of `x` and the sign of `x*y`.
*
* @module @stdlib/math-base-special-flipsign
*
* @example
* var flipsign = require( '@stdlib/math-base-special-flipsign' );
*
* var z = flipsign( -3.0, 10.0 );
* // returns -3.0
*
* z = flipsign( -3.0, -1.0 );
* // returns 3.0
*
* z = flipsign( 1.0, -0.0 );
* // returns -1.0
*
* z = flipsign( -3.0, -0.0 );
* // returns 3.0
*
* z = flipsign( -0.0, 1.0 );
* // returns -0.0
*
* z = flipsign( 0.0, -1.0 );
* // returns -0.0
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
