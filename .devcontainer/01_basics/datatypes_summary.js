//  Primitive

//  7 types which are under as:
// String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 20
const anothervalue = 12

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('13')
const anotherId = Symbol('23')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["spiderman", "Sammi", "ALii"];
let myObj = {
    name: "Sam",
    age: 21,
}

const Function = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// must read the ecma documentation for the type of operations