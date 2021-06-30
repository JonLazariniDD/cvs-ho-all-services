# Javascript

This page will present some javascript key concepts and documentation that relate to CVS project when developing.
Credits go to the contributors from the open source community such as [Getify](https://github.com/getify) and projects are inspired by [clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript).

## Closures and Currying

Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created in. It is an important concept to understand as it can be useful during development, like emulating private methods. It can also help to learn how to avoid common mistakes, like creating closures in loops.

```js
// add returns a function that returns a  another function
function add(x) {
  let someTempVar = x;
  return function (y) {
    // The inner function has access to the parent scope and can consume someTempVar
    return someTempVar + y;
  };
}

const addFive = add(5)(2);
console.log(addFive); // 7
```

Currying allows to call a function with fewer arguments than it expects. It will return a function that takes the remaining arguments. It is the essence of functional programming and composition

```js
// is similar as above
const add = (x) => (y) => x + y;

const increment = add(1);
const addFive = add(5);

increment(2); // 3, is equivalent to add(1)(2)
addFive(2); // 7
```

Please refer to Mozilla documentation for [further details](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures).

## Asynchronous programming

Javascript is single threaded which means it can only execute one thing at a time.<br>
Code will be executed in sequence however the event loop available from the native APIs (such as window object for example) will enable to process events 'concurrently' so that threads are not blocked when the program is executed.
This is critical to understand this concept as asynchronous events will rely on the above mechanism to manage 'threads' and could lead to race conditions in the program and unpredictable behaviours or hard to trace bugs.
Promises or async/await are the preferred approach as it makes the code linear and easier to understand.

```Js
// 1- Event loop


console.log(1)
// callback is passed to the event-loop for later execution, thread not blocked
setTimeout(() => console.log(2), 0)
console.log(3)

// prints 1
// prints 3
// prints 2



// 2- Async programming


// Callback
const greeter = (person, msg, cb) => {
  console.log('Hello, ')
  cb(msg)
}

greeter('You', 'How are you ?', console.log)
// Hello You,
// How are you ?


// Promise
const person = (u) =>
  new Promise(resolve =>
    // fake asynchronous operation using the event loop
    setTimeout(resolve, 300, `Hello ${u}, `)
  )

const msg = () =>
  new Promise(resolve =>
    // fake asynchronous operation using the event loop
    setTimeout(resolve, 100, `How are you ?`)
  )

const greeter = () => person('You')
  .then(d => console.log(d))
  // chaining promises
  .then(msg)
  .then(d => console.log(d))

greeter()
// prints Hello You,
// prints How are you ?


// Async / await
const greeter = async (u) => {
  const p = await person(u)
  console.log(p)
  const m = await msg()
  console.log(m)
}

await greeter('You');
```

The following resources will explain in much more details the concepts explained above:

- [a/synchronous code, event loop](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- [callbacks, promises, async/await](https://www.youtube.com/watch?v=PoRJizFvM7s)

## Additional links

### To read

- [Ecmascript synthax](https://gist.github.com/vasco3/22b09ef0ca5e0f8c5996#frontend-masters---es6-notes)
- [Standard](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
- [You-Dont-Know-Js](https://github.com/getify/You-Dont-Know-JS)

### To watch

- [Ecmascript cheatsheet](https://www.youtube.com/watch?v=AfWYO8t7ed4&list=PLoYCgNOIyGACDQLaThEEKBAlgs4OIUGif&index=2)
