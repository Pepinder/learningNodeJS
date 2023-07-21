//. js--> utiliza commonjs
// .mjs --> para utilizar ES MODULES
// .cjs --> para utilizar CommonJS

import { sum, mult, sub } from './sum.mjs'

console.log(sum(2, 1))
console.log(sub(2, 1))
console.log(mult(2, 1))