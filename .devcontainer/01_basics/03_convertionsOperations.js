let score = undefined

// console.log(typeof score)   
// console.log(typeof (score));

let result = Number(score)
// console.log(typeof result)
// console.log(result)


// "33" => 33
// "33abc" => NaN (Not a Number) but its type is number
// true => 1; false => 0
// null => 0
// undefined => NaN
// "" => 0

let loggedin = 0
let booleanResult = Boolean(loggedin)
// console.log(booleanResult)

// 0 => false; 1 => true
// "" => false; "Sam" => true


// ******************************** Operations ********************************
// 1. String Conversion
let value = true
console.log(typeof value)
console.log(value)
let number = 11
console.log(11+11);
console.log("11"+11);
console.log(11+"11");
console.log("11"+"11");
console.log("11"+11+11);
console.log(11+11+"11");
console.log("11"+11+"11");

let gameCount = 11
++gameCount;
console.log(gameCount)

// in prefix increment first increment the value then assign the value
// postfix increment first assign the value then increment the value