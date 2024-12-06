const username = "Sam";
const projectCount = 25;

// console.log(username + projectCount + " Value");

console.log(`Hello, my name is ${username} and my project count is ${projectCount}.`);

const appName = new String('sam-tech-dev');
// new String() is a constructor function that creates a wrapper object around the string value meaning that it is an object and not a primitive value in easy words it is a string object.

// console.log(appName[0]);
console.log(appName.__proto__);
// __proto__ is a property of the Object.prototype object meaning that it is available on every object in JavaScript.

// console.log(appName.length);
// console.log(appName.toUpperCase());
console.log(appName.charAt(3));
console.log(appName.indexOf('t'));

const shortenedName = appName.substring(0, 3);
// substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
console.log(shortenedName);

const slicedName = appName.slice(-7, 3);
// slice() method extracts a part of a string and returns a new string.
console.log(slicedName);

const rawString = "   sam   ";
console.log(rawString);
console.log(rawString.trim());
// trim() method removes whitespace from both ends of a string.

const website = "https://sam.com/sam%20developer";

console.log(website.replace('%20', '-'));

console.log(website.includes('john'));

console.log(appName.split('-'));

/*
replace() method replaces a specified value with another value in a string.
includes() method determines whether a string contains the characters of a specified string.
split() method splits a string into an array of substrings, and returns the new array.
*/