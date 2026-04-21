// Syntax To store data in javascript : Declaration variable = Data;

// In javascript We can declare the variables By using Three different keywords.

//1. var : Avoided in modern javascript
//2. let : Used for variables that can be reassigned
//3. const : Used for constant values that cannot be reassigned

// These three different variable declarations will differ mainly based on the four important parameters.

//1. Initilization
//2. Reaassignment 
//3. Re-Declaration
//4. Scope 

//1. Initialization ==> Initialization, meaning adding the value at the time of declaration 

var a; //It is not mandatory to initialize at the beginning. You can add later as well. 
let b; //It is not mandatory to initialize at the beginning. You can add later as well. 
const c = 10; //It is mandatory to initialize the value at the beginning. 

//2. Reassignment ==> Changing the value later 

a = 10; //var will allow reassignment
b = 20; //let also allow reassignment
//c = 30; //constant won't allow reassignment. 

//3. Re-declaration => Using the same variable to store different data. 

var a = "Bharath"; //Redeclaration is possible when it comes to var
// let b ="Sarath"; //Re-declaration is not possible. 
// const c ="Hayath"; //Re-declaration is not possible. 

//4. Scope => Scope is all about where we can use this data.

//let and const are block-scoped. 
//var is not block-scoped.

{
    let x = 100;
    const y = 200;
    var z = 500;
    // console.log(x);
    // console.log(y);
    // console.log(z);
}

// console.log(x);
// console.log(y);
console.log(z);

//More examples of Var , let & const
//var keyword
console.log("var KeyWord - Example");
var n = 5;
console.log(n);

//re-assign = Possible
n = 10;
console.log(n);

//re-declare = Possible
var n = "Sanjay";
console.log(n);

//let keyword
console.log("let KeyWord - Example");

let p = 10;
console.log(p);

//re-assign = Possible
p = 20;
console.log(p);

//re-declare = Not Possible
//let p ="Sanjay";
//console.log(p); //SyntaxError: Identifier 'p' has already been declared

//const keyword
console.log("const KeyWord - Example");

const c1 = "3.143"; 
console.log(c); 

//re-assign = Not Possible
//c = "2.221"; ////SyntaxError: Identifier 'c' has already been declared
//console.log(c);

//re-declare = Not Possible
//const c = "SANJAY"; //SyntaxError: Identifier 'c' has already been declared
//console.log(c);

console.log("Re-Assignment & Re-declare is not possible in case of const!")
console.log("Reassignment and re-declare is possible in case of var!")
console.log("Reassignment is possible but re-declare is not possible in case of let!")
console.log("var is not block scoped!")
console.log("let & const both are blocked scope!")

let admin;
let name;
name = "John";
admin = name;
console.log(admin);



