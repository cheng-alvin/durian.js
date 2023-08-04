<h1 align="center">Contributing to Durian!</h1>
Welcome! Thanks for considering contributing to the durian project! Before you begin writing code and submitting pull requests, we recommend you read this contribution guide to understand how to contribute to our project! With this, you can fully understand the code styling, formats and habits that we code in to ensure a safe implementation and smooth maintenance.

## Code styling 💻
On the durian codebase, we write code in a special style. Following this style allows the code to be consistent and maintainable! Please read carefully the rules below that are used in the project. The rules are always enforced with [ESLint](https://en.wikipedia.org/wiki/ESLint). Please check the [eslintrc.js](https://github.com/cheng-alvin/durian.js/blob/main/.eslintrc.js) file for more information.

### Quotes
We use **double** quotes when creating strings instead of single quotes, it's just preference!

```js
const string = "This is a string!"; // Good 👍 !
const code = '💻'; // Bad 👎!
```

And if you would like or prefer to do so, template string literals are also allowed in our code style! 

```js
const dog = "🐶";
const message = `A dog looks like: ${dog}!`; // Also allowed 👍!
```

### Semi colons
As you should do, semi-colons are enforced in our code. This makes our code easier to read and find linebreaks, this can also prevent errors such as removing a space or character between lines.

```js
console.log("Hello world!"); // Good 👍!
console.log("Hello world!") // Bad 👎!
```

Otherwise, if you do not do this it can cause:

```js
function myFunc(){
  return 0
}

console.log("Hello world!") myFunc() // Error here 👈
```

But with semi:

```js
function myFunc(){
  return 0;
}

console.log("Hello world!"); myFunc(); // Works 👍!
```
