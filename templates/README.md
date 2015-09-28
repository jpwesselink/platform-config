# platform-config

## Description

Fetch and validate platform configurations more easily

## Installation

```zsh
$ npm install --save platform-config
```

*If you'd like to try these examples, please run `gulp prepare-examples` first*

<%= examples.easy.index %> -->

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

You can test and unset `NODE_ENV` like so:

```bash
$ echo $NODE_ENV
production
$ unset NODE_ENV
$ echo NODE_ENV

```

## Running tests

```zsh
$ gulp test
```

Test reports are written to `./reports`.

## Contributing

-   Do pull requests.
-   Make sure there's tests and meaningful coverage.
-   Respect `./eslintrc`.
-   Issues should go in issues.
