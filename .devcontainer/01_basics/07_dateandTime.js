// Date and time 
// 1. Date
const now = new Date();
console.log(now.toString());
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

let myDate = new Date(2021, 0, 1, 12, 30, 45);
console.log(myDate.toString());

let timeStamp = Date.now();
console.log(timeStamp);
console.log(now.getTime());
console.log(now.getFullYear());
console.log(Math.floor(now.getTime()/10000));
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getFullYear());

let my_date = myDate.toLocaleString('default', {weekly: "long"});
console.log(my_date);

