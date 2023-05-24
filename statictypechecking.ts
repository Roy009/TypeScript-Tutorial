// Static type-checking

let msg:string = "hello"
// msg is a variable because of static
// type checking it will give error at compile time 

// msg();

// But in javascript it will show the error at run time

// let msg1 = "Hello"
// msg(); // will give error at run time not in compile time

// Non-exception Failures
// In JavaScript it will print undefined 
const user = {
    name:'Rohit',
    age:21,
};
// user.location; // returns undefined in JavaScript which is a bug

// user.location; // will give error in typescript because it is not present in the object


// Easy to figure out the typos
// msg.toLocalLowerCase() // typo error
// msg.toLocallowerCase() // typo error 

msg.toLocaleLowerCase();

// Logical Errors

const value = Math.random() < 0.5 ? "a" : "b";

// if(value !== "a"){
//     console.log("it is a");
// }else if(value === "b"){ // easy to understand the logical errors
//     console.log("it is b");
// }
