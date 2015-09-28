# platform-config

## Description

Fetch and validate platform configurations more easily by first trying to
retrieve `NODE_ENV` from command line, then from `process.env` and if all else
fails it will be set to `development`.

## Installation

```zsh
$ npm install --save platform-config
```

*If you'd like to try these examples, please run `gulp prepare-examples` first*

Consider the following setup:

<%= examples.easy.index %>

In `targets` are the following files:

<%= examples.easy.targets.development %>
<%= examples.easy.targets.production %>

By running the example we will retrieve the default configuration, the default
is set to `development`. Bear in mind both `process.env.NODE_ENV` and
`argv.NODE_ENV` are not set.

```bash
$ node examples/easy
{ description: 'BY THE POWER OF DEVELOPMENT' }
```

If we export a system variable we can override it too.

```bash
$ export NODE_ENV=production
$ node examples/easy
{ description: 'BY THE POWER OF PRODUCTION' }
```

If we set `argv.NODE_ENV` we can override the the `process.env.NODE_ENV` value.

```bash
$ node examples/easy --NODE_ENV development
{ description: 'BY THE POWER OF DEVELOPMENT' }
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
