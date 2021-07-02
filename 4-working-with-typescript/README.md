# Working with typescript

The vast majority of CVS microservices uses typescript as it offers static type checking to reduce possible bugs when javascript/ecmascript is interpreted (JIT compiler) due to its nature of being a dynamic language.
Typescript checks a program for errors before execution based on the values/types defined throughout the program.

## Getting started with Typescript

For more information about typescript please follow this guide - [Getting started with typescript](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-oop.html).

You can also read [Typescript handbook](https://basarat.gitbook.io/typescript/).

## Building a project

To get familiar with clean code typescript patterns this repository will be a very good resource - [clean-code-typescript](https://github.com/labs42io/clean-code-typescript) - This is inspired by clean code javascript.

Initialise an npm project.

_Live demo_

```sh
# initialise project

node_modules/.bin/tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs

# build project
node_modules/.bin/tsc -p .
```

<br>
Further reading about the tooling and configurations:

- [Tooling](https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html)

- [configuration](https://www.typescriptlang.org/tsconfig)

## Additional links

- [Typescript cheat sheet](https://learnxinyminutes.com/docs/typescript/)
- [Typescript-configuration](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [Typescript playground](https://www.staging-typescript.org/play#show-examples)
