/**
 * @example
 * toStringTag([]) // => 'Array'
 * toStringTag({}) // => 'Object'
 * toStringTag(null) // => 'Null'
 * toStringTag() // => 'Undefined'
 */
export const toStringTag = value => Object.prototype.toString.call(value).slice(8, -1)

/**
 * @example
 * isStringTag('Array', []) // => true
 * isStringTag('Object', {}) // => true
 * isStringTag('Null', null) // => true
 * isStringTag('Undefined') // => true
 */
export const isStringTag = (tag, value) => {
  if (typeof tag !== 'string')
    throw TypeError(`Parameter 'tag' must be a string, got: '${tag}'.`)

  return tag === toStringTag(value)
}
