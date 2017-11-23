'use strict'

const test = require('tape')
const { encode, decode } = require('../')

function rountrip(t, version) {
  const encoded = encode(version)
  const decoded = decode(encoded)
  t.equal(version, decoded, version)
}

test('\nroundtrip', function(t) {
  rountrip(t, '3.20.1')
  rountrip(t, '223.99.199')
  rountrip(t, '0.20.0')
  rountrip(t, '0.0.0')
  t.end()
})
