let algorithms = require('../build/Release/fast-case')

function shouldProcessValue(value) {
  return (
    value &&
    typeof value == 'object' &&
    !(value instanceof Date) &&
    !(value instanceof Function)
  )
}

function processKeys(obj, fun, opts) {
  let nextObj

  if (obj instanceof Array) {
    nextObj = []
  } else {
    if (typeof obj.prototype !== 'undefined') {
      // return non-plain object unchanged
      return obj
    }

    nextObj = {}
  }

  for (let key in obj) {
    let value = obj[key]
    key = fun(key, opts)

    if (shouldProcessValue(value)) {
      nextObj[key] = processKeys(value, fun, opts)
    } else {
      nextObj[key] = value
    }
  }

  return nextObj
}

function processKeysInPlace(obj, fun, opts) {
  const keys = Object.keys(obj)
  const keyLength = keys.length

  for (let idx = 0; idx < keyLength; ++idx) {
    const key = keys[idx]
    const value = obj[key]
    const newKey = fun(key, opts)

    if (newKey !== key) {
      delete obj[key]
    }

    if (shouldProcessValue(value)) {
      obj[newKey] = processKeysInPlace(value, fun, opts)
    } else {
      obj[newKey] = value
    }
  }

  return obj
}

export const camelize = algorithms.camelize
export const decamelize = algorithms.decamelize
export const pascalize = algorithms.pascalize
export const depascalize = algorithms.depascalize

export function camelizeKeys(obj) {
  return processKeys(obj, algorithms.camelize, {})
}

export function decamelizeKeys(obj) {
  return processKeys(obj, algorithms.decamelize, {})
}

export function pascalizeKeys(obj) {
  return processKeys(obj, algorithms.pascalize, {})
}

export function depascalizeKeys(obj) {
  return processKeys(obj, algorithms.depascalize, {})
}

export function camelizeKeysInPlace(obj) {
  return processKeysInPlace(obj, algorithms.camelize, {inPlace: true})
}

export function decamelizeKeysInPlace(obj) {
  return processKeysInPlace(obj, algorithms.decamelize, {inPlace: true})
}

export function pascalizeKeysInPlace(obj) {
  return processKeysInPlace(obj, algorithms.pascalize, {inPlace: true})
}

export function depascalizeKeysInPlace(obj) {
  return processKeysInPlace(obj, algorithms.depascalize, {inPlace: true})
}
