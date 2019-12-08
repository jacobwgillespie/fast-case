# ⚡ fast-case

[![Build Status](https://travis-ci.org/jacobwgillespie/fast-case.svg?branch=master)](https://travis-ci.org/jacobwgillespie/fast-case)
[![npm](https://img.shields.io/npm/dm/fast-case.svg)](https://www.npmjs.com/package/fast-case)
[![npm](https://img.shields.io/npm/v/fast-case.svg)](https://www.npmjs.com/package/fast-case)

`fast-case` is a JavaScript library for camelcase and pascalcase. It is designed to be similar to [humps][0] and [xcase][1], with algorithm optimizations for additional speed.

## Installation

```bash
$ yarn add fast-case
```

## Usage

```javascript
import {
  camelize,
  decamelize,
  pascalize,
  depascalize,
  camelizeKeys,
  camelizeKeysInPlace,
  decamelizeKeys,
  decamelizeKeysInPlace,
  pascalizeKeys,
  pascalizeKeysInPlace,
  depascalizeKeys,
  depascalizeKeysInPlace,
} from 'fast-case'

// 'a_string' -> 'aString'
camelize(string)

// 'aString' -> 'a_string'
decamelize(string)

// 'a_string' -> 'AString'
pascalize(string)

// 'AString' -> 'a_string'
depascalize(string)

// Camelize all object keys (recursive),
// optionally modify the object in-place.
camelizeKeys(obj)
camelizeKeysInPlace(obj)

// De-camelize all object keys (recursive),
// optionally modify the object in-place.
decamelizeKeys(obj)
decamelizeKeysInPlace(obj)

// Pascalize all object keys (recursive),
// optionally modify the object in-place.
pascalizeKeys(obj)
pascalizeKeysInPlace(obj)

// De-pascalize all object keys (recursive),
// optionally modify the object in-place.
depascalizeKeys(obj)
depascalizeKeysInPlace(obj)
```

## Benchmark

Run `yarn benchmark` to benchmark locally. Informal benchmark results, from my MacBook with Node 12:

```
xcase#camelize x 8,827,130 ops/sec ±0.74% (86 runs sampled)
fastCase#camelize x 10,195,974 ops/sec ±0.85% (91 runs sampled)
humps#camelize x 1,186,395 ops/sec ±0.70% (90 runs sampled)
Fastest is fastCase#camelize

xcase#decamelize x 8,720,680 ops/sec ±0.80% (91 runs sampled)
fastCase#decamelize x 8,708,157 ops/sec ±0.83% (94 runs sampled)
humps#decamelize x 2,216,609 ops/sec ±0.57% (95 runs sampled)
Fastest is xcase#decamelize,fastCase#decamelize

xcase#pascalize x 8,863,355 ops/sec ±0.82% (91 runs sampled)
fastCase#pascalize x 10,661,617 ops/sec ±0.58% (93 runs sampled)
humps#pascalize x 1,082,061 ops/sec ±0.61% (94 runs sampled)
Fastest is fastCase#pascalize

xcase#depascalize x 8,640,161 ops/sec ±1.13% (92 runs sampled)
fastCase#depascalize x 8,838,130 ops/sec ±0.77% (94 runs sampled)
humps#depascalize x 2,126,343 ops/sec ±0.57% (94 runs sampled)
Fastest is fastCase#depascalize

xcase#camelizeKeys x 824,558 ops/sec ±0.53% (91 runs sampled)
xcase#camelizeKeys (in place) x 918,981 ops/sec ±0.94% (92 runs sampled)
fastCase#camelizeKeys x 864,050 ops/sec ±0.56% (91 runs sampled)
fastCase#camelizeKeysInPlace (in place) x 935,734 ops/sec ±0.84% (95 runs sampled)
humps#camelizeKeys x 361,255 ops/sec ±0.68% (94 runs sampled)
Fastest is fastCase#camelizeKeysInPlace (in place)

xcase#decamelizeKeys x 880,115 ops/sec ±0.63% (93 runs sampled)
fastCase#decamelizeKeys x 802,808 ops/sec ±0.77% (91 runs sampled)
humps#decamelizeKeys x 346,863 ops/sec ±0.32% (95 runs sampled)
Fastest is xcase#decamelizeKeys

xcase#camelizeKeys (large object) x 895 ops/sec ±0.39% (93 runs sampled)
xcase#camelizeKeys (in place) (large object) x 767 ops/sec ±1.06% (91 runs sampled)
fastCase#camelizeKeys (large object) x 943 ops/sec ±0.44% (94 runs sampled)
fastCase#camelizeKeysInPlace (in place) (large object) x 1,108 ops/sec ±0.55% (92 runs sampled)
humps#camelizeKeys (large object) x 351 ops/sec ±0.45% (88 runs sampled)
Fastest is fastCase#camelizeKeysInPlace (in place) (large object)

xcase#pascalizeKeys (large object) x 640 ops/sec ±0.37% (92 runs sampled)
xcase#pascalizeKeys (in place) (large object) x 1,203 ops/sec ±0.97% (92 runs sampled)
fastCase#pascalizeKeys (large object) x 1,239 ops/sec ±3.91% (84 runs sampled)
fastCase#pascalizeKeysInPlace (in place) (large object) x 1,389 ops/sec ±1.93% (86 runs sampled)
humps#pascalizeKeys (large object) x 320 ops/sec ±0.53% (85 runs sampled)
Fastest is fastCase#pascalizeKeysInPlace (in place) (large object)
```

## Credits

This module is based in part on an older C++ based version of `xcase`.

## License

MIT license, see `LICENSE`. Copyright 2018 Jacob Gillespie. Code originally from [xcase][1], copyright 2016 Code Charm.

[0]: https://github.com/domchristie/humps
[1]: https://github.com/encharm/xcase
