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

<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### words

The amount of 6bit words into which a version is encoded (4 words == 24 bit).

Type: [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### encode

Encodes a version of the format `x.y.z` representing `major.minor.patch`

**Parameters**

-   `s` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the version string, i.e. `1.3.2`

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the 6bit encoded version into 4 chars

### decode

Decodes a version encoded via @see `encode`

**Parameters**

-   `chars` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 4 chars representing the encoded version

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** the version string, i.e. `1.2.3`

## License

MIT
