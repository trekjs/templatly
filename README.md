# templatly

Use Template strings for everything.

  [![NPM version][npm-img]][npm-url]
  [![Build status][travis-img]][travis-url]
  [![Test coverage][coveralls-img]][coveralls-url]
  [![License][license-img]][license-url]
  [![Dependency status][david-img]][david-url]



## Usage

`config.toml`

```toml
[database]
url = '${env.DATABASE_URL}'
```

```js
import fs from 'fs';
import templatly from 'templatly';

let config = fs.readFileSync('config.toml', 'utf-8');
let context = templatly(config, {
  env: {
    DATABASE_URL: 'user@host'
  }
});

// context
/*
[database]
url = 'user@host'
*/

// ...
```

## License

  [MIT](LICENSE)

[npm-img]: https://img.shields.io/npm/v/trek-templatly.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trek-templatly
[travis-img]: https://img.shields.io/travis/trekjs/templatly.svg?style=flat-square
[travis-url]: https://travis-ci.org/trekjs/templatly
[coveralls-img]: https://img.shields.io/coveralls/trekjs/templatly.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/trekjs/templatly
[license-img]: https://img.shields.io/badge/license-MIT-green.svg?style=flat-square
[license-url]: LICENSE
[david-img]: https://img.shields.io/david/trekjs/templatly.svg?style=flat-square
[david-url]: https://david-dm.org/trekjs/templatly
