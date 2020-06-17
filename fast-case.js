// @ts-check

const CHAR_UPPER_A = 0x41
const CHAR_LOWER_A = 0x61
const CHAR_UPPER_Z = 0x5a
const CHAR_LOWER_Z = 0x7a
const CHAR_0 = 0x30
const CHAR_9 = 0x39
const CHAR_MINUS = 0x2d
const CHAR_SPACE = 0x20
const CHAR_UNDERSCORE = 0x5f

function isUpper(c) {
  return CHAR_UPPER_A <= c && c <= CHAR_UPPER_Z
}

function isLower(c) {
  return CHAR_LOWER_A <= c && c <= CHAR_LOWER_Z
}

function isDigit(c) {
  return CHAR_0 <= c && c <= CHAR_9
}

function toUpper(c) {
  return c - 0x20
}

function toLower(c) {
  return c + 0x20
}

export function camelize(str) {
  const firstChar = str.charCodeAt(0)

  if (isDigit(firstChar) || firstChar === CHAR_MINUS || isNaN(firstChar)) {
    return str
  }

  let changed = isUpper(firstChar)
  const transformed = changed ? [toLower(firstChar)] : [firstChar]

  const length = str.length
  for (let i = 1; i < length; i++) {
    let c = str.charCodeAt(i)

    if (c === CHAR_UNDERSCORE || c === CHAR_SPACE || c === CHAR_MINUS) {
      changed = true
      c = str.charCodeAt(++i)

      if (isNaN(c)) {
        return str
      }

      if (isLower(c)) {
        transformed.push(toUpper(c))
      } else {
        transformed.push(c)
      }
    } else {
      transformed.push(c)
    }
  }

  if (!changed) {
    return str
  }

  return String.fromCharCode.apply(undefined, transformed)
}

export function decamelize(str) {
  const firstChar = str.charCodeAt(0)

  if (!isLower(firstChar) || isNaN(firstChar)) {
    return str
  }

  let changed = false
  const transformed = [firstChar]

  const length = str.length
  for (let i = 1; i < length; i++) {
    const c = str.charCodeAt(i)

    if (isUpper(c)) {
      changed = true
      transformed.push(CHAR_UNDERSCORE)
      transformed.push(toLower(c))
    } else {
      transformed.push(c)
    }
  }

  if (!changed) {
    return str
  }

  return String.fromCharCode.apply(undefined, transformed)
}

export function pascalize(str) {
  const firstChar = str.charCodeAt(0)

  if (isDigit(firstChar) || firstChar === CHAR_MINUS || isNaN(firstChar)) {
    return str
  }

  let changed = isLower(firstChar)
  const transformed = changed ? [toUpper(firstChar)] : [firstChar]

  const len = str.length
  for (let i = 1; i < len; i++) {
    let c = str.charCodeAt(i)

    if (c === CHAR_UNDERSCORE || c === CHAR_SPACE || c === CHAR_MINUS) {
      changed = true
      c = str.charCodeAt(++i)

      if (isNaN(c)) {
        return str
      }

      if (isLower(c)) {
        transformed.push(toUpper(c))
      } else {
        transformed.push(c)
      }
    } else {
      transformed.push(c)
    }
  }

  if (!changed) {
    return str
  }

  return String.fromCharCode.apply(undefined, transformed)
}

export function depascalize(str) {
  const firstChar = str.charCodeAt(0)

  if (!isUpper(firstChar) || isNaN(firstChar)) {
    return str
  }

  const transformed = [toLower(firstChar)]

  const length = str.length
  for (let i = 1; i < length; i++) {
    const c = str.charCodeAt(i)

    if (isUpper(c)) {
      transformed.push(CHAR_UNDERSCORE)
      transformed.push(toLower(c))
    } else {
      transformed.push(c)
    }
  }

  return String.fromCharCode.apply(undefined, transformed)
}

function isPlainObject(value) {
  return value && typeof value === 'object' && !(value instanceof Function) && !(value instanceof Date)
}

function transformKeysInPlace(obj, transform) {
  let transformed = obj

  for (const key in obj) {
    const value = obj[key]
    let nextKey = key

    if (typeof key === 'string') {
      nextKey = transform(key)
    }

    if (nextKey !== key) {
      delete transformed[key]
    }

    if (isPlainObject(value)) {
      transformed[nextKey] = transformKeysInPlace(value, transform)
    } else {
      transformed[nextKey] = value
    }
  }

  return transformed
}

function transformKeys(obj, transform) {
  let transformed

  if (Array.isArray(obj)) {
    transformed = []
  } else {
    if (typeof obj.prototype !== 'undefined') {
      return obj
    }
    transformed = {}
  }

  for (const key in obj) {
    const value = obj[key]
    let nextKey = key

    if (typeof key === 'string') {
      nextKey = transform(key)
    }

    if (isPlainObject(value)) {
      transformed[nextKey] = transformKeys(value, transform)
    } else {
      transformed[nextKey] = value
    }
  }

  return transformed
}

export function camelizeKeys(obj) {
  if (!isPlainObject(obj)) {
    return obj
  }

  return transformKeys(obj, camelize)
}

export function decamelizeKeys(obj) {
  if (!isPlainObject(obj)) {
    return obj
  }

  return transformKeys(obj, decamelize)
}

export function pascalizeKeys(obj) {
  if (!isPlainObject(obj)) {
    return obj
  }

  return transformKeys(obj, pascalize)
}

export function depascalizeKeys(obj) {
  if (!isPlainObject(obj)) {
    return obj
  }

  return transformKeys(obj, depascalize)
}

export function camelizeKeysInPlace(obj) {
  if (!isPlainObject(obj)) {
    return obj
  }

  return transformKeysInPlace(obj, camelize)
}

export function decamelizeKeysInPlace(obj) {
  if (!isPlainObject(obj)) {
    return obj
  }

  return transformKeysInPlace(obj, decamelize)
}

export function pascalizeKeysInPlace(obj) {
  if (!isPlainObject(obj)) {
    return obj
  }

  return transformKeysInPlace(obj, pascalize)
}

export function depascalizeKeysInPlace(obj) {
  if (!isPlainObject(obj)) {
    return obj
  }

  return transformKeysInPlace(obj, depascalize)
}
