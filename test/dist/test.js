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

// MODULES //

var tape = require( 'tape' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isPositiveZero = require( '@stdlib/math-base-assert-is-positive-zero' );
var isNegativeZero = require( '@stdlib/math-base-assert-is-negative-zero' );
var flipsign = require( './../../dist' );


// FIXTURES //

var data = require( './../fixtures/julia/data.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof flipsign, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns a double-precision floating-point number with the magnitude of `x` and the sign of `x*y`', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = data.x;
	y = data.y;
	expected = data.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = flipsign( x[i], y[i] );
		t.equal( actual, expected[i], 'returns '+expected[i] );
	}
	t.end();
});

tape( 'if `x` is `NaN`, the function returns `NaN`', function test( t ) {
	var z;

	z = flipsign( NaN, -1.0 );
	t.equal( isnan( z ), true, 'returns NaN' );

	z = flipsign( NaN, 1.0 );
	t.equal( isnan( z ), true, 'returns NaN' );

	t.end();
});

tape( 'if `y` is `NaN`, the function could (theoretically) return either a positive or negative number', function test( t ) {
	var z;

	z = flipsign( -1.0, NaN );
	t.equal( isnan( z ), false, 'does not return NaN' );

	z = flipsign( 1.0, NaN );
	t.equal( isnan( z ), false, 'does not return NaN' );

	t.end();
});

tape( 'if `x` is `+infinity`, the function returns an infinite number', function test( t ) {
	var z;

	z = flipsign( PINF, -1.0 );
	t.equal( z, NINF, 'returns -infinity' );

	z = flipsign( PINF, 1.0 );
	t.equal( z, PINF, 'returns +infinity' );

	t.end();
});

tape( 'if `y` is `+infinity`, the function returns `x`', function test( t ) {
	var z;

	z = flipsign( -1.0, PINF );
	t.equal( z, -1.0, 'returns -1' );

	z = flipsign( 1.0, PINF );
	t.equal( z, 1.0, 'returns +1' );

	t.end();
});

tape( 'if `x` is `-infinity`, the function returns an infinite number', function test( t ) {
	var z;

	z = flipsign( NINF, -1.0 );
	t.equal( z, PINF, 'returns +infinity' );

	z = flipsign( NINF, 1.0 );
	t.equal( z, NINF, 'returns -infinity' );

	t.end();
});

tape( 'if `y` is `-infinity`, the function returns `-x`', function test( t ) {
	var z;

	z = flipsign( -1.0, NINF );
	t.equal( z, +1.0, 'returns +1' );

	z = flipsign( 1.0, NINF );
	t.equal( z, -1.0, 'returns -1' );

	t.end();
});

tape( 'the function supports using `+-0` to flip a sign', function test( t ) {
	var x;
	var z;

	x = 3.14;

	z = flipsign( x, 0.0 );
	t.equal( z, 3.14, 'returns +3.14' );

	z = flipsign( x, -0.0 );
	t.equal( z, -3.14, 'returns -3.14' );

	t.end();
});

tape( 'the function supports `x` being `+-0`', function test( t ) {
	var z;

	z = flipsign( -0.0, 1.0 );
	t.equal( isNegativeZero( z ), true, 'returns -0' );

	z = flipsign( -0.0, -1.0 );
	t.equal( isPositiveZero( z ), true, 'returns +0' );

	z = flipsign( 0.0, 1.0 );
	t.equal( isPositiveZero( z ), true, 'returns +0' );

	z = flipsign( 0.0, -1.0 );
	t.equal( isNegativeZero( z ), true, 'returns -0' );

	t.end();
});
