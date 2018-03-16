# ⚡ fast-case

`fast-case` is a C++ NodeJS library for camelcase and pascalcase. It is designed to be similar to [humps][0] and [xcase][1], however the string manipulation is performed in native C++ for extra speed.

The module is based on an older version of `xcase`, and all credit for the C++ implementation is due there.

---

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

```

## License

MIT license, see `LICENSE`. Copyright 2018 Jacob Gillespie. Code originally from [xcase][1], copyright 2016 Code Charm.

[0]: https://github.com/domchristie/humps
[1]: https://github.com/encharm/xcase
