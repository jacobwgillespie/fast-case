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

Run `yarn benchmark` to benchmark locally. Informal benchmark results, from my MacBook:

```
xcase#camelize x 5,911,187 ops/sec ±5.42% (76 runs sampled)
fastCase#camelize x 7,555,230 ops/sec ±2.79% (79 runs sampled)
humps#camelize x 903,206 ops/sec ±2.09% (82 runs sampled)
Fastest is fastCase#camelize

xcase#decamelize x 6,522,038 ops/sec ±2.99% (79 runs sampled)
fastCase#decamelize x 7,020,373 ops/sec ±1.69% (78 runs sampled)
humps#decamelize x 1,647,107 ops/sec ±2.75% (77 runs sampled)
Fastest is fastCase#decamelize

xcase#pascalize x 6,715,499 ops/sec ±1.78% (82 runs sampled)
fastCase#pascalize x 8,204,444 ops/sec ±1.98% (82 runs sampled)
humps#pascalize x 793,728 ops/sec ±2.06% (79 runs sampled)
Fastest is fastCase#pascalize

xcase#depascalize x 6,989,851 ops/sec ±1.85% (79 runs sampled)
fastCase#depascalize x 7,138,850 ops/sec ±1.47% (77 runs sampled)
humps#depascalize x 1,502,335 ops/sec ±2.46% (81 runs sampled)
Fastest is fastCase#depascalize

xcase#camelizeKeys x 608,665 ops/sec ±1.51% (76 runs sampled)
xcase#camelizeKeys (in place) x 658,691 ops/sec ±2.33% (76 runs sampled)
fastCase#camelizeKeys x 618,604 ops/sec ±1.72% (78 runs sampled)
fastCase#camelizeKeysInPlace (in place) x 639,410 ops/sec ±2.45% (74 runs sampled)
humps#camelizeKeys x 237,910 ops/sec ±2.28% (77 runs sampled)
Fastest is xcase#camelizeKeys (in place)

xcase#decamelizeKeys x 614,568 ops/sec ±3.27% (79 runs sampled)
fastCase#decamelizeKeys x 554,890 ops/sec ±2.23% (80 runs sampled)
humps#decamelizeKeys x 220,343 ops/sec ±2.01% (76 runs sampled)
Fastest is xcase#decamelizeKeys

xcase#camelizeKeys (large object) x 633 ops/sec ±1.90% (77 runs sampled)
xcase#camelizeKeys (in place) (large object) x 520 ops/sec ±4.37% (74 runs sampled)
fastCase#camelizeKeys (large object) x 654 ops/sec ±1.64% (77 runs sampled)
fastCase#camelizeKeysInPlace (in place) (large object) x 781 ops/sec ±1.40% (76 runs sampled)
humps#camelizeKeys (large object) x 256 ops/sec ±1.98% (74 runs sampled)
Fastest is fastCase#camelizeKeysInPlace (in place) (large object)

xcase#pascalizeKeys (large object) x 403 ops/sec ±3.47% (76 runs sampled)
xcase#pascalizeKeys (in place) (large object) x 815 ops/sec ±1.95% (83 runs sampled)
fastCase#pascalizeKeys (large object) x 1,002 ops/sec ±2.58% (81 runs sampled)
fastCase#pascalizeKeysInPlace (in place) (large object) x 1,105 ops/sec ±1.64% (82 runs sampled)
humps#pascalizeKeys (large object) x 234 ops/sec ±1.53% (77 runs sampled)
Fastest is fastCase#pascalizeKeysInPlace (in place) (large object)
```

## Credits

This module is based in part on an older C++ based version of `xcase`.

## License

MIT license, see `LICENSE`. Copyright 2018 Jacob Gillespie. Code originally from [xcase][1], copyright 2016 Code Charm.

[0]: https://github.com/domchristie/humps
[1]: https://github.com/encharm/xcase
