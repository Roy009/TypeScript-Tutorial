// Types
// Primitives 
let message: String = "Hello TypeScript";
let num: number = 12;
let bool: boolean = false;
let n: null = null;
let m: undefined;
let sym: symbol;

console.log(message, num, n, bool, m);

// Object types

// Array
let numarray: number[] = [1,2,3,4];
let strarray: string[] = ['one','two', 'three','four'];

// objects
let person: {
    id: number;
    name: string;
    age: number
}
person = {
    id: 1,
    name: 'rohit',
    age: 21
}

// Functions 
// function name / parameter name with type / return with return type
let welcome: (name: string) => string;

welcome = function(name:string) {
    return `Welcome ${name}`;
}
welcome;