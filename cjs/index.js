// console.log('Hola, mundo!') el tipico, se podra ver todo lo que hagas en js en la terminal
// console.log(typeof window); saldra undefined en la terminal debido que es solo nuestra terminal, no hay una web
//* console.log(globalThis); es una variable global en toda nuestra app esta es la forma correcta de usar el global
//globalThis.console.log("hola") todo viene de globalThis

//CommonJS require module
const sum = require('./sum')
console.log(sum(1, 2))


