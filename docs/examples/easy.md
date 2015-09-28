# platform-config

## Easy setup

```js
// ./examples/easy/index.js

'use strict';

var path = require('path');
var platformConfig = require('platform-config');

var platforms = platformConfig({
  targets: path.join(__dirname, 'targets')
});

var current = platforms.current();
console.log(current);

``` -->

```bash
$ node examples/easy
{ description: 'BY THE POWER OF DEVELOPMENT' }
```

```bash
$ node examples/easy --NODE_ENV production
{ description: 'BY THE POWER OF PRODUCTION' }
```

```bash
$ export NODE_ENV=production
$ node examples/easy
{ description: 'BY THE POWER OF PRODUCTION' }
```

```bash
$ echo $NODE_ENV
production
$ unset NODE_ENV
$ echo NODE_ENV

```
