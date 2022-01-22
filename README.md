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

// Optional custom separator
// 'aString' -> 'a-string'
decamelize(string, '-')

// 'a_string' -> 'AString'
pascalize(string)

// 'AString' -> 'a_string'
depascalize(string)

// Optional custom separator
// 'AString' -> 'a-string'
depascalize(string, '-')

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

// Optional custom separator for decamelizeKeys,
// depascalizeKeys, and in-place variants.
decamelizeKeys(obj, '-')
decamelizeKeysInPlace(obj, '-')
depascalizeKeys(obj, '-')
depascalizeKeysInPlace(obj, '-')
```

## Benchmark

Run `yarn benchmark` to benchmark locally. Informal benchmark results are available [via GitHub Actions](https://github.com/jacobwgillespie/fast-case/actions?query=workflow%3ABenchmark).

```
xcase#camelize x 6,600,243 ops/sec ±0.72% (191 runs sampled)
fastCase#camelize x 7,716,825 ops/sec ±0.78% (190 runs sampled)
humps#camelize x 1,150,491 ops/sec ±0.54% (191 runs sampled)
Fastest is fastCase#camelize

xcase#decamelize x 6,095,752 ops/sec ±0.63% (192 runs sampled)
fastCase#decamelize x 6,251,767 ops/sec ±0.73% (192 runs sampled)
humps#decamelize x 2,087,936 ops/sec ±0.94% (189 runs sampled)
Fastest is fastCase#decamelize

xcase#pascalize x 6,623,570 ops/sec ±0.77% (188 runs sampled)
fastCase#pascalize x 7,438,234 ops/sec ±0.74% (188 runs sampled)
humps#pascalize x 1,060,071 ops/sec ±0.66% (192 runs sampled)
Fastest is fastCase#pascalize

xcase#depascalize x 6,207,477 ops/sec ±0.57% (191 runs sampled)
fastCase#depascalize x 6,130,597 ops/sec ±0.73% (186 runs sampled)
humps#depascalize x 1,909,126 ops/sec ±0.93% (190 runs sampled)
Fastest is xcase#depascalize

xcase#camelizeKeys x 749,311 ops/sec ±0.68% (190 runs sampled)
fastCase#camelizeKeys x 794,874 ops/sec ±0.72% (191 runs sampled)
humps#camelizeKeys x 224,859 ops/sec ±0.52% (191 runs sampled)
Fastest is fastCase#camelizeKeys

xcase#camelizeKeys (in place) x 835,931 ops/sec ±0.75% (190 runs sampled)
fastCase#camelizeKeysInPlace (in place) x 844,663 ops/sec ±0.88% (191 runs sampled)
Fastest is fastCase#camelizeKeysInPlace (in place)

xcase#decamelizeKeys x 812,360 ops/sec ±0.86% (191 runs sampled)
fastCase#decamelizeKeys x 786,222 ops/sec ±0.69% (189 runs sampled)
humps#decamelizeKeys x 378,324 ops/sec ±0.70% (192 runs sampled)
Fastest is xcase#decamelizeKeys

xcase#camelizeKeys (large object) x 822 ops/sec ±0.77% (187 runs sampled)
fastCase#camelizeKeys (large object) x 962 ops/sec ±1.16% (185 runs sampled)
humps#camelizeKeys (large object) x 282 ops/sec ±0.79% (185 runs sampled)
Fastest is fastCase#camelizeKeys (large object)

xcase#camelizeKeys (in place) (large object) x 688 ops/sec ±1.28% (181 runs sampled)
fastCase#camelizeKeysInPlace (in place) (large object) x 1,011 ops/sec ±0.59% (189 runs sampled)
Fastest is fastCase#camelizeKeysInPlace (in place) (large object)

xcase#pascalizeKeys (large object) x 589 ops/sec ±0.60% (183 runs sampled)
fastCase#pascalizeKeys (large object) x 680 ops/sec ±0.97% (186 runs sampled)
humps#pascalizeKeys (large object) x 338 ops/sec ±0.72% (181 runs sampled)
Fastest is fastCase#pascalizeKeys (large object)

xcase#pascalizeKeys (in place) (large object) x 1,007 ops/sec ±0.79% (183 runs sampled)
fastCase#pascalizeKeysInPlace (in place) (large object) x 1,356 ops/sec ±0.75% (188 runs sampled)
Fastest is fastCase#pascalizeKeysInPlace (in place) (large object)
```

## Credits

This module is based in part on an older C++ based version of `xcase`.

## License

MIT license, see `LICENSE`. Copyright 2018 Jacob Gillespie. Code originally from [xcase][1], copyright 2016 Code Charm.

[0]: https://github.com/domchristie/humps
[1]: https://github.com/encharm/xcase
