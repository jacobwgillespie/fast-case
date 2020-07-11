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
xcase#camelize x 9,482,251 ops/sec ±0.53% (188 runs sampled)
fastCase#camelize x 10,558,268 ops/sec ±1.30% (178 runs sampled)
humps#camelize x 1,041,903 ops/sec ±0.53% (186 runs sampled)
Fastest is fastCase#camelize

xcase#decamelize x 8,107,492 ops/sec ±0.63% (184 runs sampled)
fastCase#decamelize x 7,807,255 ops/sec ±0.60% (185 runs sampled)
humps#decamelize x 2,349,395 ops/sec ±0.58% (186 runs sampled)
Fastest is xcase#decamelize

xcase#pascalize x 8,562,395 ops/sec ±1.24% (187 runs sampled)
fastCase#pascalize x 10,272,295 ops/sec ±0.63% (188 runs sampled)
humps#pascalize x 1,086,137 ops/sec ±0.51% (189 runs sampled)
Fastest is fastCase#pascalize

xcase#depascalize x 9,179,699 ops/sec ±0.66% (189 runs sampled)
fastCase#depascalize x 8,568,689 ops/sec ±0.66% (188 runs sampled)
humps#depascalize x 2,522,884 ops/sec ±0.57% (186 runs sampled)
Fastest is xcase#depascalize

xcase#camelizeKeys x 998,862 ops/sec ±0.70% (189 runs sampled)
fastCase#camelizeKeys x 1,005,030 ops/sec ±0.53% (188 runs sampled)
humps#camelizeKeys x 231,759 ops/sec ±0.67% (189 runs sampled)
Fastest is fastCase#camelizeKeys,xcase#camelizeKeys

xcase#camelizeKeys (in place) x 1,149,142 ops/sec ±0.62% (190 runs sampled)
fastCase#camelizeKeysInPlace (in place) x 1,060,932 ops/sec ±0.55% (190 runs sampled)
Fastest is xcase#camelizeKeys (in place)

xcase#decamelizeKeys x 1,095,089 ops/sec ±0.60% (189 runs sampled)
fastCase#decamelizeKeys x 1,105,347 ops/sec ±0.61% (191 runs sampled)
humps#decamelizeKeys x 451,264 ops/sec ±0.47% (190 runs sampled)
Fastest is fastCase#decamelizeKeys

xcase#camelizeKeys (large object) x 1,095 ops/sec ±0.67% (186 runs sampled)
fastCase#camelizeKeys (large object) x 1,139 ops/sec ±0.48% (186 runs sampled)
humps#camelizeKeys (large object) x 263 ops/sec ±0.66% (179 runs sampled)
Fastest is fastCase#camelizeKeys (large object)

xcase#camelizeKeys (in place) (large object) x 884 ops/sec ±1.07% (183 runs sampled)
fastCase#camelizeKeysInPlace (in place) (large object) x 1,271 ops/sec ±0.48% (187 runs sampled)
Fastest is fastCase#camelizeKeysInPlace (in place) (large object)

xcase#pascalizeKeys (large object) x 777 ops/sec ±0.63% (184 runs sampled)
fastCase#pascalizeKeys (large object) x 916 ops/sec ±0.55% (187 runs sampled)
humps#pascalizeKeys (large object) x 309 ops/sec ±0.57% (183 runs sampled)
Fastest is fastCase#pascalizeKeys (large object)

xcase#pascalizeKeys (in place) (large object) x 1,334 ops/sec ±0.55% (188 runs sampled)
fastCase#pascalizeKeysInPlace (in place) (large object) x 1,739 ops/sec ±0.52% (188 runs sampled)
Fastest is fastCase#pascalizeKeysInPlace (in place) (large object)
```

## Credits

This module is based in part on an older C++ based version of `xcase`.

## License

MIT license, see `LICENSE`. Copyright 2018 Jacob Gillespie. Code originally from [xcase][1], copyright 2016 Code Charm.

[0]: https://github.com/domchristie/humps
[1]: https://github.com/encharm/xcase
