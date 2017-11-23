'use strict'

const assert = require('assert')
const { encode4, decode4 } = require('6bit-encoder')
const { isolate } = require('kodieren')

/*
 * |  major | minor | patch | __total__
 * |  8bits | 8bits | 8 bits|  24bits (4 words)
 */

/**
 * The amount of 6bit words into which a version is encoded (4 words == 24 bit).
 *
 * @constant {Number} words
 */
const words = 4

const ERROR_MSG = 'Please supply a version string of format x.y.z'

/**
 * Encodes a version of the format `x.y.z` representing `major.minor.patch`
 *
 * @name encode
 *
 * @param {String} s the version string, i.e. `1.3.2`
 * @returns {String} the 6bit encoded version into 4 chars
 */
function encode(s) {
  const [ major, minor, patch ] = s.split('.')
  assert(major != null, ERROR_MSG + ' missing major (x)')
  assert(minor != null, ERROR_MSG + ' missing minor (y)')
  assert(patch != null, ERROR_MSG + ' missing patch (z)')

  var bits = 0
  bits |= (parseInt(major) << 16)
  bits |= (parseInt(minor) <<  8)
  bits |= (parseInt(patch))

  // now we have 24 bits which we'll encode into 4 words
  return encode4(bits)
}

/**
 * Decodes a version encoded via @see `encode`
 *
 * @name decode
 *
 * @param {String} chars 4 chars representing the encoded version
 * @returns {String} the version string, i.e. `1.2.3`
 */
function decode(chars) {
  assert.equal(chars.length, words, 'Please supply ' + words + ' chars to decode')

  const bits = decode4(chars)
  const major = isolate(bits, 16, 8)
  const minor = isolate(bits, 8, 8)
  const patch = isolate(bits, 0, 8)

  return major + '.' + minor + '.' + patch
}

module.exports = { encode, decode, words }
