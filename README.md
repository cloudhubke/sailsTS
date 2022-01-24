# sails-js use Typescript.

A sails app that tries to use Typescript gradually.

the packages nodemon and tsc-watch are used to watch changes and compile files respectively.

make sure to add the packages and edit the scripts in package.json

```
    yarn add -D nodemon tsc-watch

```

package.json

```
    "compile": "tsc-watch --onSuccess \"node build/app.js\"",
    "start": "nodemon --ignore 'build/*' -e ts,js  --exec \"npm run compile\"",
```

## Linting

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

```

```
