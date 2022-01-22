const CHAR_UPPER_A = 0x41
const CHAR_LOWER_A = 0x61
const CHAR_UPPER_Z = 0x5a
const CHAR_LOWER_Z = 0x7a
const CHAR_0 = 0x30
const CHAR_9 = 0x39
const CHAR_MINUS = 0x2d
const CHAR_SPACE = 0x20
const CHAR_UNDERSCORE = 0x5f

type ObjectOrArray = Record<string, unknown> | Array<unknown>

function isUpper(c: number) {
  return CHAR_UPPER_A <= c && c <= CHAR_UPPER_Z
}

function isLower(c: number) {
  return CHAR_LOWER_A <= c && c <= CHAR_LOWER_Z
}

function isDigit(c: number) {
  return CHAR_0 <= c && c <= CHAR_9
}

function toUpper(c: number) {
  return c - 0x20
}

function toLower(c: number) {
  return c + 0x20
}

export function camelize(str: string) {
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

export function decamelize(str: string, sep?: string) {
  const firstChar = str.charCodeAt(0)

  if (!isLower(firstChar) || isNaN(firstChar)) {
    return str
  }

  let changed = false
  const transformed = [firstChar]

  let separator = CHAR_UNDERSCORE

  if (sep && sep.charCodeAt(0)) {
    separator = sep.charCodeAt(0)
  }

  const length = str.length
  for (let i = 1; i < length; i++) {
    const c = str.charCodeAt(i)

    if (isUpper(c)) {
      changed = true
      transformed.push(separator)
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

export function pascalize(str: string) {
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

export function depascalize(str: string, sep?: string) {
  const firstChar = str.charCodeAt(0)

  if (!isUpper(firstChar) || isNaN(firstChar)) {
    return str
  }

  const transformed = [toLower(firstChar)]

  let separator = CHAR_UNDERSCORE

  if (sep && sep.charCodeAt(0)) {
    separator = sep.charCodeAt(0)
  }

  const length = str.length
  for (let i = 1; i < length; i++) {
    const c = str.charCodeAt(i)

    if (isUpper(c)) {
      transformed.push(separator)
      transformed.push(toLower(c))
    } else {
      transformed.push(c)
    }
  }

  return String.fromCharCode.apply(undefined, transformed)
}

function isObjectOrArray(value: unknown): value is ObjectOrArray {
  return Boolean(value) && typeof value === 'object' && !(value instanceof Function) && !(value instanceof Date)
}

function transformArray(array: Array<unknown>, transform: (key: string, sep?: string) => string, sep?: string) {
  const length = array.length
  const transformed = new Array(length)
  let idx = 0
  for (const item of array) {
    transformed[idx++] = isObjectOrArray(item) ? transformKeys(item, transform, sep) : item
  }
  return transformed
}

function transformKeys(
  obj: ObjectOrArray | Array<unknown>,
  transform: (key: string, sep?: string) => string,
  sep?: string,
) {
  if (Array.isArray(obj)) {
    return transformArray(obj, transform, sep)
  }

  if (typeof obj.prototype !== 'undefined') {
    return obj
  }

  const transformed: Record<string, unknown> = {}
  for (const key in obj) {
    const value = obj[key]
    const nextKey = transform(key, sep)
    transformed[nextKey] = isObjectOrArray(value) ? transformKeys(value, transform, sep) : value
  }
  return transformed
}

function transformArrayInPlace(array: Array<unknown>, transform: (key: string, sep?: string) => string, sep?: string) {
  let idx = 0
  for (const item of array) {
    array[idx++] = isObjectOrArray(item) ? transformKeysInPlace(item, transform, sep) : item
  }
  return array
}

function transformKeysInPlace(obj: ObjectOrArray, transform: (key: string, sep?: string) => string, sep?: string) {
  if (Array.isArray(obj)) {
    return transformArrayInPlace(obj, transform, sep)
  }

  for (const key in obj) {
    const value = obj[key]
    const nextKey = transform(key, sep)

    if (nextKey !== key) {
      delete obj[key]
    }

    obj[nextKey] = isObjectOrArray(value) ? transformKeysInPlace(value, transform, sep) : value
  }

  return obj
}

export function camelizeKeys(obj: ObjectOrArray) {
  if (!isObjectOrArray(obj)) {
    return obj
  }

  return transformKeys(obj, camelize)
}

export function decamelizeKeys(obj: ObjectOrArray, sep?: string) {
  if (!isObjectOrArray(obj)) {
    return obj
  }

  return transformKeys(obj, decamelize, sep)
}

export function pascalizeKeys(obj: ObjectOrArray) {
  if (!isObjectOrArray(obj)) {
    return obj
  }

  return transformKeys(obj, pascalize)
}

export function depascalizeKeys(obj: ObjectOrArray, sep?: string) {
  if (!isObjectOrArray(obj)) {
    return obj
  }

  return transformKeys(obj, depascalize, sep)
}

export function camelizeKeysInPlace(obj: ObjectOrArray) {
  if (!isObjectOrArray(obj)) {
    return obj
  }

  return transformKeysInPlace(obj, camelize)
}

export function decamelizeKeysInPlace(obj: ObjectOrArray, sep?: string) {
  if (!isObjectOrArray(obj)) {
    return obj
  }

  return transformKeysInPlace(obj, decamelize, sep)
}

export function pascalizeKeysInPlace(obj: ObjectOrArray) {
  if (!isObjectOrArray(obj)) {
    return obj
  }

  return transformKeysInPlace(obj, pascalize)
}

export function depascalizeKeysInPlace(obj: ObjectOrArray, sep?: string) {
  if (!isObjectOrArray(obj)) {
    return obj
  }

  return transformKeysInPlace(obj, depascalize, sep)
}
