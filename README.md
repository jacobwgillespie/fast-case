# ⚡ fast-case

[![Build Status](https://travis-ci.org/jacobwgillespie/fast-case.svg?branch=master)](https://travis-ci.org/jacobwgillespie/fast-case)
[![npm](https://img.shields.io/npm/dm/fast-case.svg)](https://www.npmjs.com/package/fast-case)
[![npm](https://img.shields.io/npm/v/fast-case.svg)](https://www.npmjs.com/package/fast-case)

`fast-case` is a C++ NodeJS library for camelcase and pascalcase. It is designed to be similar to [humps][0] and [xcase][1], however the string manipulation is performed in native C++ for extra speed.

---

The module was originally based on an older version of `xcase`, and all credit for the C++ implementation is due there.

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
xcase#camelize x 5,908,275 ops/sec ±1.87% (87 runs sampled)
fastCase#camelize x 6,840,838 ops/sec ±1.05% (86 runs sampled)
humps#camelize x 1,069,485 ops/sec ±2.27% (85 runs sampled)
Fastest is fastCase#camelize

xcase#decamelize x 5,752,196 ops/sec ±1.53% (87 runs sampled)
fastCase#decamelize x 6,855,233 ops/sec ±1.20% (89 runs sampled)
humps#decamelize x 1,478,651 ops/sec ±1.06% (92 runs sampled)
Fastest is fastCase#decamelize

xcase#camelizeKeys x 467,379 ops/sec ±1.18% (87 runs sampled)
xcase#camelizeKeys (in place) x 892,510 ops/sec ±1.49% (87 runs sampled)
fastCase#camelizeKeys x 797,915 ops/sec ±1.26% (85 runs sampled)
fastCase#camelizeKeysInPlace (in place) x 930,655 ops/sec ±1.67% (85 runs sampled)
humps#camelizeKeys x 223,023 ops/sec ±1.12% (86 runs sampled)
Fastest is fastCase#camelizeKeysInPlace (in place)

xcase#decamelizeKeys x 466,267 ops/sec ±1.63% (88 runs sampled)
fastCase#decamelizeKeys x 273,557 ops/sec ±2.24% (86 runs sampled)
humps#decamelizeKeys x 223,139 ops/sec ±2.71% (83 runs sampled)
Fastest is xcase#decamelizeKeys

xcase#camelizeKeys (large object) x 537 ops/sec ±2.52% (82 runs sampled)
xcase#camelizeKeys (in place) (large object) x 481 ops/sec ±2.16% (81 runs sampled)
fastCase#camelizeKeys (large object) x 501 ops/sec ±2.11% (81 runs sampled)
fastCase#camelizeKeysInPlace (in place) (large object) x 996 ops/sec ±1.35% (82 runs sampled)
humps#camelizeKeys (large object) x 218 ops/sec ±1.48% (78 runs sampled)
Fastest is fastCase#camelizeKeysInPlace (in place) (large object)

xcase#pascalizeKeys (large object) x 316 ops/sec ±1.11% (84 runs sampled)
xcase#pascalizeKeys (in place) (large object) x 923 ops/sec ±2.66% (85 runs sampled)
fastCase#pascalizeKeys (large object) x 858 ops/sec ±1.92% (87 runs sampled)
fastCase#pascalizeKeysInPlace (in place) (large object) x 915 ops/sec ±1.42% (83 runs sampled)
humps#pascalizeKeys (large object) x 208 ops/sec ±1.00% (81 runs sampled)
Fastest is fastCase#pascalizeKeysInPlace (in place) (large object)
```

## License

MIT license, see `LICENSE`. Copyright 2018 Jacob Gillespie. Code originally from [xcase][1], copyright 2016 Code Charm.

[0]: https://github.com/domchristie/humps
[1]: https://github.com/encharm/xcase
