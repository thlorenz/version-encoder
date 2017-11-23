# version-encoder [![build status](https://secure.travis-ci.org/thlorenz/version-encoder.svg?branch=master)](http://travis-ci.org/thlorenz/version-encoder)

Encode a x.y.z type version number up to v255.255.255.

```js
const { encode, decode } = require('version-encoder')

const encoded = encode('5.11.2')
const decoded = decode(encoded)

console.log({ encoded, decoded })
// => { encoded: '1Gi2', decoded: '5.11.2' }
```

## Installation

    npm install version-encoder

## [API](https://thlorenz.github.io/version-encoder)


## License

MIT
