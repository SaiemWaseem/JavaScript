// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


// Concatenating two arrays
const combinedArr = myArr.concat(myHeors);
console.log("Combined Array: ", combinedArr);

// Example using map (optional, depending on your focus)
const squaredArr = myArr.map(num => num * num);
console.log("Squared Array: ", squaredArr);

//////////////////////////////////
const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dcHeros = ["Superman", "Flash", "Batman"];

// Merging arrays using the spread operator
const allHeros = [...marvelHeros, ...dcHeros];
console.log("All Heroes: ", allHeros);

// Example of a nested array being flattened
const mixedArray = [10, 20, [30, 40], 50, [60, [70, 80, [90]]]];
const flattenedArray = mixedArray.flat(Infinity);
console.log("Flattened Array: ", flattenedArray);

// Checking if a value is an array
console.log("Is 'Marvel' an Array? ", Array.isArray("Marvel"));
console.log("Convert 'Marvel' to Array: ", Array.from("Marvel"));
console.log("Array from Object (Edge Case): ", Array.from({ length: 3 }, (_, i) => i)); // New example

// Creating an array from individual scores
const scores = Array.of(110, 220, 330);
console.log("Scores Array: ", scores);
