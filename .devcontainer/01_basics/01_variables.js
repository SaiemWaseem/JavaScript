const accountId = 12345
let email = "saimwaseem@gmail.com"
var password =  "123456"
accountCity = "Lahore"
let province;

email = "sam@gmial.com"
password = "12345678"
accountCity = "Karachi"


/*
Perfer not to use var keyword
because the issue with var is that it is function scoped or block scoped
and it can be redeclared and updated
if you dont give any value to variable it will be undefined
*/
// accountId = 22;
// console.log(accountId);
console.table([accountId, email, password, accountCity, province]);
