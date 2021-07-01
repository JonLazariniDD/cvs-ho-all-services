# Ecosystem

CVS holds multiple projects running on different stacks and technologies such as Typescript, Java.
The [repositories](https://github.com/dvsa) are made of microservices, front-end applications, schedulers, platform scripting (currently stored on code-commit).
They are categorised under the following taxonomies:

- `'cvs-svc'`: microservices running with serverless stack for local development, usually holds the domain knowledge.

- `'cvs-tsk'`: operation schedulers performing tasks for our microservices/lambdas. For example lambdas processing events for marshalling data, event-bus related operations, monitoring and notifications.

- `'cvs-auto'`: repositories used for end-to-end tests (Java).

- `'cvs-app'`: client applications consuming our microservices. Js/Ts technologies are used and usually run on Angular & Ionic frameworks.

Please refer to the onboarding documentation for detailed information of the relevant services for CVS.<br>
It will include Low Level Designs such as Class diagrams, Flow diagrams, Design patterns, Architecture designs, Wireframes, etc...<br><br>
Informations on how to run the individual projects can be found on the `README.MD` files of the respective projects.

## Nodejs

[Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) used to write code for the web ([Web api](https://developer.mozilla.org/en-US/docs/Web/API)) can also be used to build scalable network applications with [Nodejs](https://nodejs.org/en/).

The CVS microservices are using Nodejs platform.

Node.js is built against modern versions of [V8](https://v8.dev/). By keeping up-to-date with the latest releases of this engine, the maintainers ensure new features from the JavaScript [ECMA-262 specification](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) are brought to Node.js developers in a timely manner, as well as continued performance and stability improvements.

More details can be found about the [runtime environment here](https://olinations.medium.com/the-javascript-runtime-environment-d58fa2e60dd0).

### as a script

_Live demo - Running a very complex script `index.js`_

```
node -v
node index.js
```

### in a shell

Live demo

## Managing node versions

A node version manager tool is highly recommended before your start developping to have the best development experience when working on multiple projects.

Since CVS has wide ecosystem, it is recommended to be able to switch between node versions for local development to avoid project bundling issues when typescript is transpiled.
The current codebase run on the following node versions > 10, < 12.
This meta-data is maintained on their respective repo using `package.json`.

[Nvm](https://github.com/nvm-sh/nvm) make possible to run nodejs per shell.

### Getting started

- [Installation guide](https://github.com/nvm-sh/nvm#installing-and-updating)

Don't forget to source your usual profile once installed - `source ~/.<profile_file>` and verify its installation `nvm -v`

### Basic commands

The first version installed becomes your default node.js version is node is not installed.

```sh
# install a specific node <version>
nvm install <version>

# list your available node version
nvm list

# use an installed <version> in the current shell
nvm use <version>

# list nodejs aliases
nvm alias
```

## npm

[npm](https://docs.npmjs.com/about-npm) powered by Node.js is one of the largest software registry, it is used across CVS as its ecosystem is largely around the Javascript stack to reuse open source code during development.

### Demo

_Live demo - Creating a task for our very complex script `index.js`_

```sh
# install dependencies for local development, bundles, etc.. won't be part of the production code
npm i -D

# dependencies required for the production code to be released
npm i -S

# used for local development
npm i -D

# list project dependencies
npm ls

# audit of the dependencies tree to list package vulnerabilities
npm audit
```

Avoid installing dependencies globally, the project has to be portable from any other machine given the similar platform specifications.

Think carefully about why you need a dependency and where it should be used (local development, build your bundle or part of the production code when deployed).

[npx](https://www.npmjs.com/package/npx) can also be used to execute package binaries.

### Useful links

- [npm scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts)
- [npm-commands](https://docs.npmjs.com/cli/v6/commands)
- [npm-config](https://docs.npmjs.com/cli/v6/using-npm/config)
- [package.json](https://docs.npmjs.com/cli/v6/configuring-npm/package-json)
- [package.json configuration](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#config)

## Additional links

### Node.js documentation

- [Full nodejs documentation](https://nodejs.org/docs/latest-v10.x/api/)
- [Node.js releases](https://nodejs.org/en/about/releases/)
- [Node.js & Ecmascript features](https://node.green/)

### To watch

- [What is NodeJs](https://www.youtube.com/watch?v=pU9Q6oiQNd0)
- [Getting started with Node.js](https://www.youtube.com/watch?v=TlB_eWDSMt4)
