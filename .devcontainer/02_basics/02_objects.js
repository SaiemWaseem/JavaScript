// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
//////////////////
// Adding a dynamic property
JsUser["preferredLanguage"] = "JavaScript";
console.log(`Preferred Language: ${JsUser.preferredLanguage}`);

// Using Object.keys to list all keys
console.log("Keys: ", Object.keys(JsUser));

// Using Object.values to list all values
console.log("Values: ", Object.values(JsUser));

// Using a method with dynamic context
JsUser.printLastLoginDays = function () {
    console.log(`Last Login Days are: ${this.lastLoginDays.join(", ")}`);
};
console.log(JsUser.printLastLoginDays());
///////////////////////////
// json tak
// const socialMediaUser = new Object()
const socialMediaUser = {}

socialMediaUser.id = "456xyz"
socialMediaUser.name = "Alex"
socialMediaUser.isLoggedIn = true

// console.log(socialMediaUser);

const premiumUser = {
    email: "alex@example.com",
    fullname: {
        userfullname: {
            firstname: "Alex",
            lastname: "Johnson"
        }
    }
}

// console.log(premiumUser.fullname.userfullname.firstname);

const data1 = {1: "x", 2: "y"}
const data2 = {3: "z", 4: "w"}
const data4 = {5: "p", 6: "q"}

// const mergedData = { data1, data2 }
// const mergedData = Object.assign({}, data1, data2, data4)

const mergedData = { ...data1, ...data2 }
// console.log(mergedData);


const customers = [
    {
        id: 101,
        email: "alex@gmail.com"
    },
    {
        id: 102,
        email: "jane@gmail.com"
    },
    {
        id: 103,
        email: "bob@gmail.com"
    },
]

// Accessing a customer's email
// console.log(customers[1].email);
// console.log(socialMediaUser);

// Object methods
// console.log(Object.keys(socialMediaUser));
// console.log(Object.values(socialMediaUser));
// console.log(Object.entries(socialMediaUser));

// Checking if a property exists
// console.log(socialMediaUser.hasOwnProperty('isLoggedIn'));


const product = {
    productName: "Learn Python",
    price: "499",
    instructor: "Alex Johnson"
}

// Destructuring object properties
const { instructor: mentor } = product

// console.log(instructor);
console.log(mentor);

// Example JSON-like structure
// {
//     "name": "Alex",
//     "productName": "Learn Python",
//     "price": "free"
// }

[
    { name: "Jane", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Alice", age: 22 }
]
