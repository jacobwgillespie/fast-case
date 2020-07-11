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

Run `yarn benchmark` to benchmark locally. Informal benchmark results are available [via GitHub Actions](https://github.com/jacobwgillespie/fast-case/actions?query=workflow%3ABenchmark).

```
xcase#camelize x 5,743,288 ops/sec ±0.84% (179 runs sampled)
fastCase#camelize x 6,830,633 ops/sec ±0.79% (182 runs sampled)
humps#camelize x 867,373 ops/sec ±1.01% (180 runs sampled)
Fastest is fastCase#camelize

xcase#decamelize x 5,223,684 ops/sec ±1.37% (181 runs sampled)
fastCase#decamelize x 5,329,052 ops/sec ±0.88% (183 runs sampled)
humps#decamelize x 1,559,349 ops/sec ±0.82% (183 runs sampled)
Fastest is fastCase#decamelize

xcase#pascalize x 5,528,203 ops/sec ±0.86% (179 runs sampled)
fastCase#pascalize x 6,206,861 ops/sec ±0.94% (181 runs sampled)
humps#pascalize x 760,483 ops/sec ±0.78% (181 runs sampled)
Fastest is fastCase#pascalize

xcase#depascalize x 5,083,156 ops/sec ±0.76% (181 runs sampled)
fastCase#depascalize x 5,002,102 ops/sec ±0.93% (182 runs sampled)
humps#depascalize x 1,435,249 ops/sec ±0.71% (184 runs sampled)
Fastest is xcase#depascalize

xcase#camelizeKeys x 553,915 ops/sec ±0.90% (183 runs sampled)
fastCase#camelizeKeys x 586,491 ops/sec ±0.81% (182 runs sampled)
humps#camelizeKeys x 174,884 ops/sec ±0.70% (183 runs sampled)
Fastest is fastCase#camelizeKeys

xcase#camelizeKeys (in place) x 649,486 ops/sec ±0.80% (172 runs sampled)
fastCase#camelizeKeysInPlace (in place) x 639,780 ops/sec ±0.87% (182 runs sampled)
Fastest is xcase#camelizeKeys (in place)

xcase#decamelizeKeys x 592,740 ops/sec ±0.94% (181 runs sampled)
fastCase#decamelizeKeys x 594,536 ops/sec ±0.97% (184 runs sampled)
humps#decamelizeKeys x 283,610 ops/sec ±0.89% (180 runs sampled)
Fastest is fastCase#decamelizeKeys,xcase#decamelizeKeys

xcase#camelizeKeys (large object) x 651 ops/sec ±0.92% (178 runs sampled)
fastCase#camelizeKeys (large object) x 765 ops/sec ±0.99% (175 runs sampled)
humps#camelizeKeys (large object) x 216 ops/sec ±0.94% (173 runs sampled)
Fastest is fastCase#camelizeKeys (large object)

xcase#camelizeKeys (in place) (large object) x 549 ops/sec ±1.44% (172 runs sampled)
fastCase#camelizeKeysInPlace (in place) (large object) x 797 ops/sec ±0.87% (178 runs sampled)
Fastest is fastCase#camelizeKeysInPlace (in place) (large object)

xcase#pascalizeKeys (large object) x 440 ops/sec ±0.77% (180 runs sampled)
fastCase#pascalizeKeys (large object) x 528 ops/sec ±0.78% (179 runs sampled)
humps#pascalizeKeys (large object) x 254 ops/sec ±0.86% (174 runs sampled)
Fastest is fastCase#pascalizeKeys (large object)

xcase#pascalizeKeys (in place) (large object) x 836 ops/sec ±0.93% (178 runs sampled)
fastCase#pascalizeKeysInPlace (in place) (large object) x 1,099 ops/sec ±1.02% (176 runs sampled)
Fastest is fastCase#pascalizeKeysInPlace (in place) (large object)
```

## Credits

This module is based in part on an older C++ based version of `xcase`.

## License

MIT license, see `LICENSE`. Copyright 2018 Jacob Gillespie. Code originally from [xcase][1], copyright 2016 Code Charm.

[0]: https://github.com/domchristie/humps
[1]: https://github.com/encharm/xcase
