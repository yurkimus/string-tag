/**
 * @param {*} value
 * 
 * @example
 * toStringTag([]) // => 'Array'
 * toStringTag({}) // => 'Object'
 * toStringTag(null) // => 'Null'
 * toStringTag() // => 'Undefined'
 */
export const toStringTag = value => Object.prototype.toString.call(value).slice(8, -1)

/**
 * @param {string} stringTag
 * @param {*} value
 * 
 * @example
 * isStringTag('Array', []) // => true
 * isStringTag('Object', {}) // => true
 * isStringTag('Null', null) // => true
 * isStringTag('Undefined') // => true
 */
export const isStringTag = (stringTag, value) => stringTag === toStringTag(value)
