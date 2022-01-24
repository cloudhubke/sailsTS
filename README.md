# sails-js use Typescript.

A sails app that tries to use Typescript gradually.

## Steps

To Add Typescript and Linting, type the following commands.

```
    yarn add -D eslint-config-cloudhub-base

    yarn add -D typescript nodemon @types/node @types/express


```

## Linting the code clean

The package below can be used to completely lint the code.

```
    yarn add -D @cloudhub-js/sails-eslint

```

Then, edit the config/eslint.js

```

module.exports.eslint = {
  runEsLint: true,
  dirs: [
    'api/controllers',
    // 'api/middlewares',
    'api/dbobjects',
    'api/models',
    'api/policies',
    'api/services',
    'config',
  ],
};

```
