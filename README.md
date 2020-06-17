# ⚡ fast-case

[![Build Status](https://github.com/jacobwgillespie/fast-case/workflows/CI/badge.svg)](https://github.com/jacobwgillespie/fast-case/actions)
[![npm](https://badgen.net/npm/dm/fast-case)](https://www.npmjs.com/package/fast-case)
[![npm](https://badgen.net/npm/v/fast-case)](https://www.npmjs.com/package/fast-case)

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

Run `yarn benchmark` to benchmark locally. Informal benchmark results, from my MacBook with Node 14:

```
xcase#camelize x 8,238,848 ops/sec ±0.83% (186 runs sampled)
fastCase#camelize x 9,182,181 ops/sec ±0.74% (186 runs sampled)
humps#camelize x 1,166,779 ops/sec ±0.69% (187 runs sampled)
Fastest is fastCase#camelize

xcase#decamelize x 8,496,873 ops/sec ±0.70% (187 runs sampled)
fastCase#decamelize x 8,868,108 ops/sec ±0.69% (186 runs sampled)
humps#decamelize x 2,533,899 ops/sec ±0.74% (187 runs sampled)
Fastest is fastCase#decamelize

xcase#pascalize x 7,877,402 ops/sec ±0.78% (187 runs sampled)
fastCase#pascalize x 9,419,343 ops/sec ±0.92% (184 runs sampled)
humps#pascalize x 1,050,322 ops/sec ±0.74% (189 runs sampled)
Fastest is fastCase#pascalize

xcase#depascalize x 8,017,069 ops/sec ±0.71% (185 runs sampled)
fastCase#depascalize x 8,139,276 ops/sec ±1.81% (185 runs sampled)
humps#depascalize x 2,174,517 ops/sec ±2.29% (185 runs sampled)
Fastest is fastCase#depascalize

xcase#camelizeKeys x 881,041 ops/sec ±0.87% (188 runs sampled)
fastCase#camelizeKeys x 914,592 ops/sec ±0.93% (183 runs sampled)
humps#camelizeKeys x 223,775 ops/sec ±0.67% (188 runs sampled)
Fastest is fastCase#camelizeKeys

xcase#camelizeKeys (in place) x 1,000,580 ops/sec ±0.84% (185 runs sampled)
fastCase#camelizeKeysInPlace (in place) x 959,963 ops/sec ±0.66% (188 runs sampled)
Fastest is xcase#camelizeKeys (in place)

xcase#decamelizeKeys x 972,189 ops/sec ±0.82% (184 runs sampled)
fastCase#decamelizeKeys x 1,013,269 ops/sec ±0.80% (186 runs sampled)
humps#decamelizeKeys x 418,435 ops/sec ±0.67% (188 runs sampled)
Fastest is fastCase#decamelizeKeys

xcase#camelizeKeys (large object) x 1,038 ops/sec ±0.59% (187 runs sampled)
fastCase#camelizeKeys (large object) x 1,056 ops/sec ±0.65% (187 runs sampled)
humps#camelizeKeys (large object) x 260 ops/sec ±0.66% (182 runs sampled)
Fastest is fastCase#camelizeKeys (large object)

xcase#camelizeKeys (in place) (large object) x 869 ops/sec ±0.93% (175 runs sampled)
fastCase#camelizeKeysInPlace (in place) (large object) x 1,145 ops/sec ±0.77% (187 runs sampled)
Fastest is fastCase#camelizeKeysInPlace (in place) (large object)

xcase#pascalizeKeys (large object) x 723 ops/sec ±0.71% (179 runs sampled)
fastCase#pascalizeKeys (large object) x 705 ops/sec ±2.95% (175 runs sampled)
humps#pascalizeKeys (large object) x 312 ops/sec ±0.65% (183 runs sampled)
Fastest is xcase#pascalizeKeys (large object),fastCase#pascalizeKeys (large object)

xcase#pascalizeKeys (in place) (large object) x 1,302 ops/sec ±0.84% (183 runs sampled)
fastCase#pascalizeKeysInPlace (in place) (large object) x 1,587 ops/sec ±0.73% (186 runs sampled)
Fastest is fastCase#pascalizeKeysInPlace (in place) (large object)
```

## Credits

This module is based in part on an older C++ based version of `xcase`.

## License

MIT license, see `LICENSE`. Copyright 2018 Jacob Gillespie. Code originally from [xcase][1], copyright 2016 Code Charm.

[0]: https://github.com/domchristie/humps
[1]: https://github.com/encharm/xcase
