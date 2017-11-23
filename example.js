'use strict'

const { encode, decode } = require('./')

const encoded = encode('5.11.2')
const decoded = decode(encoded)

console.log({ encoded, decoded })
// => { encoded: '1Gi2', decoded: '5.11.2' }
